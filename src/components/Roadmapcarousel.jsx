import React from 'react'
import Carousel from 'react-multi-carousel';
import { Fade } from 'react-reveal';
import 'react-multi-carousel/lib/styles.css';
import G5 from '../images/Group 5.svg'
import G7 from '../images/Group 7.svg'
import G8 from '../images/Group 8.svg'
import G9 from '../images/Group 9.svg'
import G10 from '../images/Group 10.svg'
import G11 from '../images/Group 11.svg'
import G15 from '../images/Group 15.svg'
import G12 from '../images/Group 12.svg'
import G16 from '../images/Group 16.svg'
import G13 from '../images/Group 13.svg'
import G17 from '../images/Group 17.svg'
import G14 from '../images/Group 14.svg'
const Roadmapcarousel = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (<div className='bg-gradient-to-t from-[#000120] to-[#220056] py-24 px-48'>
    <Fade bottom cascade>
    <div className='p-10'>
      {/* <div className="ml-10 w-10 h-1 from-[#7361F2] to-[#BD4FF1] bg-gradient-to-r "></div> */}
      <h1 className="pt-4 pl-10 font-semibold xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-white lg:leading-[2.5rem] 2xl:leading-[3.7rem]" style={{display: "flex", justifyContent: "center"}}>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]">
                {" "}
                RoadMap{" "}
              </span>
            </h1>
            <p className='text-white pt-2' style={{display: "flex", justifyContent: "center"}}>Learn more about our Vision behind HAAWKS and our Mission towards greatness.</p>
    <br/>
            </div>
    <div>
        <Carousel responsive={responsive}>
            <div><img src={G5} alt="" /></div>
            <div><img src={G10} alt="" /></div>
            <div><img src={G7} alt="" /></div>
            <div><img src={G9} alt="" /></div>
            <div><img src={G8} alt="" /></div>
            <div><img src={G11} alt="" /></div>
            <div><img src={G15} alt="" /></div>
            <div><img src={G12} alt="" /></div>
            <div><img src={G16} alt="" /></div>
            <div><img src={G13} alt="" /></div>
            <div><img src={G17} alt="" /></div>
            <div><img src={G14} alt="" /></div>
        </Carousel>
    </div>
    </Fade>
    </div>
  )
}

export default Roadmapcarousel