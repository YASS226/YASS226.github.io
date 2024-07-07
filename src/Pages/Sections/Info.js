import down from '../../src/downW.svg'
import img1 from '../../src/img1.jpg'
import img2 from '../../src/img2.jpg'
import img3 from '../../src/img4.jpg'
import img4 from '../../src/img3.jpg'
import img6 from '../../src/servicesimg.jpg'
import img7 from '../../src/Mehdi (1).gif'
import morroco from '../../src/morocco.png'
import suivis from '../../src/timetable.png'
import mask from '../../src/mask.png'
import creativite from '../../src/opportunity.png'
import engagement from '../../src/community-engagement.png'
import growth from '../../src/collaborative-growth.png'
import case1 from '../../src/Websites-Portfolio.jpg'
import case2 from '../../src/bodj.jpg'
import case3 from '../../src/driveimg.jpg'
import case4 from '../../src/Beige Grey.png'
import strategie from '../../src/strategy.png'
import dev from '../../src/coding.png'
import mesg from '../../src/promotion.png'
import social from '../../src/social.png'
import markdigital from '../../src/technique.png'
import event from '../../src/event.png'
import { Link } from "react-router-dom";
// import React, { useEffect, useRef } from 'react';
import React from 'react';

import logoayl from '../../src/ayl2.png';


const Info = () => {


    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setShowText(true);
    //     }, 10000); // Adjust the delay as needed

    //     return () => clearTimeout(timer);
    // }, []);

    const generateAnimatedText = (text) => {
        return text.split('').map((char, index) => (
            <span key={index} style={{ '--char-index': index }}>{char === ' ' ? '\u00A0' : char}</span>
        ));
    };

    return (
        <div className="  ">
            <div className=" flex justify-start countainer flex-col ">
                <div className=" flex items-center justify-between z-20 mt-3 md:mt-[2.5rem]  ">
                    <p className=' text-[8px] sm:text-[12px]  font-montserrat italic font-medium text-black ' >Votre succès, notre mission</p>
                    <div className=" w-[60%] sm:w-[72%] xl:w-[87%] h-0  border border-black  "></div>
                </div>
                <div className=" mt-3 font-montserrat font-extrabold text-[22.6394px] xl:text-[35px] tracking-[-0.06em] leading-[28px] xl:leading-[35px] flex flex-col items-start justify-start  text-black ">
                    <p className='animatedchar' >{generateAnimatedText('Plongez dans l Excellence')}</p>
                    <p className='animatedchar' >Digitale avec <b className='text-[#A51D21]' >{generateAnimatedText('Ayl Agency')}</b></p>
                </div>
                <div className="w-[322px] sm:w-[90%] h-fit flex items-start justify-start text-start mt-3 xl:flex xl:items-center xl:justify-between xl:my-auto ">
                    <p className=' font-montserrat font-extrabold text-[12px] xl:text-[16px] leading-[18px] text-black xl:w-[70%] '>Explorez le potentiel infini du marketing digital avec <b className='text-[#A51D21]' >Ayl Agency</b> Notre expertise, notre créativité et notre engagement envers l'excellence vous garantissent des résultats exceptionnels. Découvrez comment nous pouvons faire briller votre marque et vous démarquer dans un monde numérique en constante évolution.</p>
                    <img src={logoayl} className=' xl:w-[100px] xl:flex xl:visible hidden ' alt="" />
                </div>
                <div className=" w-[185px] h-[27.78px] sm:w-[200px] sm:h-[30px] rounded-[10.7397px] bg-[#A51D21] flex justify-center items-center mt-3">
                    <div className="flex items-center justify-between ">
                        <a href="/#Contact"><p className='font-montserrat font-italic  font-semibold text-[7.50471px] sm:text-[9px] text-[#fff] text-start ml-2' >Réclamez votre consultation gratuite</p></a>
                        <img src={down} className=' w-[15px] h-[15px] ' alt="" />
                    </div>
                </div>
            </div>

            <div id='Info' className=" flex items-center countainer flex-col mt-4 md:mt-[2.5rem] ">
                <div className=" w-[257px] sm:w-[90%] h-0  border border-black mb-2 opacity-30 "></div>
                <div className=" w-[111px] h-[111px] rounded-[90px] bg-black overflow-hidden flex justify-center items-center mt-4 ">
                    <img src={img4} alt="" className=' mt-[3.25rem] ' />
                </div>
                <div className=" flex flex-col items-center mt-2 ">
                    <p className=' font-montserrat-thin font-bold text-[12px] leading-[18px] text-black ' >Yassmina ez-zangui</p>
                    <p className='font-montserrat-thin font-normal text-[12px] leading-[18px] text-black ' >Founder</p>
                </div>
                <div className="w-[322px] xl:w-[592px] h-[115px] flex items-start justify-start text-center mt-3 mb-3 ">
                    <p className=' font-montserrat font-extrabold text-[12px] leading-[15px] text-black '>Nous sommes honorés de recevoir le prix de l'agence de marketing digital à la croissance la plus rapide de l'année C'est une reconnaissance de l'engagement sans faille de notre équipe envers nos clients et de notre passion pour l'innovation en matière de marketing digital.</p>
                </div>
            </div>
            <div className=" flex flex-col md:flex-row md:justify-between md:w-[95%] xl:w-[85%] md:m-auto 2xl:w-[75%] ">
                <img src={img1} alt="" className=" w-full md:w-[235px] mb-1 md:mb-0 xl:w-[350px] 2xl:w-[370px] " />
                <img src={img2} alt="" className=" w-full md:w-[235px] mb-1 md:mb-0 xl:w-[350px] 2xl:w-[370px] " />
                <img src={img3} alt="" className=" w-full md:w-[235px] mb-1 md:mb-0 xl:w-[350px] 2xl:w-[370px] " />
            </div>
            <div className=" countainer " id='Services'></div>
            <div className=" md:w-[95%] xl:w-[85%] flex justify-start countainer flex-col mt-4 md:mt-[2.5rem]">
                <div className=" flex  justify-end z-20 mt-4 ">
                    <div className="w-[50%] h-0  border border-black ml-1 "></div>
                </div>
                <div className=" flex flex-col justify-center items-start ">
                    <div className=" mt-4 font-montserrat font-extrabold text-[19.92px] tracking-[-0.02em] leading-[28px] flex flex-col items-start justify-start  text-black ">
                        <p>NOS SERVICES</p>
                        <div className=" flex  justify-end z-20 w-[100%]">
                            <div className=" w-full h-0  border border-black ml-1 mt-4 "></div>
                        </div>
                    </div>
                    <div className=" w-full flex items-center flex-col m-auto mt-5 xl:flex-row md:mt-[2.5rem] ">
                        <div className="w-full xl:w-[500px] xl:h-[500px] h-full overflow-hidden relative flex items-center justify-center bg-cover " style={{ backgroundImage: `url(${img6})`, backgroundPosition: 'center center' }} >
                            {/* <img src={img6} className='absolute top-0 left-0 w-auto h-full' alt="" /> */}
                        </div>


                        <div className=" w-full m-auto flex items-center flex-col md:grid md:grid-cols-2 ">
                            <Link to={`/serviceinfo/${'Stratégie Marketing & Branding'}`}>
                                <div className=" m-auto hover:border hover:bg-[#F08080] text-black hover:text-white transition duration-600 ease-in-out hover:rounded hover:shadow  w-fit mt-3 py-3 ">
                                    <img src={strategie} alt="" srcset="" className=' w-[33px] h-[33px] m-auto ' />
                                    <p className='  font-montserrat font-bold text-[13px] leading-[16px] mt-1 ' >Stratégie Marketing & Branding</p>
                                    <div className="w-[324px] h-[58px] flex mt-1 text-center ">
                                        <p className=' font-montserrat font-medium italic text-[10px] leading-[12px]  m-auto '> Audit digital et Benchmarking<br />Plan digital et exécution<br />Digital KPIs et monitoring<br />Marketing d'influence</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={`/serviceinfo/${'Développement Web'}`} >
                                <div className="m-auto hover:border hover:bg-[#F08080] text-black hover:text-white transition duration-600 ease-in-out hover:rounded hover:shadow  w-fit mt-3 py-3">
                                    <img src={dev} alt="" srcset="" className=' w-[33px] h-[33px] m-auto ' />
                                    <p className='  font-montserrat font-bold text-[13px] leading-[16px] mt-1 ' >Développement Web</p>
                                    <div className="w-[324px] h-[58px] flex mt-1 text-center ">
                                        <p className=' font-montserrat font-medium italic text-[10px] leading-[12px] m-auto '> Création et développement de sites responsives<br />Domain & Hosting services<br />Web Design / UX & UI<br />Développement d'applications </p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={`/serviceinfo/${'Communication visuelle'}`} >
                                <div className="m-auto hover:border hover:bg-[#F08080] text-black hover:text-white transition duration-600 ease-in-out hover:rounded hover:shadow  w-fit mt-3 py-3 ">
                                    <img src={mesg} alt="" srcset="" className=' w-[33px] h-[33px] m-auto ' />
                                    <p className='  font-montserrat font-bold text-[13px] leading-[16px] mt-1 ' >Communication visuelle</p>
                                    <div className="w-[324px] h-[58px] flex mt-1 text-center ">
                                        <p className=' font-montserrat font-medium italic text-[10px] leading-[12px] m-auto '>Photography ; videography<br />Motion design & animation<br />Graphic design</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={`/serviceinfo/${'Social Media'}`} >
                                <div className="m-auto hover:border hover:bg-[#F08080] text-black hover:text-white transition duration-600 ease-in-out hover:rounded hover:shadow  w-fit mt-3 py-3">
                                    <img src={social} alt="" srcset="" className=' w-[33px] h-[33px] m-auto ' />
                                    <p className='  font-montserrat font-bold text-[13px] leading-[16px] mt-1 ' >Social Media</p>
                                    <div className="w-[324px] h-[58px] flex mt-1 text-center ">
                                        <p className=' font-montserrat font-medium italic text-[10px] leading-[12px]   m-auto '>Community management<br />Creation de contenu <br />Advertising et media buying (facebook/ instagram ads , tiktok ads..)</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={`/serviceinfo/${'Marketing digital'}`} >
                                <div className=" m-auto hover:border hover:bg-[#F08080] text-black hover:text-white transition duration-600 ease-in-out hover:rounded hover:shadow  w-fit mt-3 py-3 ">
                                    <img src={markdigital} alt="" srcset="" className=' w-[33px] h-[33px] m-auto ' />
                                    <p className='  font-montserrat font-bold text-[13px] leading-[16px] mt-1 ' >Marketing digital</p>
                                    <div className="w-[324px] h-[58px] flex mt-1 text-center ">
                                        <p className=' font-montserrat font-medium italic text-[10px] leading-[12px]  m-auto '>SEO , SEA , SEM<br />Generation de leads<br />Email Marketing<br />Support technique </p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={`/serviceinfo/${'Evénementiel & Formation'}`} >
                                <div className="m-auto hover:border hover:bg-[#F08080] text-black hover:text-white transition duration-600 ease-in-out hover:rounded hover:shadow  w-fit mt-3 py-3 ">
                                    <img src={event} alt="" srcset="" className=' w-[33px] h-[33px] m-auto ' />
                                    <p className='  font-montserrat font-bold text-[13px] leading-[16px] mt-1 ' >Evénementiel & Formation</p>
                                    <div className="w-[324px] h-[58px] flex mt-1 text-center ">
                                        <p className=' font-montserrat font-medium italic text-[10px] leading-[12px]   m-auto '>Organisation d’ Events Pro ( Conférence, seminaires, salons..)<br />Formation et ateliers Team Building<br />Impression de tous types de supports</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex justify-start countainer flex-col ">
                <div className=" flex  justify-center opacity-30 z-20 mt-4 md:mt-[2.5rem] ">
                    <div className=" w-[90%] h-0  border border-black "></div>
                </div>

                <div className=" flex flex-col justify-center items-start ">
                    <div className=" lg:flex lg:justify-between lg:items-center lg:w-[80%] lg:m-auto lg:mt-4  ">
                        <div className=" mt-4 font-montserrat font-extrabold text-[19.92px] xl:text-[30px] tracking-[-0.02em] leading-[28px] xl:leading-[30px] flex flex-col items-start justify-start  text-black text-start ">
                            <p>Pourquoi <b className='text-[#A51D21]' >Ayl Agency</b> est votre allié incontournable </p>
                        </div>
                        <img src={img7} className='w-auto h-[174px] lg:flex hidden ' alt="" />
                    </div>
                    <div className=" w-full flex items-center flex-col mt-5 ">
                        <img src={img7} className='w-auto h-[174px] lg:hidden ' alt="" />
                        <div className="w-[322px] h-[115px] flex items-start justify-start text-center mt-4 lg:hidden ">
                            <p className=' font-montserrat font-extrabold text-[13px] leading-[18px] text-black  '>Bienvenue chez <b className='text-[#A51D21]' >Ayl Agency</b>, votre partenaire de confiance pour toutes vos stratégies marketing. Voici pourquoi nous sommes votre allié incontournable dans le monde numérique :</p>
                        </div>
                        <div className="  w-full flex items-center flex-col md:grid md:grid-cols-2  xl:mt-4 ">
                            <div className="  ">
                                <img src={morroco} alt="" srcset="" className=' w-[33px] h-[33px] m-auto mt-4 ' />
                                <p className='  font-montserrat font-bold text-[13px] leading-[16px] mt-1 ' >Expertise Locale</p>
                                <div className="w-[324px] h-[58px] flex mt-2 text-center m-auto ">
                                    <p className=' font-montserrat font-medium italic text-[10px] leading-[12px] text-black   '>En tant qu'agence basée localement, <b className='text-[#A51D21]' >Ayl Agency</b> comprend parfaitement le marché et les tendances qui le façonnent. Notre expertise locale nous permet de créer des stratégies sur mesure adaptées à vos besoins spécifiques.</p>
                                </div>
                            </div>
                            <div className=" mt-2 ">
                                <img src={suivis} alt="" srcset="" className=' w-[33px] h-[33px] m-auto ' />
                                <p className='  font-montserrat font-bold text-[13px] leading-[16px] mt-1 ' >Suivi et Analyse Rigoureux</p>
                                <div className="w-[324px] h-[58px] flex mt-2 text-center m-auto ">
                                    <p className=' font-montserrat font-medium italic text-[10px] leading-[12px] text-black  '>Nous ne nous contentons pas de lancer des campagnes, nous les suivons de près et analysons les données pour optimiser les performances. Notre approche axée sur les résultats garantit un retour sur investissement optimal pour chaque euro dépensé.</p>
                                </div>
                            </div>
                            <div className=" mt-2 ">
                                <img src={mask} alt="" srcset="" className=' w-[33px] h-[33px] m-auto ' />
                                <p className='  font-montserrat font-bold text-[13px] leading-[16px] mt-1 ' >Approche Personnalisée</p>
                                <div className="w-[324px] h-[58px] flex mt-2 text-center m-auto ">
                                    <p className=' font-montserrat font-medium italic text-[10px] leading-[12px] text-black  '>Chez Ayl Agency, chaque client est unique. Nous adoptons une approche personnalisée pour chaque projet, en tenant compte de vos objectifs, de votre budget et de votre public cible pour garantir des résultats optimaux.</p>
                                </div>
                            </div>
                            <div className=" mt-2 ">
                                <img src={creativite} alt="" srcset="" className=' w-[33px] h-[33px] m-auto ' />
                                <p className='  font-montserrat font-bold text-[13px] leading-[16px] mt-1 ' >Créativité Innovante</p>
                                <div className="w-[324px] h-[58px] flex mt-2 text-center m-auto ">
                                    <p className=' font-montserrat font-medium italic text-[10px] leading-[12px] text-black  '>Notre équipe créative est constamment à l'affût des dernières tendances et technologies. Nous mettons en œuvre des stratégies innovantes pour vous démarquer de la concurrence et captiver votre audience.</p>
                                </div>
                            </div>
                            <div className=" mt-2 ">
                                <img src={engagement} alt="" srcset="" className=' w-[33px] h-[33px] m-auto ' />
                                <p className='  font-montserrat font-bold text-[13px] leading-[16px] mt-1 ' >Engagement envers la Qualité</p>
                                <div className="w-[324px] h-[58px] flex mt-2 text-center m-auto ">
                                    <p className=' font-montserrat font-medium italic text-[10px] leading-[12px] text-black  '>La qualité est au cœur de tout ce que nous faisons. De la conception de campagnes percutantes à l'analyse des résultats, Ayl Agency s'engage à fournir des services de la plus haute qualité pour assurer votre succès.</p>
                                </div>
                            </div>
                            <div className=" mt-2 ">
                                <img src={growth} alt="" srcset="" className=' w-[33px] h-[33px] m-auto ' />
                                <p className='  font-montserrat font-bold text-[13px] leading-[16px] mt-1 ' >Collaboration Transparente</p>
                                <div className="w-[324px] h-[58px] flex mt-2 text-center m-auto ">
                                    <p className=' font-montserrat font-medium italic text-[10px] leading-[12px] text-black  '>Chez Ayl Agency, nous croyons en une collaboration transparente avec nos clients. Nous vous tenons informés à chaque étape du processus et travaillons en étroite collaboration pour atteindre vos objectifs marketing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className=" container " id='Work' ></div>
            <div className=" countainer flex flex-col  justify-center w-[80%]  sm:w-[90%] xl:w-full  m-auto" id='Work' >
                <div className=" flex items-center z-20 m-auto mt-4 md:mt-[2.5rem] w-full ">
                    <p className=' text-[6.23288px] md:text-[10px] sm:text-[10px] xl:text-[15px] font-montserrat italic font-medium text-black ' >Explorez nos succès</p>
                    <div className=" w-[70%] md:w-[76%] xl:w-[85%] h-0  border border-[#A51D21] ml-1 "></div>
                </div>

                <div className=" mt-4 font-montserrat font-extrabold text-[19.92px] tracking-[-0.02em] leading-[28px] flex flex-col items-start justify-start  text-black ">
                    <p>Parmi nos réalisations</p>
                </div>

                <div className=" w-full flex flex-col md:grid md:grid-cols-2 md:mt-[2.5rem] ">
                    <div className=" m-auto sm:w-[410px] sm:h-[234px] w-[210px] h-[134px] relative overflow-hidden mt-5 service " >
                        <img src={case1} className=' absolute bottom-4 ' alt="" />
                        <div className=" w-full  h-[49px] bg-white absolute bottom-0 flex justify-start ">
                            <div className=" flex flex-col items-start justify-center ml-5 ">
                                <p className=' font-montserrat font-black text-[20px] tracking-tighter text-black ' >H Travel Agency</p>
                                <p className='font-montserrat font-medium italic text-[10px] mt-[-6px] tracking-tighter text-black ' >Website - SEO</p>
                            </div>
                        </div>
                    </div>
                    <div className=" m-auto sm:w-[410px] sm:h-[234px] w-[210px] h-[134px] relative overflow-hidden mt-5 service " >
                        <img src={case2} className=' absolute top-[-50px] ' alt="" />
                        <div className=" w-full  h-[49px] bg-white absolute bottom-0 flex justify-start ">
                            <div className=" flex flex-col items-start justify-center ml-5 ">
                                <p className=' font-montserrat font-black text-[20px] tracking-tighter text-black ' >BOJADOR</p>
                                <p className='font-montserrat font-medium italic text-[10px] mt-[-6px] tracking-tighter text-black ' >Branding - Graphic design</p>
                            </div>
                        </div>
                    </div>
                    <div className=" m-auto sm:w-[410px] sm:h-[234px] w-[210px] h-[134px] relative overflow-hidden mt-5 service bg-[#f9f9fa] " >
                        <img src={case3} className=' absolute w-[50%] left-[100px] m-auto' alt="" />
                        <div className=" w-full  h-[49px] bg-white absolute bottom-0 flex justify-start ">
                            <div className=" flex flex-col items-start justify-center ml-5 ">
                                <p className=' font-montserrat font-black text-[20px] tracking-tighter text-black ' >Indrive</p>
                                <p className='font-montserrat font-medium italic text-[10px] mt-[-6px] tracking-tighter text-black ' >Graphic Design - Paid Media - Printing</p>
                            </div>
                        </div>
                    </div>
                    <div className=" m-auto sm:w-[410px] sm:h-[234px] w-[210px] h-[134px] relative overflow-hidden mt-5 service " >
                        <img src={case4} className=' absolute bottom-4 ' alt="" />
                        <div className=" w-full  h-[49px] bg-white absolute bottom-0 flex justify-start ">
                            <div className=" flex flex-col items-start justify-center ml-5 ">
                                <p className=' font-montserrat font-black text-[20px] tracking-tighter text-black ' >KENZI Hotels</p>
                                <p className='font-montserrat font-medium italic text-[10px] mt-[-6px] tracking-tighter text-black ' >Graphic Design</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Info;