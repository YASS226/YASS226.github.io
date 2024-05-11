import del from '../../src/brand.png';
import design from '../../src/design.png';
import mark from '../../src/marketing.png';
import sett from '../../src/setting.png';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ServicesInfoo from './ServicesInfoo';
import ServicesInfooTwo from './ServicesInfooTwo';
import ServicesInfooThree from './ServicesInfooThree';
import ServicesInfofour from './ServicesInfofour';


const handelclickonsavoirplu = (n) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    if (n == 1) {
        root.render(
            <React.StrictMode>
                <ServicesInfoo />
            </React.StrictMode>
        );
    } else if (n == 2) {
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

const Services = () => {
    return (
        <div id='Services' className=" w-[73%] m-auto mt-10 mb-5 ">
            <p className=" font-poppins text-[30px] text-start font-bold text-[#003748] " >Services</p>
            <div className=" mt-3 mb-14 w-full flex flex-col ">
                <div className=" w-full flex h-fit  justify-between ">
                    <div className="xl:w-[500px] w-[48%]  h-fit box " >
                        <div className="xl:h-[300px] h-[150px] flex flex-col items-start p-5 ">
                            <img className=" xl:w-[87.67px] xl:h-[87.67px] w-[35px] h-[35px] opacity-75 mb-3 " src={del} alt="" />
                            <p className='font-poppins xl:text-[35px] text-[9px] font-semibold mb-3 text-start ' >CONSULTING</p>
                            <p className='font-poppins xl:xl:text-[12px] xl:mb-10 text-[6px] text-start mb-[0rem] ' >Partner with us for expert consulting and success.</p>
                            <p className='font-poppins xl:xl:text-[12px] text-[5px] text-right opacity-25  ' onClick={() => { handelclickonsavoirplu(1) }}  >En savoir plus </p>
                        </div>
                    </div>
                    <div className="xl:w-[500px] xl:h-[300px] w-[48%] h-[150px]    box flex flex-col items-start p-5 ">
                        <img className=" xl:w-[87.67px] xl:h-[87.67px] w-[35px] h-[35px] opacity-75 mb-3 " src={design} alt="" />
                        <p className='font-poppins xl:text-[35px] text-[9px] font-semibold mb-3 text-start ' >CREATION AND DESIGN</p>
                        <p className='font-poppins xl:text-[12px] xl:mb-10 text-[6px] text-start mb-[0rem] ' >Capturing the Essence of the Deer Spirit</p>
                        <p className='font-poppins xl:text-[12px] text-[5px] text-right opacity-25  ' onClick={() => { handelclickonsavoirplu(2) }} >En savoir plus </p>
                    </div>
                </div>
                <div className=" w-full flex h-fit  justify-between mt-7 ">
                    <div className="xl:w-[500px] xl:h-[300px] w-[48%] h-[150px]    box flex flex-col items-start p-5 ">
                        <img className=" xl:w-[87.67px] xl:h-[87.67px] w-[35px] h-[35px] opacity-75 mb-3 " src={mark} alt="" />
                        <p className='font-poppins xl:text-[35px] text-[9px] font-semibold mb-3 text-start ' >WEB MARKETING</p>
                        <p className='font-poppins xl:text-[12px] xl:mb-10 text-[6px] text-start mb-[0rem] ' >Amplifying the Deer's Call Across Digital Landscapes</p>
                        <p className='font-poppins xl:text-[12px] text-[5px] text-right opacity-25  ' onClick={() => { handelclickonsavoirplu(3) }} >En savoir plus </p>
                    </div>
                    <div className="xl:w-[500px] xl:h-[300px] w-[48%] h-[150px]    box flex flex-col items-start p-5 ">
                        <img className=" xl:w-[87.67px] xl:h-[87.67px] w-[35px] h-[35px] opacity-75 mb-3 " src={sett} alt="" />
                        <p className='font-poppins xl:text-[35px] text-[9px] font-semibold mb-3 text-start ' >EVENT CREATORS</p>
                        <p className='font-poppins xl:text-[12px] xl:mb-10 text-[6px] text-start mb-[0rem] ' >We craft brand-building events</p>
                        <p className='font-poppins xl:text-[12px] text-[5px] text-right opacity-25  ' onClick={() => { handelclickonsavoirplu(4) }} >En savoir plus </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Services;