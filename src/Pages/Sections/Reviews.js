import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import add from '../../src/add.svg';
import left from '../../src/video-left.svg';
import right from '../../src/video-right.svg';
import Cimat from '../../src/CIMAT LOGO (1).png';
import Kenzi from '../../src/KENZI LOGOO (1).png';
import indrive from '../../src/indrive logo.png';
import parq from '../../src/LE PARQUETEUR.png';
import lessieur from '../../src/lesieur logo.png';
import Tcl from '../../src/TCL 1.1 (1).png';
import mec from '../../src/logo mecomar (1) (1).png';
import logof3 from '../../src/Logo F3.png';
import vax from '../../src/vaxigrip logo.png';
import Tang from '../../src/Tangier-Film-Festival-Logos.png';
import achghal from '../../src/achghal logo.jpg';
import sega from '../../src/ESPRESSO LOGO.png';


const logos = [Cimat, Kenzi, parq, indrive, lessieur, Tcl, mec, logof3, vax, Tang, achghal, sega];

// const faqs = [
//   {
//     question: "Comment pouvez-vous aider ma petite entreprise à se développer en ligne ?",
//     answer: `
//      Chez AYL AGENCY, nous avons une expertise particulière dans l'accompagnement des petites entreprises. Voici comment nous pouvons vous aider à développer votre présence en ligne :
//         •	SEO Local : Attirez des clients locaux avec des stratégies SEO adaptées à votre zone géographique.
//         •	Campagnes Publicitaires Ciblées : Utilisation de PPC et des publicités sociales pour atteindre votre public cible.
//         •	Optimisation du Site Web : Amélioration de la vitesse, de la navigation et de l'expérience utilisateur pour augmenter les conversions.
//         •	Création de Contenu : Développement de contenu pertinent et engageant pour attirer et fidéliser votre audience.
//         •	Formation et Support : Formation continue pour vous et votre équipe afin de maintenir et d'optimiser votre présence en ligne.
//         Contactez-nous dès aujourd'hui pour un audit gratuit et découvrez comment nous pouvons améliorer votre business.

//       `
//   },
//   {
//     question: "Est-ce que le Marketing digital fonctionne pour les B2B ?",
//     answer: `
//       Oui, le marketing digital est très efficace pour les entreprises B2B. Voici pourquoi :
//         •	Génération de leads : Les stratégies comme le SEO, le marketing de contenu et le PPC (Pay-Per-Click) peuvent attirer des leads qualifiés.
//         •	Nurturing et fidélisation : Le marketing par e-mail et les campagnes sur les réseaux sociaux permettent de maintenir l'engagement et de nourrir les leads tout au long du cycle de vente.
//         •	Mesurabilité et ajustement : Les campagnes digitales offrent des données précises permettant d’ajuster et d’optimiser en temps réel pour de meilleurs résultats.
//         •	Ciblage précis : Les plateformes digitales permettent de cibler des audiences spécifiques basées sur des critères démographiques, comportementaux, et contextuels.
//         •	Contenu informatif : Les acheteurs B2B recherchent des informations détaillées et éducatives avant de prendre des décisions. Le marketing digital permet de fournir ce contenu à travers des blogs, des livres blancs, et des webinaires.
//         Prenez rendez-vous avec nous pour discuter de vos besoins en marketing digital B2B et découvrir comment nous pouvons vous aider à générer plus de leads qualifiés.

//       `
//   },
//   {
//     question: "Que veut dire agence 360 degrés et quels sont les avantages de votre agence marketing ?",
//     answer: `
//       Une agence 360 degrés offre une gamme complète de services marketing, couvrant tous les aspects du marketing digital et traditionnel. Cela inclut la stratégie, le branding, la publicité, le SEO, le marketing de contenu, les réseaux sociaux, le marketing par e-mail, l'analytique, et plus encore.
//       Avantages de notre agence marketing :
//       •	Stratégie intégrée : Nous développons des stratégies marketing cohérentes et intégrées qui couvrent tous les canaux pour maximiser l'impact.
//       •	Expertise diversifiée : Notre équipe est composée de spécialistes dans divers domaines du marketing et événementiel assurant une approche holistique et experte.
//       •	Gain de temps et d'efficacité : Travailler avec une seule agence pour tous vos besoins marketing simplifie la gestion et permet une meilleure coordination.
//       •	Résultats mesurables : Nous utilisons des outils avancés pour mesurer et analyser les performances de toutes les campagnes, assurant des ajustements et des optimisations continus.
//       •	Approche personnalisée : Nous adaptons nos services en fonction des besoins spécifiques de chaque client, assurant des solutions sur mesure qui répondent à vos objectifs d'affaires.
//       En choisissant notre agence, vous bénéficiez d'une expertise complète et d'une approche stratégique qui vous aide à atteindre vos objectifs marketing de manière efficace et mesurable. 
//       Contactez-nous dès maintenant pour une consultation gratuite et découvrez comment notre approche 360 degrés peut transformer votre marketing.

//       `
//   },
//   {
//     question: "Quels avantages apporte la gestion des réseaux sociaux à mon entreprise ?",
//     answer: `
//       La gestion des réseaux sociaux par AYL Agency offre de nombreux avantages à votre entreprise :
//         1.	Engagement Client : Interactions régulières avec votre audience pour renforcer la fidélité.
//         2.	Visibilité de Marque : Augmentation de la notoriété de votre marque sur les plateformes sociales.
//         3.	Génération de Leads : Utilisation de campagnes ciblées pour attirer de nouveaux prospects.
//         4.	Service Client : Réponse rapide et efficace aux questions et préoccupations des clients.
//         5.	Analyse des Performances : Suivi et optimisation des campagnes pour des résultats améliorés.
//         Contactez-nous dès maintenant pour une consultation gratuite 


//       `
//   }
// ];

const faqs = [
  {
    question: "Comment pouvez-vous aider ma petite entreprise à se développer en ligne ?",
    answer: (
      <>
        Chez AYL AGENCY, nous avons une expertise particulière dans l'accompagnement des petites entreprises. Voici comment nous pouvons vous aider à développer votre présence en ligne :
        <ul className=' ml-5 '>
          <li><b>SEO Local  :</b> Attirez des clients locaux avec des stratégies SEO adaptées à votre zone géographique.</li>
          <li><b>Campagnes Publicitaires Ciblées :</b> Utilisation de PPC et des publicités sociales pour atteindre votre public cible.</li>
          <li><b>Optimisation du Site Web :</b> Amélioration de la vitesse, de la navigation et de l'expérience utilisateur pour augmenter les conversions.</li>
          <li><b>Création de Contenu :</b> Développement de contenu pertinent et engageant pour attirer et fidéliser votre audience.</li>
          <li><b>Formation et Support :</b> Formation continue pour vous et votre équipe afin de maintenir et d'optimiser votre présence en ligne.</li>
        </ul>
        <b>Contactez-nous dès aujourd'hui pour un audit gratuit et découvrez comment nous pouvons améliorer votre business.</b>
      </>
    )
  },
  {
    question: "Est-ce que le Marketing digital fonctionne pour les B2B ?",
    answer: (
      <>
        <b>Oui, le marketing digital est très efficace pour les entreprises B2B. Voici pourquoi :</b>
        <ul className=' ml-5 ' >
          <li><b>Génération de leads :</b> Les stratégies comme le SEO, le marketing de contenu et le PPC (Pay-Per-Click) peuvent attirer des leads qualifiés.</li>
          <li><b>Nurturing et fidélisation :</b> Le marketing par e-mail et les campagnes sur les réseaux sociaux permettent de maintenir l'engagement et de nourrir les leads tout au long du cycle de vente.</li>
          <li><b>Mesurabilité et ajustement :</b> Les campagnes digitales offrent des données précises permettant d’ajuster et d’optimiser en temps réel pour de meilleurs résultats.</li>
          <li><b>Ciblage précis :</b> Les plateformes digitales permettent de cibler des audiences spécifiques basées sur des critères démographiques, comportementaux, et contextuels.</li>
          <li><b>Contenu informatif :</b> Les acheteurs B2B recherchent des informations détaillées et éducatives avant de prendre des décisions. Le marketing digital permet de fournir ce contenu à travers des blogs, des livres blancs, et des webinaires.</li>
        </ul>
        <b>Prenez rendez-vous avec nous pour discuter de vos besoins en marketing digital B2B et découvrir comment nous pouvons vous aider à générer plus de leads qualifiés.</b>
      </>
    )
  },
  {
    question: "Que veut dire agence 360 degrés et quels sont les avantages de votre agence marketing ?",
    answer: (
      <>
        Une agence 360 degrés offre une gamme complète de services marketing, couvrant tous les aspects du marketing digital et traditionnel. Cela inclut la stratégie, le branding, la publicité, le SEO, le marketing de contenu, les réseaux sociaux, le marketing par e-mail, l'analytique, et plus encore.
        <ul className=' ml-5 ' >
          <li><b>Stratégie intégrée :</b> Nous développons des stratégies marketing cohérentes et intégrées qui couvrent tous les canaux pour maximiser l'impact.</li>
          <li><b>Expertise diversifiée :</b> Notre équipe est composée de spécialistes dans divers domaines du marketing et événementiel assurant une approche holistique et experte.</li>
          <li><b>Gain de temps et d'efficacité :</b> Travailler avec une seule agence pour tous vos besoins marketing simplifie la gestion et permet une meilleure coordination.</li>
          <li><b>Résultats mesurables :</b> Nous utilisons des outils avancés pour mesurer et analyser les performances de toutes les campagnes, assurant des ajustements et des optimisations continus.</li>
          <li><b>Approche personnalisée :</b> Nous adaptons nos services en fonction des besoins spécifiques de chaque client, assurant des solutions sur mesure qui répondent à vos objectifs d'affaires.</li>
        </ul>
        <b>En choisissant notre agence, vous bénéficiez d'une expertise complète et d'une approche stratégique qui vous aide à atteindre vos objectifs marketing de manière efficace et mesurable. 
        Contactez-nous dès maintenant pour une consultation gratuite et découvrez comment notre approche 360 degrés peut transformer votre marketing.</b>
      </>
    )
  },
  {
    question: "Quels avantages apporte la gestion des réseaux sociaux à mon entreprise ?",
    answer: (
      <>
        La gestion des réseaux sociaux par AYL Agency offre de nombreux avantages à votre entreprise :
        <ul className=' ml-5 ' >
          <li><b>Engagement Client :</b> Interactions régulières avec votre audience pour renforcer la fidélité.</li>
          <li><b>Visibilité de Marque :</b> Augmentation de la notoriété de votre marque sur les plateformes sociales.</li>
          <li><b>Génération de Leads :</b> Utilisation de campagnes ciblées pour attirer de nouveaux prospects.</li>
          <li><b>Service Client :</b> Réponse rapide et efficace aux questions et préoccupations des clients.</li>
          <li><b>Analyse des Performances :</b> Suivi et optimisation des campagnes pour des résultats améliorés.</li>
        </ul>
        <b>Contactez-nous dès maintenant pour une consultation gratuite.</b>
      </>
    )
  }
];


const Reviews = () => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('slide-inlg');
  const [visibleFAQIndex, setVisibleFAQIndex] = useState(null);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('slide-outlg');
      setTimeout(() => {
        setCurrentLogoIndex((prevIndex) => (prevIndex + 4) % logos.length);
        setAnimationClass('slide-inlg');
      }, 1000); // This timeout should match the duration of the slide-out animation
    }, 10000); // Adjust this interval to control the duration each logo is displayed

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setAnimationClass('slide-outlg');
    setTimeout(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 4) % logos.length);
      setAnimationClass('slide-inlg');
    }, 1000);
  };

  const handlePrev = () => {
    setAnimationClass('slide-outlg');
    setTimeout(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex - 4 + logos.length) % logos.length);
      setAnimationClass('slide-inlg');
    }, 1000);
  };

  const toggleAnswerVisibility = (index) => {
    setVisibleFAQIndex(visibleFAQIndex === index ? null : index);
  };

  return (
    <div className="mt-4 md:mt-[2.5rem] ">
      <div className=" flex items-center z-20 mt-4 countainer  ">
        <p className=' text-[6.23288px] sm:text-[10px]  font-montserrat italic font-medium xl:text-[15px] text-black ' >Votre succès, notre mission</p>
        <div className=" w-[60%] sm:w-[74%] h-0  border border-black ml-1 xl:w-[85%] "></div>
      </div>
      <div className="text-start mt-4 md:mt-[2.5rem] countainer font-montserrat font-extrabold text-[22.6394px] tracking-[-0.06em] leading-[28px] flex flex-col items-start justify-start  text-black ">
        <p>CERTAINS DE NOS CLIENTS SATISFAITS</p>
      </div>

      <div {...handlers} className="w-[90%] m-auto logo-container mt-4 md:mt-[2.5rem] relative flex items-center justify-start overflow-hidden">
        {logos.slice(currentLogoIndex, currentLogoIndex + 4).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Logo"
            className={`w-[4rem] sm:w-[7rem]  h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain mx-3 sm:mx-24 ${animationClass}`}
          />
        ))}
        <img
          src={left}
          alt="Left"
          className="absolute top-1/2 transform -translate-y-1/2 -left-8 w-6 h-6 md:left-0 md:translate-x-0 md:w-6 md:h-6"
          onClick={handlePrev}
        />
        <img
          src={right}
          alt="Right"
          className="absolute top-1/2 transform -translate-y-1/2 -right-8 w-6 h-6 md:right-0 md:translate-x-0 md:w-6 md:h-6"
          onClick={handleNext}
        />
      </div>


      <div id='FAQ' className="countainer text-center mt-4 md:mt-[2.5rem] ">
        {/* <h1 className='font-montserrat font-extrabold text-[23px] text-[#A51D21] leading-[25px]' >FAQ : Tout savoir sur notre agence</h1> */}
        <div className=" flex items-center  z-20 mt-3 justify-center ">
          <div className=" w-[257px] sm:w-[90%] h-0  border border-black opacity-30 "></div>
        </div>
        <div className=" mt-4 md:mt-[2.5rem] md:mb-[2.5rem] font-montserrat font-extrabold text-[22.6394px] sm:text-[25px] xl:text-[30px] tracking-[-0.06em] leading-[28px] flex flex-col items-start justify-start  text-black text-start ">
          <p><b className=' text-[#A51D21] ' >FAQ :</b> Tout savoir sur notre agence</p>
        </div>
        {faqs.map((faq, index) => (
          <div key={index} className="flex flex-col justify-start items-start mt-7 border-b-2 pb-2">
            <div className="flex  w-full justify-between" onClick={() => toggleAnswerVisibility(index)}>
              <p

                className="font-montserrat font-extrabold text-[12px] xl:text-[16px] text-black mr-2 text-start"
              >
                {faq.question}
              </p>
              <img src={add} className="w-[18px] items-end " alt="" />
            </div>
            <div className={`ansr ${visibleFAQIndex === index ? 'slide-down' : 'slide-up'}`}>
              <p className="font-montserrat font-medium text-[9px] xl:text-[15px] text-black text-start mt-2">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>



    </div>
  );
};

export default Reviews;

