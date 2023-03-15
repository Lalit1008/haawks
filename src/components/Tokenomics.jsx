import React from 'react'
import { useRef } from 'react';
import { PieChart } from "react-minimal-pie-chart";
import { Fade } from 'react-reveal'
import './token.css';

const Tokenomics = () => {

    const dataMock = [
        { title: "Seed 2%", value: 2.00, color: "#3260ed" ,titlep: "Seed"},
        { title: "Private  6%", value: 6.00, color: "#8ca8ff" ,titlep: "Private" },
        { title: "Public Sale 8%", value: 8.00, color: "#7af0d1", titlep: "Public Sale" },
        { title: "Marketing 6%%", value: 6.00, color: "#3290ed", titlep: "Marketing" },
        { title: "Team 18%", value: 18.00, color: "#7c7af0" ,titlep: "Team" },
        { title: "Strategic Funding 15% ", value: 15.00, color: "#32e4ed", titlep: "Strategic Funding" },
        { title: "Ecosystem Rewards 35% ", value: 35.00, color: "#32bbed", titlep: "Ecosystem Rewards" },
        { title: "Liquidity 5%", value: 5.00, color: "#4b00e2" ,titlep: "Liquidity" },
        { title: "Advisory 5%", value: 5.00, color: "#4bffe2", titlep: "Advisory" }
      ];
    
      const toolTip = useRef();
      return (
        <div className="bg-gradient-to-b from-[#000120] to-[#220056] p-10 md:pt-24 md:px-24 sm:p-10">
<Fade left cascade>
            {/* <div className="ml-20 w-10 h-1 from-[#7361F2] to-[#BD4FF1] bg-gradient-to-r "></div> */}
        <h1 className="p-10 font-semibold xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-white lg:leading-[2.5rem] 2xl:leading-[3.7rem]" style={{display: "flex", justifyContent: "center"}}>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0] -translate-x-2/4">
                {" "}
                Tokenomics{" "}
              </span>
            </h1>
            <br/>
            <div className="customTooltip" ref={toolTip}>
      </div>
        <div className="pi-data tknTop flex justify-center">
          
            <div className="md:flex justify-between items-center">
              <div className='md:w-1/4 sm:w-full'><p className='text-white text-justify text-lg ' >“Based on 10% token release at TGE for Pre-Public sale investors and 50% token release for Public sale investors at TGE.<br/> There will be a vesting period of 24 months for all Pre-Public sale investors and 12 months for Public Sale investors and the tokens will be released on a monthly basis as per the token release schedule.<br/> Team tokens are locked for 6 months after TGE and will be vested for 18 months after that and released as per token release schedule.”</p>
    </div>
              <div className="mainPieCgar">
                <PieChart
                  animationDuration={1000}
                  animate={true}
                  data={dataMock}
                  // label={({ dataEntry }) => dataEntry.value+"%"}
                  // labelStyle={{
                  //   fontSize: '5px',
                  //   fontFamily: 'sans-serif',
                  //   fill:"#fff"
                  // dataMock[index].title+" "+dataMock[index].value + " %"
                  // }}

                  onMouseOver={(e, index) => {
                    toolTip.innerHTML =dataMock[index].title+" "+dataMock[index].value + " %";
                    e.target.style.opacity = "0.8";
                    e.target.style.cursor = "pointer";
                    toolTip.style.top = e.pageY + "px";
                    toolTip.style.left = e.pageX + "px";
                    toolTip.current.classList.add("active");
                  }}
                  onMouseOut={(e, index) => {
                    e.target.style.opacity = "1";
                    e.target.style.cursor = "auto";
                    toolTip.current.classList.remove("active");
                  }}
                  lineWidth={45}
                  labelPosition={75}
                />
                <p>
                  Total <small>500,000,000</small>
                </p>
              </div>
              <ul className="ul_data-list">
                <h5>Token Pools</h5>
                {dataMock &&
                  dataMock.map((data, id) => {
                    return (
                      <li key={id}>
                        <div>
                          <small
                            style={{ background: data.color }}
                          ></small>{" "}
                          {data.titlep}
                        </div>{" "}
                        <span>{data.value}%</span>
                      </li>
                    );
                  })}
              </ul>
            </div>
        </div>
        </Fade>
      </div>
  )
}

export default Tokenomics