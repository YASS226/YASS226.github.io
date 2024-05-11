import Nav from "./Nav";
import del from '../../src/brand.png';
import des from '../../src/contentStrategy.png';

import design from '../../src/design.png';
import mark from '../../src/marketing.png';
import sett from '../../src/setting.png';
import Footer from "./Footer";
import React from 'react';
import ReactDOM from 'react-dom/client';
import ServicesInfofour from "./ServicesInfofour";
import ServicesInfoo from "./ServicesInfoo";
import ServicesInfooTwo from "./ServicesInfooTwo";

const handelclickonsavoirplu = (n) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    if (n === 1) {
        root.render(
            <React.StrictMode>
                <ServicesInfoo />
            </React.StrictMode>
        );
    } else if (n === 2) {
        root.render(
            <React.StrictMode>
                <ServicesInfooTwo />
            </React.StrictMode>
        );
    } else if (n === 4) {
        root.render(
            <React.StrictMode>
                <ServicesInfofour />
            </React.StrictMode>
        );
    }
}

const ServicesInfooThree = () => {
    return (
        <div className=" overflow-hidden absolute">
            {/* <img src={bg} alt="" className=" absolute top-[-21rem] left-[62rem] z-0 " /> */}
            <div className="">
                <Nav />
                <div className=" w-[80%] m-auto flex xl:flex-row flex-col-reverse items-center pt-10 ">
                    <div className="flex flex-col  items-start ">
                        <div className=" mt-[6%] ">
                            <div className=" ">
                                <img className=" xl:w-[87.67px] xl:h-[87.67px] w-[35px] h-[35px] opacity-75 mb-3 " src={mark} alt="" />
                                <p className='font-poppins xl:text-[35px] text-[14px] font-semibold mb-3 text-start ' >WEB MARKETING</p>
                            </div>
                        </div>
                        <p className='font-Jaldi xl:xl:text-[14px] xl:mb-10 font-light text-[6px] text-start mb-[0rem] xl:w-[50%] xl:ml-[3.5rem] ' >
                            We offer a comprehensive range of web marketing services to help you achieve your
                            online goals: <br></br>
                            ● <b>Digital Strategy</b>: Developing a customized digital
                            strategy that aligns your business objectives with the
                            most appropriate digital channels.<br></br>
                            ● <b>Search Engine Optimization (SEO)</b>: Optimizing your
                            website to improve its visibility and ranking on search
                            engines, driving organic traffic and increasing online
                            presence.<br></br>
                            ● <b>Social Media Marketing</b>: Developing social media
                            marketing strategies, creating engaging content,
                            managing social accounts, fostering audience
                            interaction, and implementing targeted advertising
                            campaigns.<br></br>
                            ● <b>Email Marketing</b>: Designing and executing email
                            marketing campaigns, creating personalized emails,
                            segmenting your mailing lists, and analyzing results
                            to optimize campaign performance.<br></br>
                            ● <b>Analytics and Tracking</b>: Utilizing analytics tools to
                            track and measure the performance of your web
                            marketing efforts, providing valuable insights to inform
                            future actions.</p>
                    </div>
                    <img src={des} alt="" className=" lg:w-[262px] lg:h-[262px] h-[60px] w-[60px] m-auto z-20 " />
                </div>
                <div className="xl:w-[60%] w-[80%] m-auto xl:mt-[5%] mt-[10%] flex justify-around ">
                    <div className="xl:w-[270px] xl:h-[200px] w-[30%] h-[80px] shadow-md flex flex-col items-start xl:p-5 p-3 z-20 ">
                        <img className=" xl:w-[37.67px] xl:h-[37.67px] w-[10px] h-[10px] opacity-75 xl:mb-3 mb-[7px] " src={design} alt="" />
                        <p className='font-poppins xl:text-[19px] text-[6px] font-semibold xl:mb-3 text-start mb-1 ' >CREATION AND DESIGN</p>
                        <p className='font-poppins xl:text-[8px] xl:mb-10 text-[4px] text-start mb-[0rem]  ' >Capturing the Essence of the Deer Spirit</p>
                        <p className='font-poppins xl:text-[8px] text-[5px] text-right opacity-25 mt-1 cursor-pointer ' onClick={() => { handelclickonsavoirplu(2) }} >En savoir plus </p>
                    </div>
                    <div className="xl:w-[270px] xl:h-[200px] w-[30%] h-[80px] shadow-md flex flex-col items-start xl:p-5 p-3 z-20">
                        <img className=" xl:w-[37.67px] xl:h-[37.67px] w-[10px] h-[10px] opacity-75 xl:mb-3 mb-[7px] " src={del} alt="" />
                        <p className='font-poppins xl:text-[19px] text-[6px] font-semibold xl:mb-3 text-start mb-1 ' >CONSULTING</p>
                        <p className='font-poppins xl:text-[8px] xl:mb-10 text-[4px] text-start mb-[0rem] ' >Partner with us for expert consulting and success.</p>
                        <p className='font-poppins xl:text-[8px] text-[5px] text-right opacity-25 mt-1 cursor-pointer ' onClick={() => { handelclickonsavoirplu(1) }} >En savoir plus </p>
                    </div>
                    <div className="xl:w-[270px] xl:h-[200px] w-[30%] h-[80px] shadow-md flex flex-col items-start xl:p-5 p-3 z-20">
                        <img className=" xl:w-[37.67px] xl:h-[37.67px] w-[10px] h-[10px] opacity-75 xl:mb-3 mb-[7px] " src={sett} alt="" />
                        <p className='font-poppins xl:text-[19px] text-[6px] font-semibold xl:mb-3 text-start mb-1 ' >EVENT CREATORS</p>
                        <p className='font-poppins xl:text-[8px] xl:mb-10 text-[4px] text-start mb-[0rem] ' >We craft brand-building events</p>
                        <p className='font-poppins xl:text-[8px] text-[5px] text-right opacity-25 mt-1 cursor-pointer ' onClick={() => { handelclickonsavoirplu(4) }} >En savoir plus </p>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default ServicesInfooThree;