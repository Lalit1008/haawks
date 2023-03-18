import React from 'react'
import { Fade } from 'react-reveal'
const Hero = () => {
  return (
    <div ><div
    className="vheight overflow-hidden w-full h-screen bg-[url('/src/images/hero_backdrop1.png')] bg-cover bg-center flex justify-center items-center">
    <div className="flex flex-col justify-center items-center px-6 mt-16">
        <Fade top><h1 className="bigHeading text-center text-4xl sm:text-5xl md:text-6xl text-white font-bold drop-shadow-lg">Make the decentralized web
        </h1><h1 className="bigHeading text-center text-4xl sm:text-5xl md:text-6xl text-white font-bold drop-shadow-lg">a reality for everyone.
        </h1> 
        <p className='text-white pt-4 mb-8 text-center lg:w-1/2' style={{display: "flex", justifyContent: "center"}}>We aim to establish a secure space that instills confidence in investing in digital assets. Our platform provides essential resources to users, regardless of their level of expertise in the crypto investment realm.</p>
        </Fade>
        
        <div className='flex flex-wrap justify-center gap-x-10 gap-y-4'><Fade left>
          <a className="text-center block ml-10 sm:ml-0 px-6 py-3 bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] text-xl text-white font-semibold drop-shadow-lg rounded-full"
            href="#">Connect Now</a></Fade>
           <Fade right> <a className=" text-center px-6 py-3 bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] text-xl text-white font-semibold drop-shadow-lg rounded-full"
          href="#">Read Documentation</a></Fade>
          </div>
        
    </div>
</div></div>
  )
}

export default Hero