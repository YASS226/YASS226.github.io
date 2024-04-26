import logo from '../../src/logo.png'

const Info = () => {
    return ( 
        <div id="Info" className=" text-center h-[30vh] flex justify-between w-[73%] items-center  m-auto mt-5">
            <img src={logo} alt="" />
            <p className=" text-[15px]  w-[900px] text-start font-poppins  " >As the co-founder of AYL Agency, I've always seen digital marketing as more than just algorithms and metrics. It's about forging genuine human connections in a digital landscape, ensuring that every interaction feels personal and meaningful.</p>
        </div>
     );
}
 
export default Info;