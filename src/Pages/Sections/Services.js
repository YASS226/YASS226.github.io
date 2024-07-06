import del from '../../src/brandd.png';
import design from '../../src/design.png';
import mark from '../../src/marketing.png';
import sett from '../../src/settingd.png';
import React from 'react';
import back from '../../src/dark-pattern-bgs.jpg';


const Services = () => {
    return (
        <div className=" w-full h-[320px] overflow-hidden bg-black relative mt-5 flex flex-col ">
            <img src={back} className=' h-full absolute z-10 ' alt="" />
            <div className=" flex items-center z-20 mt-3 countainer ">
                <p className=' text-[8px]  font-montserrat italic font-medium text-white ' >Services</p>
                <div className=" w-[257px] h-0  border border-white ml-1 "></div>
            </div>
            <div className=" mt-3 font-montserrat font-extrabold text-[22.6394px]  leading-[24px] flex flex-col items-start justify-start  text-white countainer z-20 ">
                <p>Libérez votre potentiel.</p>
                <p>avec notre service</p>
            </div>
            <div className=" flex flex-col items-start z-20 mt-6 countainer ">
                <div className=" flex flex-col items-start">
                    <div className=" flex justify-center items-center  ">
                        <img src={del} className=' w-[20.95px] h-[20.95px] mr-2 ' alt="" />
                        <p className=' font-montserrat font-bold text-[16.7586px]  leading-[20px] text-white ' >Brand Strategy</p>
                    </div>
                    <p className='font-montserrat font-light text-[9px] italic leading-[11px] text-white' >Crafting the Heartbeat of Your Deer Brand</p>
                </div>
                <div className=" flex flex-col items-start mt-4">
                    <div className=" flex justify-center items-center  ">
                        <img src={mark} className=' w-[20.95px] h-[20.95px] mr-2 ' alt="" />
                        <p className=' font-montserrat font-bold text-[16.7586px]  leading-[20px] text-white ' >Marketing</p>
                    </div>
                    <p className='font-montserrat font-light text-[9px] italic leading-[11px] text-white' >Amplifying the Deer's Call Across  Digital Landscapes</p>
                </div>
                <div className=" flex flex-col items-start mt-4">
                    <div className=" flex justify-center items-center  ">
                        <img src={sett} className=' w-[20.95px] h-[20.95px] mr-2 ' alt="" />
                        <p className=' font-montserrat font-bold text-[16.7586px]  leading-[20px] text-white ' >Implementation</p>
                    </div>
                    <p className='font-montserrat font-light text-[9px] italic leading-[11px] text-white' >Bringing the Deer's Vision to Life</p>
                </div>
                <div className=" flex flex-col items-start mt-4">
                    <div className=" flex justify-center items-center  ">
                        <img src={design} className=' w-[20.95px] h-[20.95px] mr-2 ' alt="" />
                        <p className=' font-montserrat font-bold text-[16.7586px]  leading-[20px] text-white ' >Design</p>
                    </div>
                    <p className='font-montserrat font-light text-[9px] italic leading-[11px] text-white' >Capturing the Essence of the Deer Spirit</p>
                </div>
            </div>
        </div>

    );
}

export default Services;