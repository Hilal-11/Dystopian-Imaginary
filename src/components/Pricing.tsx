import React from 'react'
import { PiCubeDuotone } from "react-icons/pi";
import { pricingConfig } from "../config/pricingConfig"
import { FaCheckCircle } from "react-icons/fa";
function Pricing() {
  return (
    <div className='container text-center mx-auto py-20'>
        <div className='space-y-2'>
            <div className='flex justify-center items-center'>
                <h3 className="dark:text-black bg-white flex gap-2 justify-center items-center shadow-sm shadow-gray-400 rounded-full px-8 py-1 Inter-bold text-sm"><span><PiCubeDuotone /></span>Pricing</h3>
            </div>
            <h1 className='lg:text-6xl text-4xl Inter-bold'>Simple Price For All</h1>
            <p className='Inter-medium text-md px-14 py-0'>Choose a plan that fits your goals and scale as you grow</p>
        </div><br />
        <div className='container mx-auto w-full  grid lg:grid-cols-3 grid-cols-1 justify-evenly items-end gap-6 lg:px-6 px-0 py-5 lg:py-10'>
           
            <div className='bg-white dark:bg-neutral-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-auto rounded-2xl px-6 py-4 space-y-4 '>
                <div className=' text-left space-y-2 pb-6'>
                    <h1 className='text-lg Inter-bold'>{pricingConfig[0].pricingType}</h1>
                    <h1 className='text-6xl Inter-bold'>${pricingConfig[0].monthlyAmount}<span className="text-[16px]">/month</span></h1>
                </div>
                {
                    pricingConfig[0].features.map((pricingData , index) => (
                        <div className='' key={index}>
                            <li className='list-none flex gap-3 items-center text-[16px] Inter-medium'><span className='text-slate-600'><FaCheckCircle /></span>{pricingData}</li>
                        </div>
                    ))
                }
                <div className='relative bottom-0'>
                    <button className='w-full py-2 rounded-full bg-black text-white dark:bg-white dark:text-black Inter-bold text-[16px]'>Buy Now</button>
                </div>
            </div>
            <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-auto rounded-2xl px-6 py-4 space-y-4 text-gray-300 bg-gradient-to-r from-red-500 to-orange-500' 
            >
                <div className=' text-left space-y-2 pb-6'>
                    <h1 className='text-lg Inter-bold'>{pricingConfig[1].pricingType}</h1>
                    <h1 className='text-6xl Inter-bold'>${pricingConfig[1].monthlyAmount}<span className="text-[16px]">/month</span></h1>
                </div>
                {
                    pricingConfig[1].features.map((pricingData , index) => (
                        <div key={index}>
                            <li className='list-none flex gap-3 items-center text-[16px] Inter-medium'><span className='text-slate-600'><FaCheckCircle /></span>{pricingData}</li>
                        </div>
                    ))
                }
                <div className='relative bottom-0'>
                    <button className='w-full py-2 rounded-full bg-black text-white dark:bg-white dark:text-black Inter-bold text-[16px]'>Buy Now</button>
                </div>
            </div>
            <div className='bg-white dark:bg-neutral-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-auto rounded-2xl px-6 py-4 space-y-4'>
                <div className=' text-left space-y-2 pb-6'>
                    <h1 className='text-lg Inter-bold'>{pricingConfig[2].pricingType}</h1>
                    <h1 className='text-6xl Inter-bold'>${pricingConfig[2].monthlyAmount}<span className="text-[16px]">/month</span></h1>
                </div>
                {
                    pricingConfig[2].features.map((pricingData , index) => (
                        <div key={index}>
                            <li className='list-none flex gap-3 items-center text-[16px] Inter-medium'><span className='text-slate-600'><FaCheckCircle /></span>{pricingData}</li>
                        </div>
                    ))
                }
                <div className='relative bottom-0'>
                    <button className='w-full py-2 rounded-full bg-black text-white dark:bg-white dark:text-black Inter-bold text-[16px]'>Buy Now</button>
                </div>
            </div>
    </div>
    </div>
  )
}

export default Pricing