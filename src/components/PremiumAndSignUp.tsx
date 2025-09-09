import React from 'react'
import logoImg from '../../dystopLogo.png'  
function PremiumAndSignUp() {
  return (
    <div className='flex justify-center items-center py-10 container mx-auto lg:max-w-[100%] px-0'>
        <div className=' w-full rounded-2xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] h-auto bg-gradient-to-t from-[#ffffff] to-[#d8d8d8] dark:bg-gradient-to-t dark:from-[#4c4c4c] dark:to-[#191818] grid lg:grid-cols-2 grid-cols-1 lg:py-5 py-10'>
            <div className='px-8 py-6 lg:px-14 lg:py-20'>
                <h1 className='text-2xl lg:tcursor-pointerext-5xl Inter-bold '>Start now, <br /> no strings attached</h1>
                <p className='text-md py-2 Inter-medium text-[16px]'>Integrate complete user management in minutes. Free for your first 10,000 monthly active users and 100 monthly active orgs. No credit card required.</p>
                <div className='flex lg:gap-5 gap-2 py-6'>
                    <button className="Inter-bold cursor-pointer rounded-2xl px-5 lg:px-14 py-[6px] bg-white dark:bg-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">Book Call</button>
                    <button className="Inter-bold cursor-pointer rounded-2xl px-5 lg:px-14 py-[6px] bg-white dark:bg-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">Signup</button>
                </div>
            </div>
            <div className='flex items-center lg:justify-center justify-center lg:pr-10'>
                <span className='text-[15rem] lg:text-[25rem]'><img src={logoImg} alt="Error" /></span>
            </div>
        </div>
    </div>
  )
}

export default PremiumAndSignUp