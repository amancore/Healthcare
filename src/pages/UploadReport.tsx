import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { FileText, CloudUpload, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const UploadReport: React.FC = () => {
  const [files, setFiles] = useState<File[]>([])
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'complete'>('idle')

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles)
    setUploadStatus('uploading')
    
    // Simulated upload process
    setTimeout(() => {
      setUploadStatus('complete')
    }, 2000)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png']
    },
    maxFiles: 5
  })

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-medical-card p-8"
      >
        <h1 className="text-3xl font-display font-bold text-primary-600 mb-6 text-center">
          Upload Medical Report
        </h1>
        
        <div 
          {...getRootProps()} 
          className={`
            border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-all
            ${isDragActive 
              ? 'border-primary-400 bg-primary-50' 
              : 'border-medical-muted hover:border-primary-300'
            }
          `}
        >
          <input {...getInputProps()} />
          <CloudUpload 
            className="mx-auto mb-4 text-primary-500" 
            size={64} 
            strokeWidth={1.5} 
          />
          
          {isDragActive ? (
            <p className="text-primary-600">Drop files here...</p>
          ) : (
            <div>
              <p className="text-medical-text">
                Drag and drop medical reports here, or 
                <span className="text-primary-600 font-semibold"> click to select files</span>
              </p>
              <p className="text-sm text-medical-muted mt-2">
                PDF, JPEG, PNG (Max 5 files)
              </p>
            </div>
          )}
        </div>

        {files.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold mb-3 text-medical-text">Selected Files:</h3>
            {files.map((file, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center bg-medical-background p-3 rounded-md mb-2"
              >
                <FileText className="mr-3 text-primary-500" />
                <div className="flex-grow">
                  <p className="text-medical-text">{file.name}</p>
                  <p className="text-sm text-medical-muted">{(file.size / 1024).toFixed(2)} KB</p>
                </div>
                {uploadStatus === 'complete' && (
                  <CheckCircle2 className="text-green-500" />
                )}
              </motion.div>
            ))}
          </div>
        )}

        {uploadStatus === 'uploading' && (
          <div className="mt-6 w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-primary-500 h-2.5 rounded-full animate-pulse" 
              style={{width: '75%'}}
            ></div>
          </div>
        )}

        {uploadStatus === 'complete' && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full mt-6 bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Process Report
          </motion.button>
        )}
      </motion.div>
    </div>
  )
}

export default UploadReport