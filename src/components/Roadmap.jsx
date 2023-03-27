import React from 'react'
import { Fade } from 'react-reveal'
const Roadmap = () => {
  return ( 
    <div className='bg-gradient-to-b from-[#000120] to-[#220056] p-10'>
      <Fade right cascade>
      <div className='p-10'>
      {/* <div className="ml-10 w-10 h-1 from-[#7361F2] to-[#BD4FF1] bg-gradient-to-r "></div> */}
      <h1 className="pt-4 pl-10 font-semibold xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-white lg:leading-[2.5rem] 2xl:leading-[3.7rem]">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0] -translate-x-2/4">
                {" "}
                RoadMap{" "}
              </span>
            </h1>
            <p className='text-white pt-2' style={{display: "flex", justifyContent: "center"}}>Learn more about our Vision behind HAAWKS and our Mission towards greatness.</p>
    <br/>
            </div>
            <div className='p-20'>
<ol className="relative border-l border-white dark:border-white">                  
    <li className="mb-10 ml-6">            
        <span className="absolute flex items-center justify-center w-6 h-6 bg-[#4CC9F0] rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-[#4CC9F0]">
            <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-[#3A0CA3]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-[#F72585] dark:text-[#F72585]">Flowbite Application UI v2.0.0 <span className="bg-[#4CC9F0] text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-[#4CC9F0] dark:text-[#3A0CA3] ml-3">Latest</span></h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-white">Released on January 13th, 2022</time>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-100">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Download ZIP</a>
    </li>
    <li className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-[#4CC9F0]">
            <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-[#3A0CA3]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-[#F72585] dark:text-[#F72585]">Flowbite Figma v1.3.0</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-white">Released on December 7th, 2021</time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-100">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
    </li>
    <li className="ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-[#4CC9F0]">
            <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-[#3A0CA3]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-[#F72585] dark:text-[#F72585]">Flowbite Library v1.2.2</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-white">Released on December 2nd, 2021</time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-100">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
    </li>
</ol>
</div>
</Fade>
</div>
  )
}

export default Roadmap