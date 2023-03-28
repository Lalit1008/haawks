
import React from "react";
import Logo from '../images/haawks_white.png'
export default function Navbar() {
    function toogleUl() {
        var navbar = document.querySelector(".navbar")
        navbar.classList.toggle("nav_active")
    }
  return (
    <>

        
        <div className="top-bar">
            <div className="top-bar-left">
                <div className="top-bar-email">
                    <i className=" fa-solid fa-envelope"></i>
                    <a className=" " href="mailto: contact@haawks.io" target="_blank">contact@haawks.io</a>
                </div>
                {/* <div className="top-bar-contact">
                    <i className="hidden sm:inline fa-sharp fa-solid fa-phone"></i>
                    <a className='hidden sm:inline ' href="tel:+919358593003" target="_blank">+91 987 654 3210</a>
                </div> */}
            </div>
            <div className="top-bar-right sm:flex sm:justify-center sm:mx-0">
                {/* <a href="https://www.facebook.com/MetaBlockTechnologies" className='hidden sm:inline'  target="_blank"><i className="fa-brands fa-facebook"></i></a> */}
                {/* <a href="https://instagram.com/metablocktechnologies1" className='hidden sm:inline'  target="_blank"><i className="fa-brands fa-instagram"></i></a> */}
                <a href="https://t.me/haawkschain" target="_blank"><i className="fa-brands fa-telegram"></i></a>
                <a href="https://www.linkedin.com/company/haawkschain/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://twitter.com/Haawks_chain" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                {/* <a href="https://twitter.com/Metablocktech" className='hidden sm:inline'  target="_blank"><i class="fa-brands fa-discord"></i></a> */}
                {/* <a href="https://twitter.com/Metablocktech" className='hidden sm:inline'  target="_blank"><i class="fa-brands fa-medium"></i></a> */}
                {/* <a href="https://twitter.com/Metablocktech" className='hidden sm:inline'  target="_blank"><i class="fa-brands fa-youtube"></i></a> */}
                


            </div>
        </div>
    
        <div className="stickbar navbar  bg-transparent">
            <img className="ml-4 sm:ml-8 h-16 w-16" src={Logo} alt="" />
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#dex">DEX</a></li>
                <li><a href="#nftmarketplace">NFT Marketplace</a></li>
                <li><a href="#layer1">Layer 1</a></li>
                <li><a href="#">Media</a></li>
                {/* <li><a href="#">Exchange<i className="fa-solid fa-caret-down"></i></a>
                    <ul className="secondul">
                        <li><a href="#">Dex Devlopment</a></li>
                        <li><a href="/DecentralizedExchangeDevelopment.html">P2P Exchange Devlopment</a></li>
                    </ul>
                </li>
                <li><a href="#">Other Services<i className="fa-solid fa-caret-down"></i></a>
                    <ul className="secondul">
                        <li><a href="http://metablocktechnologies.org/">Blockchain Training</a></li>
                        <li><a href="https://metablocktechnologies.in/">Web Development</a></li>
                        <li><a href="https://metablocktechnologies.in/">Digital Marketing</a></li>
                    </ul>
                </li>
                <li><a href="#">More<i className="fa-solid fa-caret-down"></i></a>
                    <ul className="secondul">
                        <li><a href="/ComingSoon.html">About Us</a></li>
                        <li><a href="/Contact_page.php">Contact Us</a></li>
                        <li><a href="/ComingSoon.html">FAQ</a></li>
                        <li><a href="/ComingSoon.html">Policies</a></li>
                    </ul>
                </li> */}
                <button className="nav-query-btn querybtn bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585]">Connect</button>
                {/* <div className="callbox">
                    <i className="fas fa-phone-volume"></i>
                    <div className="nav-call-hover-details">
                        <div className="nav-call-hover-details-up">
                            <i className="fa-sharp fa-solid fa-phone"></i> Let's Connect With Metablock Technologies
                        </div>
                        <div className="nav-call-hover-details-middle">
                            <p>For Sales Inquiry</p>
                            <div className="nav-call-hover-details-middlepart">
                                <i className="fa-sharp fa-solid fa-phone"></i>
                                <a href="tel:+919358593003" target="_blank"> +91 935 859 3003</a>
                            </div>
                            <div className="nav-call-hover-details-middlepart">
                                <i className="fa-solid fa-envelope"></i>
                                <a href="mailto: Info@metablocktechnologies.io" target="_blank">Info@metablocktechnologies.io</a>
                            </div>
                        </div>
                        <div className="nav-call-hover-details-down">
                            <p>For Quick Connect</p>
                            <div className="nav-call-hover-details-downpart">
                                <i className="fa-brands fa-whatsapp"></i>
                                <a href="https://wa.me/+919358593003" target="_blank">Whatsapp</a>
                            </div>
                            <div className="nav-call-hover-details-downpart">
                                <i className="fa-brands fa-linkedin"></i>
                                <a href="https://www.linkedin.com/company/metablock-technologies/" target="_blank">Linkedin</a>
                            </div>
                            <div className="nav-call-hover-details-downpart">
                                <i className="fa-brands fa-facebook"></i>
                                <a href="https://www.facebook.com/MetaBlockTechnologies" target="_blank">Facebook</a>
                            </div>
                        </div>
                    </div>
                </div> */}

            </ul>
            <div className="navbar-icon" onClick={toogleUl}>
                <i className="fa-solid fa-bars text-white"></i>
                <i className="fa-solid fa-xmark text-white"></i>
            </div>
        </div>
        
        

    
    </>
  );
}
