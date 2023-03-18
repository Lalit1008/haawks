import React, { useState } from "react";
import Deximage from "../images/dex.jpeg";
import { Fade } from "react-reveal";
const Dex = () => {
  const detailsData = [
    {
      group: "One",
      name: "DEX Details",
      lineOne:
        "Metaverse development has made a new revolution to the internet world where everyone can interact and even live their life in the digital world and do all the real life activities of the person in this platform.",
      lineTwo:
        "We at shamla tech are well equipped to create an exclusive and custom metaverse platform that fulfills various purposes. Our experts assure that virtual environment will include a broad range of interactions and functionality that will surely bring great value to your business.",
      buttonOne: "Know More",
      buttonTwo: "Connect",
      source: Deximage,
    },
  ];

  const utilityData = [
    {
      group: "Two",
      name: "DEX Utility",
      lineOne:
        "Metaveb hkb khb rse development has made a new revolution to the internet world where everyone can interact and even live their life in the digital world and do all the real life activities of the person in this platform.",
      lineTwo:
        "We at sham kjbkhbla tech are well equipped to create an exclusive and custom metaverse platform that fulfills various purposes. Our experts assure that virtual environment will include a broad range of interactions and functionality that will surely bring great value to your business.",
      buttonOne: "Know More",
      buttonTwo: "Connect",
      source: Deximage,
    },
  ];

  // const data=[{
  //     group:"One",
  //     name:"DEX",
  //     lineOne:"Metaverse development has made a new revolution to the internet world where everyone can interact and even live their life in the digital world and do all the real life activities of the person in this platform.",
  //     lineTwo:"We at shamla tech are well equipped to create an exclusive and custom metaverse platform that fulfills various purposes. Our experts assure that virtual environment will include a broad range of interactions and functionality that will surely bring great value to your business.",
  //     buttonOne:"Know More",
  //     buttonTwo:"Connect",
  //     source:Deximage
  //     },
  //     {
  //         group:"Two",
  //         name:"DEX Utility",
  //     lineOne:"Metavergtvjvjvvjvj vhse development has made a new revolution to the internet world where everyone can interact and even live their life in the digital world and do all the real life activities of the person in this platform.",
  //     lineTwo:"We at shjnkbjhvhchngb vgvamla tech are well equipped to create an exclusive and custom metaverse platform that fulfills various purposes. Our experts assure that virtual environment will include a broad range of interactions and functionality that will surely bring great value to your business.",
  //     buttonOne:"Know More",
  //     buttonTwo:"Connect",
  //     source:Deximage

  //     }]
  const [dexData, setDexData] = useState(detailsData);

  function handleChange(e) {
    const value = e.target.value;
    const filteredContent = value === "One" ? detailsData : utilityData;
    setDexData(filteredContent);
  }
  return (
    <div className="p-0 m-0 overflow-hidden w-100 bg-gradient-to-t from-[#000120] to-[#220056]">
      <Fade bottom>
        <h2
          className='"pt-8 font-bold xl:text-5xl lg:text-4xl md:text-4xl text-3xl lg:leading-[2.5rem] 2xl:leading-[3.7rem]"'
          style={{ display: "flex", justifyContent: "center" }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]">
            {" "}
            Our Services{" "}
          </span>
        </h2>
      </Fade>
      <Fade left cascade>
        <div className="wrapper">
          <div className="innerwrapper">
            <div className="panel1">
              <div className="wrapperheadingbox">
                <div className="wrapperheading">DEX</div>
                <div className="wrapperheadingline"></div>
              </div>
              <select id="myselection1" onChange={handleChange}>
                <option value="One">DEX Details</option>
                <option value="Two">DEX Utility</option>
              </select>
              {dexData.map((p) => (
                <div className="panel show" id="show1One">
                  <div className="panel-row">
                    <div className="panel-left">
                      <h2 className="panel-title">{p.name}</h2>
                      <p>{p.lineOne}</p>
                      <p>{p.lineTwo}</p>
                      <a className="querybtn bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] mx-2">
                        {p.buttonOne}
                      </a>
                      <a className="querybtn bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] mx-2">
                        {p.buttonTwo}
                      </a>
                    </div>
                    <div className="panel-right">
                      <img src={p.source} alt="" />
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="panel show" id="show1One">
                <div className="panel-row">
                    <div className="panel-left">
                        <h2 className="panel-title">DEX Details</h2>
                        <p>Metaverse development has made a new revolution to the internet world where everyone can interact and even live their life in the digital world and do all the real life activities of the person in this platform.</p>
                        <p>We at shamla tech are well equipped to create an exclusive and custom metaverse platform that fulfills various purposes. Our experts assure that virtual environment will include a broad range of interactions and functionality
                            that will surely bring great value to your business.
                        </p>
                        <a className="querybtn bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] mx-2">Know More</a>
                        <a className="querybtn bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] mx-2">Connect</a>
                    </div>
                    <div className="panel-right">
                        <img src={Deximage} alt=""/>

                    </div>
                </div>

            </div>
            <div className="panel" id="show1Two">
                <div className="panel-row">
                    <div className="panel-left">
                        <h2 className="panel-title">DEX Utility</h2>
                        <p>NFTs are the new trend in the market that helps to digitalize masterpieces and different collectibles into exceptional, obvious resources that are easy to exchange on the blockchain. Non-Fungible Tokens have made their way
                            into crypto market and quickly has garnered considerable amounts of capital in no time.
                        </p>
                        <p>With the people starting to adapt to the world of crypto-currencies, Shamla tech provides exclusive solutions to tokenize your assets to retain their credibility and rareness.
                        </p>
                        <a className="querybtn mx-2">Know More</a>
                        <a className="querybtn mx-2">Connect</a>
                    </div>
                    <div className="panel-right">
                        <img  src={Deximage} alt=""/>
                    </div>
                </div>
            </div> */}

              {/* <div className="panel" id="show1Three">
                <div className="panel-row">
                    <div className="panel-left">
                        <h2 className="panel-title">DEFI</h2>
                        <p>DeFi or open finance is the brand new monetary system simplifies the financial systems. In contrast to the decentralization of money through Bitcoin, the new platform aims for a broader approach of generally decentralizing
                            the traditional financial industry. The components of defi consist of defi tokens, dApps and smart contracts, which are built on Blockchain.
                        </p>
                        <p>Our experts here assure to the built the much sort after platform with specialized solutions at your budget in no time.</p>
                        <a className="querybtn">Talk to our experts</a>
                    </div>
                    <div className="panel-right">
                        <img src="img/coin-token.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className="panel" id="show1Four">
                <div className="panel-row">
                    <div className="panel-left">
                        <h2 className="panel-title">Coin Devlopment</h2>
                        <p>Crypto coins are the all time trend in the market. We are always updated with the latest technologies and trends in the crypto market. Our experienced team has already well-versed in providing customized crypto coin and token
                            development services. We have completed 50+ cryptocurrency projects and witnessed their successful run in the market.
                        </p>
                        <p>Our proficient development team ensures specialized coin development services that will suit your business and trade needs the best.</p>
                        <a className="querybtn">Talk to our experts</a>
                    </div>
                    <div className="panel-right">
                        <img src="img/coin-token.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className="panel" id="show1Five">
                <div className="panel-row">
                    <div className="panel-left">
                        <h2 className="panel-title">Crypto Clones</h2>
                        <p>The developers at shamla tech are highly experienced in providing potent clones of popular cryptocurrency exchanges. The company provides readymade and customizable software services, thereby speeding up deployment and instant
                            launching processes.
                        </p>
                        <p>The developers at shamla tech are highly experienced in providing potent clones of popular cryptocurrency exchanges. The company provides readymade and customizable software services, thereby speeding up deployment and instant
                            launching processes.
                        </p>
                        <a className="querybtn">Talk to our experts</a>
                    </div>
                    <div className="panel-right">
                        <img src="img/coin-token.png" alt=""/>
                    </div>
                </div>
            </div> */}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Dex;
