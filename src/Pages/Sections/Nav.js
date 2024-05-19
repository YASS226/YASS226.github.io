import { useState } from 'react';
import del from '../../src/delete.png';
import logo from '../../src/ayl.jpg';


const Nav = () => {

    const [isActive, setActive] = useState(false);

    const handleClickOnNav = () => {
        setActive(!isActive);
    };




    return (
        <div className="">
            <div className="w-full h-[50px] bg-white box fixed flex justify-between px-2  z-30  xl:h-[70px]  ">
                <div className=" flex  ">
                <img className=' w-[50px] xl:w-[63px]' src={logo} alt="" />
                <a href="/" style={{ textDecoration: 'none' }} className=' items-center h-full '  >
                    <p className='font-Lostar xl:text-[33px] text-[22px] text-[#003748] items-center justify-center m-auto pt-3' >Ayl agency</p>
                </a>
                </div>
                <div className={'flex justify-center flex-col w-[17px] burger xl:hidden'} onClick={handleClickOnNav}>
                    <div className="w-[10px] h-1 bg-[#003748] rounded-xl"></div>
                    <div className="w-[17px] h-1 bg-[#0b232a] rounded-xl mt-[3px] mb-[3px]"></div>
                    <div className="w-[10px] ml-auto mr-0 h-1 bg-[#003748] rounded-xl"></div>
                </div>
                <div className=" hidden xl:flex xl:items-center xl:justify-center xl:mr-6 ">
                    <a id='NavContact' href="/#Info" className=' font-Jaldi mx-2 text-[#000] ' >About us</a>
                    <a id='NavAbout' href="/#Services" className=' font-Jaldi mx-2 text-[#000] ' >Services</a>
                    <a id='Navteritory' href="/#Contact" className=' font-Jaldi mx-2 text-[#000] ' >Contact us</a>
                    <a id='NavService' href="/#Reviews" className=' font-Jaldi mx-2 text-[#000] ' >Reviews</a>
                </div>
            </div>
            <div className={isActive ? 'sidenav w-full h-full bg-white absolute z-30 top-0' : 'hidden sidenav w-full h-full bg-white  top-0'} >
                <img className="h-[15px] w-[15px]  m-auto relative top-5 " onClick={handleClickOnNav} src={del} alt="Close" />
                <div className="flex flex-col justify-center items-center h-full">
                    <a href="/#Info" className="font-popins text-[15px] text-[#000] border-b w-[80%] text-center pl-2 block mt-4" onClick={handleClickOnNav}>About us</a>
                    <a id='NavContact' href="/#Services" className="font-popins text-[15px] text-[#000] border-b w-[80%] text-center pl-2 block mt-4" onClick={handleClickOnNav}>Services</a>
                    <a id='Navteritory' href="/#Contact" className="font-popins text-[15px] text-[#000] w-[80%] border-b text-center pl-2 block mt-4" onClick={handleClickOnNav}>Contact us</a>
                    <a href="/#Reviews" className="font-popins text-[15px] text-[#000] w-[80%] text-center pl-2 block mt-4" onClick={handleClickOnNav}>Reviewss</a>

                </div>
            </div>

        </div>
    );
}

export default Nav;
