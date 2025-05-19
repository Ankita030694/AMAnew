import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { mkdir } from 'fs/promises';

// This is a temporary solution to bypass Firebase Storage
// It saves files to the public folder
export async function POST(request: NextRequest) {
  try {
    console.log('Direct upload API called');
    
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      console.error('No file provided in the request');
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    console.log(`File received: ${file.name}, size: ${file.size} bytes, type: ${file.type}`);

    // Convert file to Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Create a unique filename
    const timestamp = Date.now();
    const originalName = file.name.replace(/\s+/g, '_');
    const filename = `${timestamp}_${originalName}`;
    
    // Ensure the directory exists
    const uploadDir = join(process.cwd(), 'public', 'uploads');
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (err) {
      console.log('Directory already exists or cannot be created');
    }
    
    // Create the file path
    const filePath = join(uploadDir, filename);
    
    // Write the file
    try {
      await writeFile(filePath, buffer);
      console.log(`File saved to ${filePath}`);
      
      // Return a URL that points to the file
      const fileUrl = `/uploads/${filename}`;
      return NextResponse.json({ 
        success: true, 
        url: fileUrl,
        message: 'File uploaded locally instead of to Firebase Storage'
      });
    } catch (writeError: any) {
      console.error('Error writing file:', writeError);
      return NextResponse.json({ 
        error: 'Error writing file', 
        details: writeError.message || 'Unknown error' 
      }, { status: 500 });
    }
  } catch (error: any) {
    console.error('Error in direct upload API:', error);
    return NextResponse.json({ 
      error: 'Failed to upload file',
      details: error.message || 'Unknown error'
    }, { status: 500 });
  }
} 