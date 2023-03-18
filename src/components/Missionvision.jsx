import React from 'react'
import { Fade } from 'react-reveal'
import Mission from '../images/missiongraphic.png'
import Vision from '../images/visiongraphic.png'


const Missionvision = () => {
  return (
    <div className='p-10 md:pt-24 md:px-24 sm:p-10  bg-gradient-to-b from-[#000120] to-[#220056] '>
    <section className="about-us container mx-auto">
    <Fade bottom><h2 className='"bigHeading pt-4 font-bold xl:text-5xl lg:text-4xl md:text-4xl text-3xl lg:leading-[2.5rem] 2xl:leading-[3.7rem]"' style={{display: "flex", justifyContent: "center"}}>
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]">
                {" "}
                Know About Us{" "}
              </span>
              </h2>
              <p className='text-white pt-8 pb-12' style={{display: "flex", justifyContent: "center"}}>Learn more about our Vision behind HAAWKS and our Mission towards greatness.</p>
    </Fade>
    <br/>
    <div style={{maxWidth: "1200px",  margin: "auto"}} className="flex flex-wrap">
    <Fade left cascade>
        <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <h2 className='smallHeading text-3xl text-[#4CC9F0] pb-10 font-bold'>Our Vision</h2>
            <p className='text-white text-lg font-bold pb-10'>Our vision is to make blockchain technology accessible to the masses. We strive to create a decentralized platform and ecosystem that is secure, transparent, and efficient. </p>
            <ul>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"/> Committed to revolutionizing the way transactions are conducted, by leveraging the power of blockchain technology to create a platform that is decentralized, secure, and scalable. </li>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"/> Our goal is to become the go-to blockchain platform for businesses and individuals looking to take advantage of the benefits of decentralization.</li>
            </ul>
            <br/>
            {/* <a className="mt-16 px-12 py-3 bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] text-xl text-white font-semibold drop-shadow-lg rounded-full"
            href="#">Read More</a>  */}
        </div>
        
        <div className="lg:w-1/2 pr-4 lg:pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <img className='lg:pl-20 py-8' src={Vision} style={{width: '100%'}} alt="Vision Image"/>
        </div></Fade>
    </div>
    <br/>
    <br/>
    <br />    
    <div style={{maxWidth: "1200px",  margin: "auto"}} className="flex flex-wrap-reverse">
        <Fade right cascade>
        <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <img className='my-10 lg-pt-10' src={Mission} style={{width: '100%'}}  alt="Mission Image"/>
        </div>

        <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
        <h2 className='smallHeading text-3xl text-[#4CC9F0] pb-10 font-bold'>Our Mission</h2>
            <p className='text-white text-lg font-bold pb-10'>Our mission is to empower individuals and businesses to take control of their financial futures by providing a decentralized and transparent blockchain platform that enables fast, secure and low-cost transactions </p>
            <ul>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i> We strive to build a strong community of users and developers who share our vision of a decentralized future.</li>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i> By fostering a culture of collaboration and innovation, we aim to create a platform that is continuously evolving and adapting to meet the needs of our users.</li>  
            </ul>
            <br/>
            {/* <a className="mt-16 px-12 py-3 bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] text-xl text-white font-semibold drop-shadow-lg rounded-full"
            href="#">Read More</a>  */}
        </div> 
        </Fade>
    </div>
   <div className='flex justify-center'> <a className="my-4 md:my-16 mx-8 px-14 md:px-24 py-3 bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] text-xl text-white font-semibold drop-shadow-lg rounded-full"
          href="#">Read More</a></div>
</section></div>
  )
}

export default Missionvision