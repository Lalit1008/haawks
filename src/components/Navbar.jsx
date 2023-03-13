
import React from "react";

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
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto: Info@metablocktechnologies.io" target="_blank">info@haawks.io</a>
                </div>
                <div className="top-bar-contact">
                    <i className="fa-sharp fa-solid fa-phone"></i>
                    <a href="tel:+919358593003" target="_blank">+91 987 654 3210</a>
                </div>
            </div>
            <div className="top-bar-right">
                <a href="https://www.facebook.com/MetaBlockTechnologies" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://instagram.com/metablocktechnologies1" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://wa.me/+919358593003" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
                <a href="https://www.linkedin.com/company/metablock-technologies/" target="_blank"><i
                        className="fa-brands fa-linkedin"></i></a>
                <a href="https://twitter.com/Metablocktech" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://twitter.com/Metablocktech" target="_blank"><i class="fa-brands fa-discord"></i></a>
                <a href="https://twitter.com/Metablocktech" target="_blank"><i class="fa-brands fa-medium"></i></a>
                <a href="https://twitter.com/Metablocktech" target="_blank"><i class="fa-brands fa-youtube"></i></a>
                


            </div>
        </div>
    
        <div className="stickbar navbar  bg-gradient-to-r from-[#220056] to-[#540444]">
            <h1 className="logo text-white text-3xl font-bold">HAAWKS</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">DEX</a></li>
                <li><a href="#">NFT Marketplace</a></li>
                <li><a href="#">Media</a></li>
                <li><a href="#">Blog</a></li>
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
                <i className="fa-solid fa-bars"></i>
                <i className="fa-solid fa-xmark"></i>
            </div>
        </div>
        
        

    
    </>
  );
}
