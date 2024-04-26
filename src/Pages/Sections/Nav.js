import { useState } from 'react';
import del from '../../src/delete.png';


const Nav = () => {

    const [isActive, setActive] = useState(false);
    const [selectedlang] = useState('eng');


    const handleClickOnNav = () => {
        setActive(!isActive);
    };




    return (
        <div className="">
            <div className="w-full h-[50px] bg-white shadow-md flex justify-between px-2  z-30  xl:h-[70px]">
                <a href="/" style={{ textDecoration: 'none' }} className=' items-center h-full '  >
                    <p className='font-Lostar text-[33px] text-[#A51D21] items-center justify-center m-auto pt-3' >Ayl agency</p>
                </a>
                <div className={'flex justify-center flex-col w-[17px] burger xl:hidden'} onClick={handleClickOnNav}>
                    <div className="w-[10px] h-1 bg-[#559FBB] rounded-xl"></div>
                    <div className="w-[17px] h-1 bg-[#559FBB] rounded-xl mt-[3px] mb-[3px]"></div>
                    <div className="w-[10px] ml-auto mr-0 h-1 bg-[#559FBB] rounded-xl"></div>
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
                    <a href="/" className="font-popins text-[15px] text-[#012A5B] border-b w-[80%] text-center pl-2 block mt-4" onClick={handleClickOnNav}>Home</a>
                    <a id='NavContact' href="/#contact" className="font-popins text-[15px] text-[#012A5B] border-b w-[80%] text-center pl-2 block mt-4" onClick={handleClickOnNav}>Contact us</a>
                    <a id='NavAbout' href="/#about" className="font-popins text-[15px] text-[#012A5B] border-b w-[80%] text-center pl-2 block mt-4" onClick={handleClickOnNav}>About us</a>
                    <a id='Navteritory' href="/#territory" className="font-popins text-[15px] text-[#012A5B] w-[80%] text-center pl-2 block mt-4" onClick={handleClickOnNav}>Covered territory</a>
                    <a href="/#services" className="font-popins text-[15px] text-[#012A5B] w-[80%] text-center pl-2 block mt-4" onClick={handleClickOnNav}>services</a>
                    <div className=" flex w-[80%]  mt-4 justify-center ">
                        <div className={selectedlang === "eng" ? 'hidden' : 'w-[60px] h-[35px] rounded-sm bg-[#012A5B] text-white flex justify-center items-center font-Jaldi mr-2'}>
                            <p id="btnlang" className=' cursor-pointer ' >eng</p>
                        </div>
                        <div className={selectedlang === "fr" ? 'hidden' : 'w-[60px] h-[35px] rounded-sm bg-[#012A5B] text-white flex justify-center items-center font-Jaldi mr-2'}>
                            <p id="btnlang" className=' cursor-pointer ' >fr</p>
                        </div>
                        <div className={selectedlang === "esp" ? 'hidden' : 'w-[60px] h-[35px] rounded-sm bg-[#012A5B] text-white flex justify-center items-center font-Jaldi mr-2'}>
                            <p id="btnlang" className=' cursor-pointer ' >esp</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Nav;
