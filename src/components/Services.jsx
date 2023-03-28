import React from 'react'
import Assetimage from '../images/assetgraphic.webp'
import Deximage from '../images/dexgraphic.png'
import Nftimage from '../images/nftmarketgraphic.png'
import Layer1image from '../images/layer1.png'
const Services = () => {
  return (
    <div> <div className='p-10 md:px-24 md:pt-24 sm:p-10 bg-gradient-to-t from-[#000120] to-[#220056]'>
    <section className="about-us container mx-auto">
    <h2 className='" bigHeading pt-4 font-bold xl:text-5xl lg:text-4xl md:text-4xl text-3xl lg:leading-[2.5rem] 2xl:leading-[3.7rem] sm:px-10"' style={{display: "flex", justifyContent: "center"}}>
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]">
                {" "}
                Our Services{" "}
              </span>
              </h2>
              <p className='text-white sm:px-10 pt-8 pb-12' style={{display: "flex", justifyContent: "center"}}>Learn more about our Vision behind HAAWKS and our Mission towards greatness.</p>

    <br/>
    <div style={{maxWidth: "1200px",  margin: "auto"}} className="flex flex-wrap">

        <div id='dex' className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <h2 className='smallHeading text-4xl text-[#4CC9F0] pb-10 font-bold'>DEX</h2>
            <p className='smallHeading text-white text-xl font-bold pb-10'>Details. </p>
            <ul>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"/>Our Decentralised Exchange provides secure, transparent, and flexible token swapping with real-time pricing data, order book updates, margin trading, and access to a variety of crypto assets.</li>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"/>Our comprehensive suite of features includes liquidity pooling, swapping options, variable rewards, and exclusive launch pools hosted by selected partners, making Haawks Dex one of the most ambitious and innovative offerings in the market.</li>
            </ul>
            <br/>
            <p className='smallHeading text-white text-xl font-bold pb-10'>Utility. </p>
            <ul>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i>Haawks Dex's utility lies in its secure and flexible platform for token swapping, providing efficiency and convenience to users, and potential opportunities for higher profits through exclusive features such as liquidity pooling and variable rewards.</li>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i>This can increase profitability and provide access to exclusive launch pools hosted by selected partners, making it a valuable tool for both experienced and novice traders in the ever-evolving crypto market.</li>
            </ul>
            <br/>
            {/* <a className="mt-16 px-12 py-3 bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] text-xl text-white font-semibold drop-shadow-lg rounded-full"
            href="#">Read More</a>  */}
        </div>
        
        <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <img className='py-8 md:pt-20' src={Deximage} style={{width: '100%'}} alt="Vision Image"/>
        </div>
    </div>
    <br/>
    <br/>    
    <div style={{maxWidth: "1200px",  margin: "auto"}} className="flex flex-wrap-reverse">

        <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <img className='py-8 md:pt-20' src={Nftimage} style={{width: '90%'}}  alt="Mission Image"/>
        </div>

        <div id='nftmarketplace' className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
        <h2 className='smallHeading text-4xl text-[#4CC9F0] pb-10 font-bold'>NFT Marketplace</h2>
        <p className='smallHeading text-white text-xl font-bold pb-10'>Details</p>
            <ul>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i>Our NFT Marketplace offers a secure and transparent platform for buying, selling, and trading NFTs without intermediaries.</li>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i>We provide a user-friendly platform and plan to launch a permissioned NFT Launchpad for selected sectors, providing users with opportunities to engage with high-quality NFTs.</li>  
            </ul>
            <br/><p className='smallHeading text-white text-xl font-bold pb-10'>Utility</p>
            <ul>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i>This level of transparency and security allows users to trade NFTs with confidence, knowing that they are conducting transactions on a trusted platform.</li>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i>Our user can trade NFT in a user friendly environment with our carefully curated collection through our launchpad functionality</li>  
            </ul>
            <br/>
            {/* <a className="mt-16 px-12 py-3 bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] text-xl text-white font-semibold drop-shadow-lg rounded-full"
            href="#">Read More</a>  */}
        </div> 

    </div>
    <br />
    <br />
    <div style={{maxWidth: "1200px",  margin: "auto"}} className="flex flex-wrap">

        <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <h2 className='smallHeading text-4xl text-[#4CC9F0] pb-10 font-bold'>Asset Tokenisation</h2>
            <p className='smallHeading text-white text-xl font-bold pb-10'>Details. </p>
            <ul>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i> Asset tokenization in real estate is the process of converting ownership of a property into digital tokens that can be traded on a blockchain-based platform.</li>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i> The process of tokenization involves digitizing the asset's legal ownership, value, and other relevant information, which is then recorded on a blockchain.</li>
            </ul>
            <br/>
            <p className='smallHeading text-white text-xl font-bold pb-10'>Utility. </p>
            <ul>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i> Tokenization can provide many benefits for real estate investors and property owners.</li>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i> Overall, asset tokenization is an innovative solution that has the potential to transform the way real estate transactions are conducted and increase access to investment opportunities in the industry.</li>
            </ul>
            <br/>
            {/* <a className="mt-16 px-12 py-3 bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] text-xl text-white font-semibold drop-shadow-lg rounded-full"
            href="#">Read More</a>  */}
        </div>
        
        <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4 flex justify-center items-center">
            <img className='py-8 md:pt-20' src={Assetimage} style={{width: '100%'}} alt="Vision Image"/>
        </div>
    </div>
    <br/>
    <br/>    
    <div style={{maxWidth: "1200px",  margin: "auto"}} className="flex flex-wrap-reverse">

        <div id='layer1' className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
            <img className='py-8 md:pt-20' src={Layer1image} style={{width: '100%'}}  alt="Mission Image"/>
        </div>

        <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
        <h2 className='smallHeading text-4xl text-[#4CC9F0] pb-10 font-bold'>Layer 1 Blockchain</h2>
        <p className='smallHeading text-white text-xl font-bold pb-10'>Details</p>
            <ul>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i>Haawks is a next-generation blockchain protocol that connects specialized blockchains to solve real-world problems and promote growth in various sectors.</li>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i>It offers superior features, such as transparent governance, upgradeability, and cross-chain composability, making it more advanced than existing networks.</li>  
            </ul>
            <br/><p className='smallHeading text-white text-xl font-bold pb-10'>Utility</p>
            <ul>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i>Haawks blockchain's versatility, effectiveness, and scalability are enhanced by cross-chain communication, enabling the transfer of assets and data between blockchains, boosting network scalability and accelerating mass adoption.
</li>
                <li className='text-gray-100 pb-5'><i class="fa-solid fa-check px-1 text-[#4CC9F0]"></i>Multimodal sharding allows each chain to specialize in a specific use case, leading to efficient processing of transactions.</li>  
            </ul>
            <br/>
            {/* <a className="mt-16 px-12 py-3 bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] text-xl text-white font-semibold drop-shadow-lg rounded-full"
            href="#">Read More</a>  */}
        </div> 

    </div>
    <div className='flex justify-center'> <a target='_blank' className="my-4 md:my-16 mx-8 px-14 md:px-24 py-3 bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] text-xl text-white font-semibold drop-shadow-lg rounded-full"
          href="https://drive.google.com/file/d/1w--URcjU0k8V7FmX_CFA-MunW1Q8mkRu/view?usp=sharing">Read More</a></div>
</section></div></div>
  )
}

export default Services