import ayl from '../../src/ayl.png';
import insta from '../../src/insta.png';
import face from '../../src/face.svg';
import twiter from '../../src/twiter.svg';

const Footer = () => {
    return (
        <div className=" flex items-center flex-col  p-5">
            <img src={ayl} className=' w-[125px]  ' alt="" />
            <p className='font-poppins text-[15px] text-[#A51D21] mt-3 ' >We are Perfectionists, obsessed with perfection.</p>
            <p className='font-poppins text-[15px] font-black text-[#000] mt-3 ' >Connectons-nous !</p>
            <div className=" flex m-auto mt-3 ">
                <img src={insta} className='h-5 mr-5 ' alt="" />
                <img src={face} className='h-5 mr-5 ' alt="" />
                <img src={twiter} className='h-5' alt="" />
            </div>
        </div>
    );
}

export default Footer;