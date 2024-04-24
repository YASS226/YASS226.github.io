import back from '../../src/back.png'
import left from '../../src/left.png'
import Nav from './Nav';

const Dashboard = () => {
    return (
        <div className="">
            <div className="h-[100vh] w-full flex flex-col justify-center text-center bg-cover    " style={{ backgroundImage: `url(${back})`, backgroundPosition: 'center right' }}>

                <h1 className='font-Lostar text-[131.05px] text-white  mt-[13rem]' >AYL AGENCY</h1>
                <p className=' font-poppins text-[15px] text-white mt-[-2rem] ' >Purpose-Driven growth</p>
                <div className=" flex justify-center items-center p-5 ">
                    <p className=' font-poppins  text-[20.39px] text-[#FFF500]  ' >Services</p>
                    <img src={left} className=' h-auto w-[10.55px] ml-2 ' alt="" />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;