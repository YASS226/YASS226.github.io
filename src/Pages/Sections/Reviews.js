import ratting from '../../src/rating.png';

const Reviews = () => {
    return (
        <div id='Reviews' className=" w-[73%]  m-auto overflow-scroll xl:overflow-x-visible  xl:m-auto mt-10 mb-5">
            <p className="font-poppins  xl:text-[50px] text-[20px] text-start font-bold text-[#003748] absolute ">What people are </p>
            <p className="font-poppins xl:text-[50px] text-[20px] text-start font-bold text-[#003748] mt-7 absolute xl:mt-[4.5rem] ">saying about us </p>
            <div className=" min-w-fit  items-center  mt-10 xl:mt-5">
                <div className="flex justify-between xl:mt-[13%]">
                    <div className="xl:w-[295px] w-[180px] xl:h-[430px] h-[175px] revwis flex flex-col items-center xl:p-5 p-[2px] mt-5 mr-2  m-[10px] ">
                        <p className="font-poppins xl:text-[15px] text-[7px] text-[#003748] font-semibold xl:mt-10 mt-[30px]">manager at TCL logistics</p>
                        <p className="font-Jaldi xl:text-[12px] text-[7px] font-semibold xl:mt-14 mt-[1.5rem]">Working with AYL Agency was amazing. They helped us with everything! From figuring out our brand's message to designing our logo and making our website. Plus, they handled all our printing needs. AYL isn't just good at one thing; they're experts in many areas</p>
                        <img src={ratting} className='xl:w-[90px] w-[20px]' alt="" />
                    </div>
                    <div className="xl:w-[295px] w-[180px] xl:h-[430px] h-[175px] revwis flex flex-col items-center xl:p-5 p-[2px] mt-5 mr-2 ">
                        <p className="font-poppins xl:text-[15px] text-[7px] text-[#003748] font-semibold xl:mt-10 mt-[30px]">launch manager at INDRIVE</p>
                        <p className="font-Jaldi xl:text-[12px] text-[7px] font-semibold xl:mt-14 mt-[1.5rem]">AYL Agency's expertise became evident from our very first consultation,they exceeded our expectations , they are professional , and commited to quality and creativity</p>
                        <img src={ratting} className='xl:w-[90px] w-[20px]' alt="" />
                    </div>
                    <div className="xl:w-[295px] w-[180px] xl:h-[430px] h-[175px] revwis flex flex-col items-center xl:p-5 p-[2px] mt-5 mr-2 ">
                        <p className="font-poppins xl:text-[15px] text-[7px] text-[#003748] font-semibold xl:mt-10 mt-[30px]">administrator at Quickglass </p>
                        <p className="font-Jaldi xl:text-[12px] text-[7px] font-semibold xl:mt-14 mt-[1.5rem]">AYL Agency made things easy for us. From sorting out our brand to creating our website and print materials, they knew their stuff. AYL knows how to get things done, and we're glad we chose them.</p>
                        <img src={ratting} className='xl:w-[90px] w-[20px]' alt="" />
                    </div>
                    <div className="xl:w-[295px] w-[180px] xl:h-[430px] h-[175px] revwis flex flex-col items-center xl:p-5 p-[2px] mt-5 mr-2 ">
                        <p className="font-poppins xl:text-[15px] text-[7px] text-[#003748] font-semibold xl:mt-10 mt-[30px]">marketing manager at Mecomar </p>
                        <p className="font-Jaldi xl:text-[12px] text-[7px] font-semibold xl:mt-14 mt-[1.5rem]">AYL Agency made us a great video and ran an awesome social media campaign. People loved it, and it really helped our brand stand out.</p>
                        <img src={ratting} className='xl:w-[90px] w-[20px]' alt="" />
                    </div>
                    <div className="xl:w-[295px] w-[180px] xl:h-[430px] h-[175px] revwis flex flex-col items-center xl:p-5 p-[2px] mt-5 mr-2 ">
                        <p className="font-poppins xl:text-[15px] text-[7px] text-[#003748] font-semibold xl:mt-10 mt-[30px]">Director of Tangier Film festival : </p>
                        <p className="font-Jaldi xl:text-[12px] text-[7px] font-semibold xl:mt-14 mt-[1.5rem]">AYL Agency did an incredible job organizing our film festival in Tangier. Everything ran smoothly, and the event was a huge success. Their expertise made the entire experience unforgettable for attendees and participants alike</p>
                        <img src={ratting} className='xl:w-[90px] w-[20px]' alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Reviews;
