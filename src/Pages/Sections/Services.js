import del from '../../src/brand.png';
import design from '../../src/design.png';
import mark from '../../src/marketing.png';
import sett from '../../src/setting.png';

const Services = () => {
    return (
        <div id='Services' className=" w-[73%] m-auto mt-10 mb-5 ">
            <p className=" font-poppins text-[30px] text-start font-bold text-gray-400 " >Services</p>
            <div className=" mt-3 mb-14 w-full flex flex-col ">
                <div className=" w-full flex h-fit  justify-between ">
                    <div className="w-[500px] h-fit   shadow-md  ">
                        <div className="h-[300px] flex flex-col items-start p-5 ">
                            <img className=" w-[87.67px] h-[87.67px] opacity-75 mb-3 " src={del} alt="" />
                            <p className='font-poppins text-[35px] font-semibold mb-3 ' >Brand Strategy</p>
                            <p className='font-poppins text-[12px] mb-10 ' >Crafting the Heartbeat of Your Deer Brand</p>
                            <p className='font-poppins text-[12px] text-right opacity-25  ' >En savoir plus </p>
                        </div>
                    </div>
                    <div className="w-[500px] h-[300px]    shadow-md flex flex-col items-start p-5 ">
                        <img className=" w-[87.67px] h-[87.67px] opacity-75 mb-3 " src={design} alt="" />
                        <p className='font-poppins text-[35px] font-semibold mb-3 ' >Design</p>
                        <p className='font-poppins text-[12px] mb-10 ' >Capturing the Essence of the Deer Spirit</p>
                        <p className='font-poppins text-[12px] text-right opacity-25  ' >En savoir plus </p>
                    </div>
                </div>
                <div className=" w-full flex h-fit  justify-between mt-7 ">
                    <div className="w-[500px] h-[300px]    shadow-md flex flex-col items-start p-5 ">
                        <img className=" w-[87.67px] h-[87.67px] opacity-75 mb-3 " src={mark} alt="" />
                        <p className='font-poppins text-[35px] font-semibold mb-3 ' >Marketing</p>
                        <p className='font-poppins text-[12px] mb-10 ' >Amplifying the Deer's Call Across Digital Landscapes</p>
                        <p className='font-poppins text-[12px] text-right opacity-25  ' >En savoir plus </p>
                    </div>
                    <div className="w-[500px] h-[300px]    shadow-md flex flex-col items-start p-5 ">
                        <img className=" w-[87.67px] h-[87.67px] opacity-75 mb-3 " src={sett} alt="" />
                        <p className='font-poppins text-[35px] font-semibold mb-3 ' >Brand Strategy</p>
                        <p className='font-poppins text-[12px] mb-10 ' >Bringing the Deer's Vision to Life</p>
                        <p className='font-poppins text-[12px] text-right opacity-25  ' >En savoir plus </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Services;