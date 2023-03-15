import React from 'react'
import Ctaimage from '../images/ctaimage.png'

const Ctawimage = () => {
  return (
    <div>
    <div className="bg-[#12122d] px-10 sm:px-16 pt-10 overflow-hidden relative">
        <div className='flex-col sm:flex sm:flex-row sm:justify-center sm:items-center'>
        <div className=" w-full text-start sm:w-1/2 py-12 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="sm:px-8 text-3xl font-extrabold text-bold text-white sm:text-4xl">
                <span className="ml-6 block text-gradient-to-br from-[#4361EE] to-[#4CC9F0]">
                Make the decentralized web
                </span>
                <span className="ml-6 block text-gradient-to-br from-[#4361EE] to-[#4CC9F0]">
                a reality for everyone.
                </span>
            </h2>
            <div className="px-8 flex flex-col gap-4 mt-8 lg:mt-10 lg:flex-shrink-0 sm:flex sm:flex-row sm:mt-10">
                {/* <div className="mt-12 inline-flex rounded-md shadow">
                    <button type="button" className="py-4 px-10  bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full ">
                        Get started
                    </button>
                </div> */}
                <button type="button" className="py-2 px-2 lg:py-4 lg:px-12  mx-6  bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full ">
                        Get started
                    </button>
                    <button type="button" className="py-2 px-2 lg:py-4  lg:px-12   mx-6  bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585]  text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full ">
                        Connect Now
                    </button>
            </div>
            
        </div>
        <div className='sm:w-1/2 flex justify-center items-center'>
        <img src={Ctaimage} className="sm:w-3/5"/>
        </div>
       </div>
    </div>
    </div>
  )
}

export default Ctawimage