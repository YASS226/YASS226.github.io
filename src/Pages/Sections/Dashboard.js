import back from '../../src/BACK1.jpg'
import down from '../../src/down.svg'
import whatsap from '../../src/logo-whatsapp.svg'
// import videoSrc from "../../src/viddd.mp4";
import React from 'react';


import Nav from './Nav';

const Dashboard = () => {
    

    const generateAnimatedText = (text) => {
        return text.split('').map((char, index) => (
            <span key={index} style={{ '--char-index': index }}>{char === ' ' ? '\u00A0' : char}</span>
        ));
    };

    return (
        <div className=" flex flex-col w-full  ">
            <Nav />
            {/* style={{ backgroundImage: `url(${back})`, backgroundPosition: 'center center' }} */}
            <div className="h-[100vh] w-[100%]  flex flex-col relative justify-center text-center bg-cover  overflow-hidden  " style={{ backgroundImage: `url(${back})`, backgroundPosition: 'center center' }}  >
                {/* <div className="bg-white w-full h-28 pb-4 z-20 absolute top-0 flex items-end justify-center overflow-hidden">
                    <p className='sliding-text-left text-[20px] font-montserrat font-italic font-medium text-[#A51D21] leading-[20px]'>
                        Élue Agence Marketing n°1 à la plus forte croissance de l'année 2023
                    </p>
                </div> */}

                {/* <img
                    src={videoSrc}
                    alt="Background animation"
                    className="w-full m-auto absolute mt-10 z-10 sm:mt-[8rem] "
                /> */}
                <div className=" bg-[#000] absolute w-full h-[100vh] opacity-30 z-10 "></div>
                <div className="countainer flex flex-col items-start mt-[-195px] ">
                    <div className=" z-20 font-montserrat font-extrabold text-[28px] leading-[38px] flex flex-col items-start text-white">
                        <p className='animatedchar' >{generateAnimatedText('Révélez le potentiel')}</p>
                        <p className='animatedchar' >{generateAnimatedText('de votre marque')}</p>
                    </div>
                    <div className=" flex items-center z-20 mt-1 ">
                        <div className=" w-[213.16px] h-0  border border-white mr-1 "></div>
                        <p className=' text-[5px]  font-montserrat font-italic font-medium text-white ' >Votre succès, notre mission</p>
                    </div>

                    <div className=" w-[89.75px] h-[23.78px]  rounded-[10.7397px] bg-white z-20 mt-2 flex justify-center items-center ">
                        <div className="flex items-center ">
                            <a href="/#Contact">
                                <p className='font-montserrat font-italic font-semibold text-[7.50471px] text-black ' >Entrez en action.</p>
                            </a>
                            <img src={down} className=' w-[12px] h-[12px]  ' alt="" />
                        </div>
                    </div>
                </div>
                <div className=" countainer z-20  flex w-[150px] justify-between absolute bottom-10 ">
                    <a rel="noopener noreferrer" href='https://www.facebook.com/profile.php?id=100088203763826&mibextid=ZbWKwL&_rdc=2&_rdr' target='_blank' className=' font-montserrat font-extrabold text-[10px] leading-[12px] text-white ' >Facebook</a>
                    <a rel="noopener noreferrer" href='https://www.instagram.com/agencyayl/' target='_blank' className=' font-montserrat font-extrabold text-[10px] leading-[12px] text-white ' >Instagram</a>
                    <a rel="noopener noreferrer" href='https://www.linkedin.com/company/ayl-agency/' target='_blank' className=' font-montserrat font-extrabold text-[10px] leading-[12px] text-white ' >linkdin</a>
                </div>
            </div>
            <a rel="noopener noreferrer" href="https://wa.me/+212619861440" target='_blank'>
                <div className="fixed w-40 h-5 flex items-center justify-end right-[25px] bottom-10 z-20 rounded">
                    <img className=' w-[35px] ' src={whatsap} alt="" />
                </div>
            </a>
        </div>
    );
}

export default Dashboard;