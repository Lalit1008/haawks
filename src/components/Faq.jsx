import React from 'react'
import './faq.css';

const Faq = () => {

  const items = document.querySelectorAll(".accordion a");

  function toggleAccordion(e) {
    const wasActive = this.classList.contains('.accordion-item');
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");

    if(this.classList.contains('active'))
    {
      for (let i = 0; i < items.length; i++) 
      {
        items[i].nextElementSibling.classList.remove('active');
        if (wasActive) {
          this.classList.remove('active');
        }
        this.nextElementSibling.classList.add('active');
        this.classList.remove('active');
        // this.classList.add('active');
      } 
      // this.nextElementSibling.classList.toggle('active');
    }  
    
  }

  items.forEach((item) => item.addEventListener("click", toggleAccordion));
  return (
    <div>
    <section className="faqs-container bg-gradient-to-b from-[#000120] to-[#220056]">
    <div className="faqs">
    <h1 className="pt-4 pb-10 font-semibold xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-white lg:leading-[2.5rem] 2xl:leading-[3.7rem]">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]">
                {" "}
                FAQs{" "}
              </span>
            </h1>
      {/* <p className='p-2'>
        Tying loose ends regarding Blockchain is tough, but to give you some
        clarity, here are the top FAQs by our previous clients.
      </p> */}

      <div className="accordion">
        <div className="accordion-item">
          <a>How do you define the best blockchain development company?</a>
          <div className="content">
            <p>
              The best blockchain app development company is one that can
              comprehend your idea and implement it on the decentralized
              systems, it seems easy but it much difficult due to the
              decentralized system’s general nature. If you are confused
              regarding anything, you can send us your requirements, we will
              get back to you within 24 hours with a free evaluation
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <a>
            Does your blockchain development company offer after delivery
            support?</a>
          <div className="content">
            <p>
              We offer a completely free of cost after delivery support, for
              all the bugs and errors that may occur. We also offer exciting
              deals to those who are looking forward to future forks, so you
              can have peace of mind under any future circumstances. We
              believe it's the least we can do for the clients that trust us
              for building their projects, so 3-month free support is on us.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <a>Does it really matter which technology I target?</a>
          <div className="content">
            <p>
              Even though blockchain is the buzzword right now, there are a
              lot more decentralized technologies in works. We will choose the
              one which best suits your project requirements, other than that,
              it's the implementation you are looking forward to, for Dapps,
              Blockchain tops in popularity, while for smart contracts,
              Ethereum does. So, we will have to go through the
              implementations you are looking forward to, to tell you if the
              technology you target matters.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <a>I just have an idea, can you help?</a>
          <div className="content">
            <p>
              If your idea requires a Dapp or token to be built, we will walk
              you through the entire process. We have implemented many
              exciting blockchain projects for our clients, if your business
              requires decentralization as any of your services, we suggest
              you go ahead with it. Just send in your requirements for a free
              consultation, we will let you know the feasibility, as well as,
              the cost associated with the Blockchain application you are
              looking forward to.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <a> What is Blockchain and its offered Benefits?</a>
          <div className="content">
            <p>
              Blockchain is known as a system of data stored in a way that no
              one can easily access, alter, or hack. It is a decentralized
              digital ledger presented on several computers simultaneously.
              All the information is stored within the chain of blocks
              including a different hash value; hence it makes the data
              modification impossible. Acquiring Blockchain development
              services provides a lot of benefits such as a more secure &
              transparent environment, better ROI, remote areas penetration,
              etc.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <a>What are the Blockchain platforms your company works upon?</a>
          <div className="content">
            <p>
              Metablock Technologies has an expert team when it comes to
              providing custom Blockchain development solutions. Different
              Blockchain platforms we work upon are Ethereum, Ripple, R3
              Corda, etc. Among all these platforms, clients can choose any of
              them.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <a>How much does it cost for Blockchain Application Development?</a>
          <div className="content">
            <p>
              There can be an estimated cost for Blockchain app development
              services but not the exact one. The overall Blockchain app
              development cost is based upon diverse factors such as app
              complexity, number of app stakeholders, industry compliances,
              and many more. We can provide you with an estimation after
              analyzing these factors.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Faq