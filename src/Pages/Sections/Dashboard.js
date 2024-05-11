import back from '../../src/bggggg.jpg'
import left from '../../src/left.png'
import deer from '../../src/deer.png'
import whatsap from '../../src/whatsapp.jpg'

import Nav from './Nav';

const Dashboard = () => {
    return (
        <div className="">
            <Nav />
            <div className="h-[100vh] w-full flex flex-col justify-center text-center bg-cover bg-[#A51D21] " style={{ backgroundImage: `url(${back})`, backgroundPosition: 'center center' }}>
                <div className=" bg-[#003748] absolute w-full h-full opacity-30 z-10 "></div>
                <img
                    src={deer}
                    className='xl:w-[20rem] w-[15rem] m-auto absolute left-1/2 top-[38%] xl:top-[42%]  transform -translate-x-1/2 -translate-y-1/2 z-20'
                    alt=""
                />
                <h1 className='font-Lostar xl:text-[131.05px] text-white  mt-[13rem] text-[72px] z-20'> <i className=' text-white ' >AYL</i> AGENCY</h1>
                {/* 838264 */}
                <p className=' font-poppins text-[15px] text-white xl:mt-[-2rem] mt-[0rem] z-20 ' >Purpose-Driven growth</p>
                <div className=" flex justify-center items-center p-5 z-20 ">
                    <a href="/#Services" className=' font-poppins  text-[20.39px] text-[#FFF500]  '  >Services</a>
                    <img src={left} className=' h-auto w-[10.55px] ml-2 ' alt="" />
                </div>
                <div className="flex justify-center items-center w-10 rounded-[30px] h-10 bg-white fixed bottom-[1.75rem] right-3 shadow-xl  xl:w-[3.5rem] xl:h-[3.5rem]  xl:bottom-[1.75rem] z-20 ">
                    <a href="https://wa.me/0619861440" target="_blank" rel="noopener noreferrer">
                        <img className="h-[22px] w-[22px] xl:h-[35px] xl:w-[35px]" src={whatsap} alt="WhatsApp Logo" />
                    </a>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;