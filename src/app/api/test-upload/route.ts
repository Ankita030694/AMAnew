import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({ 
    status: 'API route working',
    message: 'This is a test endpoint to verify API routes are functioning correctly'
  });
}

export async function POST(request: NextRequest) {
  try {
    console.log('Test upload API route called');
    
    // Echo back the request details for debugging
    const contentType = request.headers.get('content-type');
    
    if (contentType?.includes('multipart/form-data')) {
      try {
        const formData = await request.formData();
        const files = Array.from(formData.entries())
          .filter(([key, value]) => value instanceof File)
          .map(([key, value]) => ({
            key,
            name: (value as File).name,
            type: (value as File).type,
            size: (value as File).size
          }));
        
        return NextResponse.json({
          success: true,
          message: 'Form data received',
          contentType,
          files
        });
      } catch (formError: any) {
        return NextResponse.json({
          error: 'Error parsing form data',
          message: formError.message || 'Unknown error',
          contentType
        }, { status: 400 });
      }
    }
    
    return NextResponse.json({
      success: true,
      message: 'Request received, but not multipart/form-data',
      contentType
    });
  } catch (error: any) {
    console.error('Error in test upload API:', error);
    return NextResponse.json({
      error: 'Test upload failed',
      message: error.message || 'Unknown error'
    }, { status: 500 });
  }
} 