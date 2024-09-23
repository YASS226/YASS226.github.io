import React, { useRef, useState } from 'react';
import back from '../../src/dark-black-pattern-bgs.jpg';
import logoayl from '../../src/ayl2.png';
import emailjs from '@emailjs/browser';

const Footer = () => {
    const form = useRef();
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validateMobile = (mobile) => {
        const re = /^\d{10}$/; // Adjust this regex according to your requirements
        return re.test(String(mobile));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const email = form.current.client_email.value;
        const mobile = form.current.client_mobile.value;

        if (!validateEmail(email)) {
            setError('Invalid email format');
            return;
        }

        if (!validateMobile(mobile)) {
            setError('Invalid mobile number format');
            return;
        }

        setError('');

        emailjs
            .sendForm('service_6gxly3m', 'template_06reuao', form.current, {
                publicKey: 'Z1CY8VLFD2SphbvvG',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset();
    };

    return (
        <div className="w-full h-fit overflow-hidden bg-black relative mt-4 md:mt-[2.5rem] flex flex-col" id="Contact">
            <img src={back} className="h-full absolute z-10" alt="" />
            <div className="flex items-center justify-between z-20 mt-3 countainer">
                <p className="text-[7px] sm:text-[10px] xl:text-[13px] text-start font-montserrat italic font-medium text-white">
                    ENGAGEZ-NOUS POUR AMÉLIORER VOTRE MARQUE AU NIVEAU SUIVANT
                </p>
                <div className="w-[60px] sm:w-[40%] xl:w-[62%] h-0 border border-white ml-1"></div>
            </div>
            <div className="mt-4 font-montserrat font-extrabold text-[22.6394px] xl:text-[35px] xl:leading-[41px] leading-[28px] flex flex-col items-start justify-start text-white countainer z-20">
                <p className="text-start">
                    Vous avez un projet, vous cherchez peut-être des solutions créatives réclamez votre consultation <b className="font-black text-[24.6394px] xl:text-[40px] text-[#A51D21]">Gratuite</b>
                </p>
            </div>
            <div className="countainer xl:w-[100%] text-center flex flex-col m-auto mt-8 z-20">
                <div className="mt-5 xl:flex xl:justify-between xl:items-center">
                    <div className="xl:w-[50%]">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form">
                                <input placeholder="Your email" name="client_email" className="input pl-2 font-montserrat font-medium text-[12px] leading-[13.8px] w-[269px] h-[43px] rounded-[1.65169px] border-[0.54px] outline-none mt-2" required type="email" />
                                <span className="input-border"></span>
                            </div>
                            <div className="form">
                                <input name="client_mobile" className="input pl-2 font-montserrat font-medium text-[12px] leading-[13.8px] w-[269px] h-[43px] rounded-[1.65169px] border-[0.54px] outline-none mt-2" placeholder="Your Mobile" required type="text" />
                                <span className="input-border"></span>
                            </div>
                            <div className="form">
                                <textarea name="message" className="input pl-2 font-montserrat font-medium text-[12px] leading-[13.8px] w-[269px] h-[80px] rounded-[1.65169px] border-[0.54px] outline-none mt-2" placeholder="Type your text" required></textarea>
                                <span className="input-border"></span>
                            </div>
                            {error && <p className="text-red-500">{error}</p>}
                            <div className="items-end justify-center xl:justify-end flex mt-3 w-full cursor-pointer">
                                <div className="w-[125px] h-[43px] rounded shadow bg-[#A51D21] flex items-center justify-center">
                                    <button type="submit" className="text-white font-montserrat font-medium text-[12px]">
                                        Envoyer
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <img src={logoayl} className="xl:flex hidden xl:mr-[3.5rem] 2xl:mr-[7.5rem]" alt="" />
                </div>
            </div>
            <div className="w-full h-[240px] xl:h-[200px] flex items-center justify-center flex-col text-white px-6 bg-black bg-opacity-100 border-t-2 mt-4 m-auto ml-0 z-20">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h2 className="font-montserrat font-bold text-[20px] mb-1">Ayl Agency</h2>
                        <p className="opacity-30">© 2024 Ayl Agency. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4 text-[8px] sm:text-[15px] mb-4">
                        <a href="/#Info" className="opacity-30 hover:opacity-100 transition duration-600 ease-in-out">
                            À propos de nous
                        </a>
                        <a href="/#Services" className="opacity-30 hover:opacity-100 transition duration-600 ease-in-out">
                            Services
                        </a>
                        <a href="/#Work" className="opacity-30 hover:opacity-100 transition duration-600 ease-in-out">
                            Nos Realisations
                        </a>
                        <a href="/#FAQ" className="opacity-30 hover:opacity-100 transition duration-600 ease-in-out">
                            FAQ
                        </a>
                        <a href="/#Contact" className="opacity-30 hover:opacity-100 transition duration-600 ease-in-out">
                            Contactez-nous
                        </a>
                    </div>
                </div>
                <p className="text-center mb-4 ">Follow us on</p>
                <div className="countainer z-20 flex w-[150px] justify-between absolute bottom-10">
                    <a rel="noopener noreferrer" href='https://www.facebook.com/profile.php?id=100088203763826&mibextid=ZbWKwL&_rdc=2&_rdr' target='_blank' className=' font-montserrat font-extrabold text-[10px] leading-[12px] text-white ' >Facebook</a>
                    <a rel="noopener noreferrer" href='https://www.instagram.com/agencyayl/' target='_blank' className=' font-montserrat font-extrabold text-[10px] leading-[12px] text-white ' >Instagram</a>
                    <a rel="noopener noreferrer" href='https://www.linkedin.com/company/ayl-agency/' target='_blank' className=' font-montserrat font-extrabold text-[10px] leading-[12px] text-white ' >linkdin</a>
                </div>
                <div className="countainer z-20 flex w-[150px] justify-center absolute bottom-5 ">
                    <p className='font-montserrat font-extrabold text-[10px] leading-[12px] text-white mr-4' >Contact@aylagency.com</p>
                    <p className='font-montserrat font-extrabold text-[10px] leading-[12px] text-white' >+212619861440</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
