import DefaultLayout from '@/layouts/default'
import React from 'react'
import logoImg from '../../dystopLogo.png'
import { defaultPrompts } from '@/config/DefaultPrrompts'
function Sidebar() {
  return (
    <DefaultLayout>
        <div className='w-full h-auto flex flex-col justify-center items-center py-10 px-6 absolute left-0'>
                
                    <div>
                        <img src={logoImg} alt="" />
                    </div>
                <div className='rounded-md bg-transparent flex flex-col items-center justify-start w-full h-full'>
                    <div className='text-center '>
                        <h1 className='text-3xl md:text-5xl Inter-bold '>Dystopian image generator</h1>
                        <p className='text-sm Inter-medium px-2 md:px-20 mb-6'>A Dystopian specialized in generating and refining images with a mix of professional and friendly tone.image generator</p>
                    </div>
                    <div className='w-full lg:w-2/3 h-[140px] bg-white dark:bg-neutral-900 rounded-3xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
                    </div>
                <div className='w-full lg:w-2/3 flex gap-0 justify-center items-center flex-wrap mt-2 space-x-4'>
                    {
                        defaultPrompts.map((item) => (
                            <p key={item.id} className='w-[300px] overflow-hidden whitespace-nowrap px-4 text-xs Inter-medium py-1 mt-6 bg-white dark:bg-neutral-900 rounded-full shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>{item.prompt}</p>
                        ))
                    }
                </div>
                </div>
            </div>
       
    </DefaultLayout>
  )
}

export default Sidebar