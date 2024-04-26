import ratting from '../../src/rating.png';

const Reviews = () => {
    return (
        <div id='Reviews' className="w-[73%] m-auto mt-10 mb-5">
            <p className="font-poppins text-[50px] text-start font-bold text-[#A51D21]">What people are </p>
            <p className="font-poppins text-[50px] text-start font-bold text-[#A51D21]">saying about us </p>
            <div className="w-[83%] m-auto  mt-5">
                <div className="flex justify-between">
                    <div className="w-[295px] h-[430px] shadow-2xl flex flex-col items-center p-5 mt-5">
                        <p className="font-poppins text-[15px] text-[#A51D21] font-semibold mt-10">manager at TCL logistics</p>
                        <p className="font-poppins text-[12px] font-semibold mt-14">Working with AYL Agency was amazing. They helped us with everything! From figuring out our brand's message to designing our logo and making our website. Plus, they handled all our printing needs. AYL isn't just good at one thing; they're experts in many areas</p>
                        <img src={ratting} className='w-[90px]' alt="" />
                    </div>
                    <div className="w-[295px] h-[430px] shadow-2xl flex flex-col items-center p-5 mt-5">
                        <p className="font-poppins text-[15px] text-[#A51D21] font-semibold mt-10">launch manager at INDRIVE</p>
                        <p className="font-poppins text-[12px] font-semibold mt-14">AYL Agency's expertise became evident from our very first consultation,they exceeded our expectations , they are professional , and commited to quality and creativity</p>
                        <img src={ratting} className='w-[90px]' alt="" />
                    </div>
                    <div className="w-[295px] h-[430px] shadow-2xl flex flex-col items-center p-5 mt-5">
                        <p className="font-poppins text-[15px] text-[#A51D21] font-semibold mt-10">administrator at Quickglass </p>
                        <p className="font-poppins text-[12px] font-semibold mt-14">AYL Agency made things easy for us. From sorting out our brand to creating our website and print materials, they knew their stuff. AYL knows how to get things done, and we're glad we chose them.</p>
                        <img src={ratting} className='w-[90px]' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
