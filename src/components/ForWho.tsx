import React from 'react'
import { forWho } from '../config/forWho';
import logoImg from '../../dystopLogo.png'
function ForWho() {
  return (
    <div>
        <div className=''>
            <h1 className='md:text-6xl text-3xl Inter-bold text-center md:py-4 heading-lg'>Who is <span className='bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text'> Dystopian </span>Imagination for</h1>
        </div>

        <div className='relative py-8 flex flex-wrap justify-between items-center h-auto gap-6'>
        {
            forWho.map((item) => (
                <div className='pb-5 cursor-pointer w-full md:w-[360px] h-auto bg-white dark:bg-neutral-900 rounded-2xl hover:border hover:border-orange-600 hover:dark:border-orange-600 transition duration-500 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] flex flex-col ' key={item.id}>
                    <div>
                        <img className='w-full object-cover rounded-t-2xl h-[250px]' src={item.image} alt="" />
                    </div>                                                                                                                                                                                                                                                                                                                                                                     
                    <div>
                        <h1 className='text-center text-2xl Inter-bold py-2'>{item.title}</h1>
                        <p className='Inter-medium text-sm px-8 text-center py-2'>{item.description}</p>
                    </div>
                </div>
            ))
        }
        <div className='w-full flex justify-center items-center mt-6'>
            <div className="Inter-medium flex gap-2 items-center justify-center w-full lg:w-2/3 py-3 rounded-[12px] bg-neutral-950 text-white dark:bg-neutral-100 dark:text-black shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            <img className='w-[40px]' src={logoImg} alt="err" />
            <span className='relative top-0.5 Inter-medium text-[17px]'>Try Dystopian Imagination</span>
          </div>
        </div>
    </div>
    </div>
  )
}

export default ForWho