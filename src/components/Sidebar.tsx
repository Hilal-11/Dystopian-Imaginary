import DefaultLayout from '@/layouts/default'
import React from 'react'
import logoImg from '../../dystopLogo.png'
import { defaultPrompts } from '@/config/DefaultPrrompts'
import { LuPanelRightOpen } from "react-icons/lu";
import { LuPanelLeftOpen } from "react-icons/lu";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
function Sidebar() {
    const navigate = useNavigate();
  return (
    
        <div className=' w-full h-screen flex flex-col lg:py-2 absolute inset-0'>
            <div className='w-full flex justify-between px-10 py-5 '>
                    <div className=''>
                        <IoArrowBackCircleOutline onClick={() => navigate(-1)} className='md:text-4xl text-3xl text-neutral-500 cursor-pointer' />
                    </div>
                    <div className=''>
                        <LuPanelRightOpen className='md:text-4xl text-3xl text-neutral-500 cursor-pointer' />
                    </div>
                </div>
                {/* Header */}

                <div className='w-full mx-auto flex flex-col items-center absolute bottom-5 px-2 lg:bottom-30 md:bottom-30'>
                    <div>
                        <img src={logoImg} alt="" />
                    </div>
                    <div className='rounded-md bg-transparent flex flex-col items-center justify-center w-full h-full'>
                        <div className='text-center '>
                            <h1 className='text-3xl md:text-5xl Inter-bold '>Dystopian image generator</h1>
                            <p className='text-sm Inter-medium px-2 md:px-20 mb-6'>A Dystopian specialized in generating and refining images with a mix of professional and friendly tone.image generator</p>
                        </div>
                        <div className='w-full lg:w-2/3 h-[140px] bg-white dark:bg-neutral-900 rounded-3xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
                        </div>
                    
                    </div>
                    </div>
            </div>
       
    
  )
}

export default Sidebar