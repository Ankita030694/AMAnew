'use client'

import { useEffect, useRef, useState } from 'react'

const CloudinaryTest = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [cloudinaryStatus, setCloudinaryStatus] = useState<string>('Checking...')
  const cloudinaryRef = useRef<any>(null)
  const widgetRef = useRef<any>(null)
  
  // Check if Cloudinary is available
  useEffect(() => {
    const checkCloudinary = setTimeout(() => {
      try {
        if (typeof window !== 'undefined') {
          // @ts-ignore
          if (window.cloudinary) {
            setCloudinaryStatus('✅ Available')
            
            // Store reference
            // @ts-ignore
            cloudinaryRef.current = window.cloudinary
            
            // Try to create widget
            try {
              // @ts-ignore
              widgetRef.current = cloudinaryRef.current.createUploadWidget({
                cloudName: 'AMALEGAL',
                uploadPreset: 'Unsigned',
                sources: ['local'],
              }, (err: any, result: any) => {
                if (err) {
                  console.error('Widget error:', err)
                }
                if (result && result.event === 'success') {
                  console.log('Upload result:', result.info)
                }
              })
              
              if (widgetRef.current) {
                setStatus('success')
              } else {
                setStatus('error')
              }
            } catch (e) {
              console.error('Failed to create widget:', e)
              setStatus('error')
            }
          } else {
            setCloudinaryStatus('❌ Not available')
            setStatus('error')
          }
        }
      } catch (e) {
        console.error('Error checking Cloudinary:', e)
        setCloudinaryStatus('❌ Error checking')
        setStatus('error')
      }
    }, 2000)
    
    return () => clearTimeout(checkCloudinary)
  }, [])
  
  const handleTestClick = () => {
    try {
      setStatus('loading')
      console.log('Opening widget:', widgetRef.current)
      
      if (widgetRef.current) {
        widgetRef.current.open()
      } else {
        console.error('Widget reference not available')
        setStatus('error')
      }
    } catch (e) {
      console.error('Error opening widget:', e)
      setStatus('error')
    }
  }
  
  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-6">
      <h2 className="text-lg font-semibold mb-3">Cloudinary Test Panel</h2>
      
      <div className="mb-3">
        <p>Cloudinary Status: <span className="font-medium">{cloudinaryStatus}</span></p>
        <p>Widget Status: <span className="font-medium">{
          status === 'idle' ? '⏳ Initializing...' :
          status === 'loading' ? '⌛ Loading...' : 
          status === 'success' ? '✅ Ready' :
          '❌ Failed'
        }</span></p>
      </div>
      
      <div className="flex gap-2">
        <button 
          onClick={handleTestClick}
          disabled={status !== 'success'}
          className={`px-4 py-2 rounded-md text-white ${
            status === 'success' ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400'
          }`}
        >
          Test Upload Widget
        </button>
        
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
        >
          Reload Page
        </button>
      </div>
      
      <div className="mt-4 text-xs text-gray-600">
        <p>Check the browser console for detailed debugging information</p>
      </div>
    </div>
  )
}

export default CloudinaryTest 