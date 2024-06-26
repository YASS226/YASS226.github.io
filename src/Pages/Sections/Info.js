import logo from '../../src/logo.png'

const Info = () => {
    return ( 
        <div id="Info" className=" text-center h-[30vh] flex justify-between w-[73%] items-center  m-auto mt-5 xl:mt-[4rem] ">
            <img className='w-[45%]' src={logo} alt="" />
            <p className=" xl:text-[15px] text-[8px] ml-[10px]  w-fit text-start font-poppins  " >As the co-founder of AYL Agency, I've always seen digital marketing as more than just algorithms and metrics. It's about forging genuine human connections in a digital landscape, ensuring that every interaction feels personal and meaningful.</p>
        </div>
     );
}
 
export default Info;