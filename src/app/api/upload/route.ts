import { NextRequest, NextResponse } from 'next/server';
import { storage } from '../../../lib/firebase';
import { ref, uploadBytes, getDownloadURL, StorageError } from 'firebase/storage';

export async function POST(request: NextRequest) {
  try {
    console.log('Upload API route called');
    
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      console.error('No file provided in the request');
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    console.log(`File received: ${file.name}, size: ${file.size} bytes, type: ${file.type}`);

    // Convert file to ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    console.log('File converted to buffer');

    // Create a unique filename
    const timestamp = Date.now();
    const originalName = file.name.replace(/\s+/g, '_');
    const filename = `blog_images/${timestamp}_${originalName}`;
    console.log(`Storage path: ${filename}`);
    
    try {
      // Get storage reference
      const storageRef = ref(storage, filename);
      console.log('Storage reference created');
      
      // Upload the file with metadata to avoid CORS issues
      const metadata = {
        contentType: file.type,
        customMetadata: {
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'public, max-age=31536000'
        }
      };
      
      // Upload the file
      const snapshot = await uploadBytes(storageRef, buffer, metadata);
      console.log('File uploaded successfully');
      
      // Get the download URL
      const downloadURL = await getDownloadURL(snapshot.ref);
      console.log(`Download URL obtained: ${downloadURL}`);
      
      return NextResponse.json({ success: true, url: downloadURL });
    } catch (storageError: any) {
      console.error('Firebase Storage error:', storageError);
      
      // Get more detailed error information
      let errorDetails = 'Unknown Firebase Storage error';
      let statusCode = 500;
      
      if (storageError.code) {
        switch (storageError.code) {
          case 'storage/unauthorized':
            errorDetails = 'User does not have permission to access the object';
            statusCode = 403;
            break;
          case 'storage/canceled':
            errorDetails = 'User canceled the upload';
            statusCode = 400;
            break;
          case 'storage/unknown':
            errorDetails = 'Firebase Storage issue: This is likely a CORS or network connectivity problem';
            console.error('Firebase error details:', JSON.stringify(storageError));
            break;
          default:
            errorDetails = `Firebase Storage error: ${storageError.code}`;
            if (storageError.serverResponse) {
              errorDetails += ` - Server response: ${storageError.serverResponse}`;
            }
        }
      }
      
      return NextResponse.json({ 
        error: 'Firebase Storage error', 
        details: storageError.message || errorDetails,
        code: storageError.code,
        serverResponse: storageError.serverResponse,
        recommendation: 'Try using the direct upload method as a fallback'
      }, { status: statusCode });
    }
  } catch (error: any) {
    console.error('Error in upload API route:', error);
    return NextResponse.json({ 
      error: 'Failed to upload file',
      details: error.message || 'Unknown error',
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
} 