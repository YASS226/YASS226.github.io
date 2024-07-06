import Footer from "./Footer";
import Nav from "./Nav";
import back from '../../src/dark-black-pattern-bgs.jpg'
import strategie from '../../src/strategy.png'
import dev from '../../src/coding.png'
import mesg from '../../src/promotion.png'
import social from '../../src/social.png'
import markdigital from '../../src/technique.png'
import event from '../../src/event.png'
import { Link } from "react-router-dom";
// import React, { useEffect, useRef } from 'react';
import React, { useEffect } from 'react';


const servicesInfo = [
    {
        category: "Stratégie Marketing & Branding",
        description: "Notre service de stratégie marketing et de branding vise à définir une vision claire pour votre marque et à élaborer des stratégies percutantes pour atteindre vos objectifs commerciaux. Nous travaillons sur l'identification de votre positionnement unique sur le marché, la segmentation de votre audience cible, et la création d'une image de marque forte et cohérente.",
        services: [
            {
                title: "Audit digital et Benchmarking",
                description: "Optimisez votre présence en ligne avec notre audit digital détaillé et benchmarking concurrentiel. Identifiez les opportunités d'amélioration et positionnez-vous stratégiquement dans votre secteur."
            },
            {
                title: "Plan digital et exécution",
                description: "Développez une stratégie digitale complète adaptée à vos objectifs commerciaux. De la conception du plan à son exécution, nous vous accompagnons à chaque étape pour maximiser votre succès en ligne."
            },
            {
                title: "Digital KPIs et monitoring",
                description: "Mesurez et analysez vos performances digitales avec des KPIs pertinents. Notre monitoring continu assure que vous atteignez vos objectifs tout en adaptant votre stratégie en temps réel."
            },
            {
                title: "Marketing d’influence",
                description: "Boostez votre visibilité grâce à notre expertise en marketing d’influence. Engagez votre audience cible à travers des collaborations stratégiques avec des influenceurs pertinents pour votre secteur."
            }
        ]
    },
    {
        category: "Développement Web",
        description: "Améliorez votre présence en ligne avec nos services complets de développement web. Nous nous spécialisons dans la création de sites web responsives, assurant une expérience fluide sur tous les appareils. Profitez de nos services de domaine et d'hébergement, de notre expertise en design web avec un focus sur l'UX & UI, et de notre capacité à développer des applications personnalisées.",
        services: [
            {
                title: "Création et développement de sites responsives",
                description: "Offrez une expérience utilisateur optimale avec nos sites web responsives, adaptés à tous les appareils. Nous concevons et développons des sites performants qui captivent et convertissent vos visiteurs."
            },
            {
                title: "Domain & Hosting services",
                description: "Simplifiez votre présence en ligne avec nos services complets de domaine et d'hébergement. Nous vous aidons à choisir le bon nom de domaine et à héberger votre site sur des serveurs fiables et sécurisés."
            },
            {
                title: "Web Design / UX & UI",
                description: "Améliorez l'attrait visuel et la convivialité de votre site avec notre expertise en design web, UX (expérience utilisateur) et UI (interface utilisateur). Nous créons des interfaces intuitives qui optimisent la navigation et renforcent votre image de marque."
            },
            {
                title: "Développement d’applications",
                description: "Transformez vos idées en réalité numérique avec nos solutions d'applications personnalisées. De la planification à la mise en œuvre, nous développons des applications robustes et innovantes pour répondre à vos besoins spécifiques."
            }
        ]
    },
    {
        category: "Communication visuelle",
        description: "Captivez votre audience avec une communication visuelle impressionnante. Nos services incluent la photographie et la vidéographie professionnelles pour donner vie à votre marque, le motion design et l'animation pour ajouter des éléments dynamiques, ainsi que le design graphique pour créer des supports marketing visuellement attrayants et percutants.",
        services: [
            {
                title: "Graphic Design",
                description: "Renforcez votre identité visuelle avec notre design graphique. Nous concevons des éléments visuels percutants et professionnels qui reflètent votre marque et captivent votre audience ( Logos , chartes graphiques , affiches , catalogues …)"
            },
            {
                title: "Photography ; Videography :",
                description: "Capturez l'instant avec notre expertise en photographie et vidéographie. Créez des images et des vidéos de haute qualité qui captivent et inspirent votre audience."
            },
            {
                title: "Motion Design & Animation :",
                description: "Donnez vie à vos idées avec notre motion design et animation. Créez des contenus dynamiques et engageants pour votre site web, vos réseaux sociaux et vos campagnes marketing."
            }
        ]
    },
    {
        category: "Social Media",
        description: "Optimisez votre présence sur les réseaux sociaux avec notre expertise en community management. Nous créons du contenu engageant et pertinent, et nous gérons la publicité et l'achat média sur Facebook, Instagram, TikTok, et autres plateformes pour maximiser votre portée et votre impact.",
        services: [
            {
                title: "Community Management :",
                description: ": Engagez et développez votre communauté en ligne avec notre gestion de communauté. Nous créons des stratégies interactives et authentiques pour renforcer vos relations et fidéliser votre audience."
            },
            {
                title: "Création de Contenu :",
                description: "Inspirez et informez votre audience avec notre création de contenu. Nous produisons du contenu original et captivant adapté à vos besoins et à votre stratégie marketing."
            },
            {
                title: "Advertising et Media Buying (Facebook/Instagram Ads, TikTok Ads) :",
                description: "Maximisez votre visibilité et votre ROI avec notre expertise en publicité et achat média. Nous gérons vos campagnes sur Facebook, Instagram, TikTok et d'autres plateformes pour atteindre efficacement votre audience cible."
            }
        ]
    },
    {
        category: "Marketing digital",
        description: "Augmentez votre visibilité en ligne avec nos services de SEO, SEA et SEM. Nous générons des leads qualifiés, concevons des campagnes d'email marketing efficaces, et offrons un support technique complet pour garantir que toutes vos stratégies digitales sont parfaitement exécutées.",
        services: [
            {
                title: "SEO (Search Engine Optimization) :",
                description: "Améliorez votre visibilité en ligne avec notre SEO. Nous optimisons votre site pour les moteurs de recherche afin d'attirer un trafic qualifié et d'augmenter votre présence sur le web."
            },
            {
                title: "SEA (Search Engine Advertising) et SEM (Search Engine Marketing) :",
                description: "Boostez votre trafic et votre conversion avec nos services de SEA et SEM. Nous gérons vos campagnes publicitaires sur les moteurs de recherche pour maximiser votre ROI et votre visibilité."
            },
            {
                title: "Génération de Leads :",
                description: "Convertissez les visiteurs en clients potentiels avec notre génération de leads. Nous mettons en place des stratégies efficaces pour capturer et qualifier des leads qualifiés pour votre entreprise."
            },
            {
                title: "Email Marketing :",
                description: "Engagez votre audience et fidélisez vos clients avec notre email marketing. Nous créons des campagnes ciblées et personnalisées pour stimuler les ventes et renforcer la relation client."
            },
            {
                title: " Support Technique :",
                description: "Assurez le bon fonctionnement de votre site web avec notre support technique. Nous offrons une assistance proactive pour résoudre les problèmes techniques et garantir une expérience utilisateur fluide."
            }
        ]
    },
    {
        category: "Evénementiel & Formation",
        description: "Organisez des événements professionnels mémorables avec notre expertise en conférences, séminaires, et salons. Nous proposons également des formations et ateliers de team building pour renforcer vos équipes, ainsi que des services d'impression pour tous types de supports.",
        services: [
            {
                title: "Organisation d’événements professionnels (Conférences, séminaires, salons) :",
                description: "Créez des événements mémorables avec notre expertise en organisation d'événements. Nous planifions et gérons chaque détail pour assurer le succès de votre conférence, séminaire ou salon professionnel."
            },
            {
                title: "Formation et ateliers Team Building :",
                description: "Renforcez l'esprit d'équipe et améliorez la performance avec nos formations et ateliers de team building. Nous concevons des programmes interactifs et personnalisés pour stimuler la collaboration et la motivation au sein de votre équipe."
            },
            {
                title: "Impression de tous types de supports :",
                description: "Transformez vos idées en réalité imprimée avec notre service d'impression polyvalent. Nous imprimons une gamme complète de supports ( flyers, catalogues,  Brochures, stylos, désodorisants et plein d’autres articles"
            }
        ]
    },
    // Add more categories as needed
];

const ServiceInffo = ( { category } ) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [ category]);

    const filteredCategory = servicesInfo.find(cat => cat.category === category);

    if (!filteredCategory) {
        return <p>Category not found!</p>;
    }

    return (
        <div className="">
            <Nav></Nav>
            <div className=" w-full items-center absolute top-0 z-20  ">
                <div className=" mb-5 w-full flex items-center justify-center flex-col mt-[70px] relative" key={filteredCategory.category}>
                    <div className=" z-20 w-full flex flex-col justify-center items-center  text-white bg-no-repeat bg-black xl:bg-cover  " style={{
                        backgroundImage: `url(${back})`,
                        backgroundAttachment: 'fixed',
                        height: "80vh",
                        backgroundPosition: "center top "
                    }} >
                        {/* <div className=" bg-[#000] absolute w-full h-[80vh] top-0 opacity-40 z-10 "></div> */}
                        <h1 className=" z-20 text-center font-montserrat font-extrabold text-[31.1644px] leading-[38px] m-auto mb-2 ">
                            {filteredCategory.category}
                        </h1>

                        <p className="z-20 text-center font-montserrat font-medium w-[80%] mt-0 text-[15px]   m-auto " >{filteredCategory.description}</p>

                    </div>


                    <div className="mt-5  items-start justify-start">
                        <div className=" mt-3 font-montserrat font-extrabold text-[19.92px] tracking-[-0.02em] leading-[28px] flex flex-col items-start justify-start  text-[#A51D21] ">
                            <p>NOS SERVICES</p>
                            <div className=" flex z-20 m-auto justify-center">
                                <div className=" w-[95px] h-0  border border-[#A51D21] ml-1 "></div>
                            </div>
                        </div>
                    </div>

                    <ul className="list-disc ml-8 mt-5">
                        {filteredCategory.services.map(service => (
                            <li key={service.title}>
                                <h2 className="font-montserrat font-bold text-lg mt-2">
                                    {service.title}
                                </h2>
                                <p className="mt-1 font-montserrat font-medium text-[10px]">
                                    {service.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-[5.25rem] mb-[5.25rem] flex flex-col justify-center items-center">
                    <div className=" mt-3 font-montserrat font-extrabold text-[19.92px] tracking-[-0.02em] leading-[28px] flex flex-col items-start justify-start  text-[#A51D21] ">
                        <p>AUTRES SERVICES</p>
                        <div className=" flex z-20 m-auto justify-center mt-1 ">
                            <div className=" w-[95px] h-0  border border-[#A51D21] ml-1 "></div>
                        </div>
                    </div>
                </div>
                <div className=" w-full m-auto flex items-center flex-col md:grid md:grid-cols-3 text-center mb-[5.25rem] ">
                    <Link to={`/serviceinfo/${'Stratégie Marketing & Branding'}`}>
                        <div className={`m-auto hover:border hover:bg-[#F08080]  hover:text-white transition duration-600 ease-in-out hover:rounded hover:shadow  w-fit mt-3 py-3 ${category === "Stratégie Marketing & Branding" ? ' bg-[#F08080] text-white rounded ' : 'text-black'}`} >
                            <img src={strategie} alt="" srcset="" className=' w-[33px] h-[33px] m-auto ' />
                            <p className='  font-montserrat font-bold text-[13px] leading-[16px] mt-1 ' >Stratégie Marketing & Branding</p>
                            <div className="w-[324px] h-[58px] flex mt-1 text-center ">
                                <p className=' font-montserrat font-medium italic text-[10px] leading-[12px]  m-auto '> Audit digital et Benchmarking<br />Plan digital et exécution<br />Digital KPIs et monitoring<br />Marketing d'influence</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/serviceinfo/${'Développement Web'}`} >
                        <div className={`m-auto hover:border hover:bg-[#F08080]  hover:text-white transition duration-600 ease-in-out hover:rounded hover:shadow  w-fit mt-3 py-3 ${category === "Développement Web" ? ' bg-[#F08080] text-white rounded ' : 'text-black'}`}>
                            <img src={dev} alt="" srcset="" className=' w-[33px] h-[33px] m-auto ' />
                            <p className='  font-montserrat font-bold text-[13px] leading-[16px] mt-1 ' >Développement Web</p>
                            <div className="w-[324px] h-[58px] flex mt-1 text-center ">
                                <p className=' font-montserrat font-medium italic text-[10px] leading-[12px] m-auto '> Création et développement de sites responsives<br />Domain & Hosting services<br />Web Design / UX & UI<br />Développement d'applications </p>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/serviceinfo/${'Communication visuelle'}`} >
                        <div className={`m-auto hover:border hover:bg-[#F08080]  hover:text-white transition duration-600 ease-in-out hover:rounded hover:shadow  w-fit mt-3 py-3 ${category === "Communication visuelle" ? ' bg-[#F08080] text-white rounded ' : 'text-black'}`} >
                            <img src={mesg} alt="" srcset="" className=' w-[33px] h-[33px] m-auto ' />
                            <p className='  font-montserrat font-bold text-[13px] leading-[16px] mt-1 ' >Communication visuelle</p>
                            <div className="w-[324px] h-[58px] flex mt-1 text-center ">
                                <p className=' font-montserrat font-medium italic text-[10px] leading-[12px] m-auto '>Photography ; videography<br />Motion design & animation<br />Graphic design</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/serviceinfo/${'Social Media'}`} >
                        <div className={`m-auto hover:border hover:bg-[#F08080]  hover:text-white transition duration-600 ease-in-out hover:rounded hover:shadow  w-fit mt-3 py-3 ${category === "Social Media" ? ' bg-[#F08080] text-white rounded ' : 'text-black'}`}>
                            <img src={social} alt="" srcset="" className=' w-[33px] h-[33px] m-auto ' />
                            <p className='  font-montserrat font-bold text-[13px] leading-[16px] mt-1 ' >Social Media</p>
                            <div className="w-[324px] h-[58px] flex mt-1 text-center ">
                                <p className=' font-montserrat font-medium italic text-[10px] leading-[12px]   m-auto '>Community management<br />Creation de contenu <br />Advertising et media buying (facebook/ instagram ads , tiktok ads..)</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/serviceinfo/${'Marketing digital'}`} >
                        <div className={`m-auto hover:border hover:bg-[#F08080]  hover:text-white transition duration-600 ease-in-out hover:rounded hover:shadow  w-fit mt-3 py-3 ${category === "Marketing digital" ? ' bg-[#F08080] text-white rounded ' : 'text-black'}`}>
                            <img src={markdigital} alt="" srcset="" className=' w-[33px] h-[33px] m-auto ' />
                            <p className='  font-montserrat font-bold text-[13px] leading-[16px] mt-1 ' >Marketing digital</p>
                            <div className="w-[324px] h-[58px] flex mt-1 text-center ">
                                <p className=' font-montserrat font-medium italic text-[10px] leading-[12px]  m-auto '>SEO , SEA , SEM<br />Generation de leads<br />Email Marketing<br />Support technique </p>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/serviceinfo/${'Evénementiel & Formation'}`} >
                        <div className={`m-auto hover:border hover:bg-[#F08080]  hover:text-white transition duration-600 ease-in-out hover:rounded hover:shadow  w-fit mt-3 py-3 ${category === "Evénementiel & Formation" ? ' bg-[#F08080] text-white rounded ' : 'text-black'}`}>
                            <img src={event} alt="" srcset="" className=' w-[33px] h-[33px] m-auto ' />
                            <p className='  font-montserrat font-bold text-[13px] leading-[16px] mt-1 ' >Evénementiel & Formation</p>
                            <div className="w-[324px] h-[58px] flex mt-1 text-center ">
                                <p className=' font-montserrat font-medium italic text-[10px] leading-[12px]   m-auto '>Organisation d’ Events Pro ( Conférence, seminaires, salons..)<br />Formation et ateliers Team Building<br />Impression de tous types de supports</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <Footer></Footer>
            </div>

        </div>
    );
}

export default ServiceInffo;