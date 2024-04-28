const Contact = () => {
    return ( 
        <div id="Contact" className="w-full bg-[#A51D21] mt-4 ">
            <div className="w-[80%] m-auto flex flex-col items-start">
                <p className="xl:text-[90.72px] text-[40px] font-poppins font-bold text-white mt-[5rem]  " >Intrigued ?</p>
                <p className="xl:text-[13px] text-[8px] font-poppins text-white text-start" >Let's team up to exceed your expectations. Book a free call to identify your needs.</p>
                <div className=" w-full flex justify-end mt-[12rem] mb-[5rem] ">
                    <a href="mailto:ezzangui.yassmina@gmail.com"  className="font-poppins xl:text-[25px] text-[15px] text-[#A51D21]  font-black px-[4rem] py-[10px] bg-white rounded shadow-xl " >READY</a>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;