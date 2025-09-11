import Sidebar from '@/components/Sidebar'
import React, { useEffect } from 'react'

function GenerateImages() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
   <div>
    <Sidebar />
   </div>
  )
}

export default GenerateImages
