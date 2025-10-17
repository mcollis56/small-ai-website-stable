
'use client'

import { Download } from 'lucide-react'

interface DownloadButtonProps {
  filename: string
  displayName: string
  className?: string
}

export default function DownloadButton({ filename, displayName, className = '' }: DownloadButtonProps) {
  const handleDownload = () => {
    // Create a download link and trigger it
    const link = document.createElement('a')
    link.href = `/${filename}`
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <button 
      onClick={handleDownload}
      className={`inline-flex items-center space-x-1 ${className}`}
    >
      <Download className="h-4 w-4" />
      <span>{displayName}</span>
    </button>
  )
}
