const Contact = () => {
   
    return (
        <div id="Contact" className="w-full bg-[#003748] mt-4 " style={{
            background: 'linear-gradient(144deg, rgba(0,55,72,1) 0%, rgba(0,112,147,1) 37%, rgba(0,86,112,1) 100%)',
        }} >
            
            <div id="particles-js" className="w-[80%] m-auto flex flex-col items-start">
                <p className="xl:text-[90.72px] text-[40px] font-poppins font-bold text-white mt-[5rem]  " >Intrigued ?</p>
                <p className="xl:text-[13px] text-[8px] font-poppins text-white text-start" >Let's team up to exceed your expectations. Book a free call to identify your needs.</p>
                <div className=" w-full flex justify-end mt-[12rem] mb-[5rem] ">
                    <a href="mailto:ezzangui.yassmina@gmail.com" class="button2" >READY</a>
                </div>
            </div>
            
        </div>
    );
}

export default Contact;