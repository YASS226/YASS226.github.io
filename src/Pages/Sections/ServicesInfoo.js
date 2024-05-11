import Nav from "./Nav";
import del from '../../src/brand.png';
import des from '../../src/discussion.png';
import bg from '../../src/bgg.svg';

import React from 'react';
import ReactDOM from 'react-dom/client';
import design from '../../src/design.png';
import mark from '../../src/marketing.png';
import sett from '../../src/setting.png';
import Footer from "./Footer";
import ServicesInfooTwo from "./ServicesInfooTwo";
import ServicesInfooThree from "./ServicesInfooThree";
import ServicesInfofour from "./ServicesInfofour";

const handelclickonsavoirplu = (n) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    if (n == 2) {
        root.render(
            <React.StrictMode>
                <ServicesInfooTwo />
            </React.StrictMode>
        );
    } else if (n == 3) {
        root.render(
            <React.StrictMode>
                <ServicesInfooThree />
            </React.StrictMode>
        );
    } else if (n == 4) {
        root.render(
            <React.StrictMode>
                <ServicesInfofour />
            </React.StrictMode>
        );
    }
}

const ServicesInfoo = () => {
    return (
        <div className=" overflow-hidden absolute">
            {/* <img src={bg} alt="" className=" absolute top-[-21rem] left-[62rem] z-0 " /> */}
            <div className="">
                <Nav />
                <div className=" w-[80%] m-auto flex xl:flex-row flex-col-reverse items-center pt-10 ">
                    <div className="flex flex-col  items-start ">
                        <div className=" mt-[6%] ">
                            <div className=" ">
                                <img className=" xl:w-[87.67px] xl:h-[87.67px] w-[35px] h-[35px] opacity-75 mb-3 " src={del} alt="" />
                                <p className='font-poppins xl:text-[35px] text-[14px] font-semibold mb-3 text-start ' >CONSULTING</p>
                            </div>
                        </div>
                        <p className='font-Jaldi xl:xl:text-[14px] xl:mb-10 font-light text-[6px] text-start mb-[0rem] xl:w-[50%] xl:ml-[3.5rem] ' >
                            We are your dedicated partners, ready to accompany you
                            at every step towards success. With a personalized
                            approach, a team of experts, and transparent
                            communication, we are here to guide, advise, and
                            support you in all your consulting needs. Join forces
                            with us and let us help you reach new heights..</p>
                    </div>
                    <img src={des} alt="" className=" lg:w-[262px] lg:h-[262px] h-[60px] w-[60px] m-auto z-20 " />
                </div>
                <div className="xl:w-[60%] w-[80%] m-auto xl:mt-[5%] mt-[10%] flex justify-around ">
                    <div className="xl:w-[270px] xl:h-[200px] w-[30%] h-[80px] shadow-md flex flex-col items-start xl:p-5 p-3 z-20 ">
                        <img className=" xl:w-[37.67px] xl:h-[37.67px] w-[10px] h-[10px] opacity-75 xl:mb-3 mb-[7px] " src={design} alt="" />
                        <p className='font-poppins xl:text-[19px] text-[6px] font-semibold xl:mb-3 text-start mb-1 ' >CREATION AND DESIGN</p>
                        <p className='font-poppins xl:text-[8px] xl:mb-10 text-[4px] text-start mb-[0rem]  ' >Capturing the Essence of the Deer Spirit</p>
                        <p className='font-poppins xl:text-[8px] text-[5px] text-right opacity-25 mt-1 ' onClick={() => { handelclickonsavoirplu(2) }}>En savoir plus </p>
                    </div>
                    <div className="xl:w-[270px] xl:h-[200px] w-[30%] h-[80px] shadow-md flex flex-col items-start xl:p-5 p-3 z-20">
                        <img className=" xl:w-[37.67px] xl:h-[37.67px] w-[10px] h-[10px] opacity-75 xl:mb-3 mb-[7px] " src={mark} alt="" />
                        <p className='font-poppins xl:text-[19px] text-[6px] font-semibold xl:mb-3 text-start mb-1 ' >WEB MARKETING</p>
                        <p className='font-poppins xl:text-[8px] xl:mb-10 text-[4px] text-start mb-[0rem] ' >Amplifying the Deer's Call Across Digital Landscapes</p>
                        <p className='font-poppins xl:text-[8px] text-[5px] text-right opacity-25 mt-1  ' onClick={() => { handelclickonsavoirplu(3) }} >En savoir plus </p>
                    </div>
                    <div className="xl:w-[270px] xl:h-[200px] w-[30%] h-[80px] shadow-md flex flex-col items-start xl:p-5 p-3 z-20">
                        <img className=" xl:w-[37.67px] xl:h-[37.67px] w-[10px] h-[10px] opacity-75 xl:mb-3 mb-[7px] " src={sett} alt="" />
                        <p className='font-poppins xl:text-[19px] text-[6px] font-semibold xl:mb-3 text-start mb-1 ' >EVENT CREATORS</p>
                        <p className='font-poppins xl:text-[8px] xl:mb-10 text-[4px] text-start mb-[0rem] ' >We craft brand-building events</p>
                        <p className='font-poppins xl:text-[8px] text-[5px] text-right opacity-25 mt-1  ' onClick={() => { handelclickonsavoirplu(4) }} >En savoir plus </p>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default ServicesInfoo;