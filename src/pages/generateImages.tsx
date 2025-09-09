import React, { useEffect } from 'react'
import { title } from "@/components/primitives";

import DefaultLayout from '@/layouts/default'
function GenerateImages() {
  
  useEffect(() =>  {
    window.scrollTo(0, 0); 
  })

  return (
    <DefaultLayout>
          <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-lg text-center justify-center">
              <h1 className={title()}>Generate Images</h1>
            </div>
          </section>
        </DefaultLayout>
  )
}

export default GenerateImages