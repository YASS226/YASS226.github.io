import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Nav = () => {
  const [isActive, setActive] = useState(false);
  const [isScrolled, setScrolled] = useState(true);
  const location = useLocation();

  const handleClickOnNav = () => {
    setActive(!isActive);
    
  };

  const handleNavLinkClick = () => {
    setActive(false);
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      setScrolled(false);
    }
    const handleScroll = () => {
      if (location.pathname === "/" && window.scrollY > 0) {
        setScrolled(false);
      } else {
        setScrolled(true);
        if (location.pathname !== "/") {
          setScrolled(false);
        }
      }
      
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return (
    <div className="flex flex-col">
      <div className={`w-[100%] h-[68px] drop-shadow-lg fixed flex justify-between px-2 z-40  transition duration-600 ease-in-out ${!isScrolled ? 'bg-white text-[#000] border-black xl:h-[70px]' : 'navBG text-[#fff] border-white xl:h-[90px]'}`}>
        <div className="flex pl-5">
          {/* <img className='w-[15.56px] h-[23px] xl:w-[41px] xl:h-[57px] mr-[10px] mt-[15px] xl:mt-0' src={logo} alt="" /> */}
          <a href="/" style={{ textDecoration: 'none' }} className='items-center h-full'>
            <p className='font-montserrat font-bold text-[20px] xl:text-[33px]  items-center justify-center m-auto pt-3 transition duration-600 ease-in-out '>AYL AGENCY</p>
          </a>
        </div>
        <input
          className='xl:hidden'
          type="checkbox"
          id="checkbox"
          checked={isActive}
          onChange={handleClickOnNav}
        />
        <label htmlFor="checkbox" className="toggle">
          <div className={`bars xl:hidden transition duration-600 ease-in-out ${!isScrolled ? 'bg-[#A51D21] ' : ' bg-white '} `} id="bar1"></div>
          <div className={`bars xl:hidden transition duration-600 ease-in-out ${!isScrolled ? 'bg-[#A51D21] ' : ' bg-white '} `} id="bar2"></div>
          <div className={`bars xl:hidden transition duration-600 ease-in-out ${!isScrolled ? 'bg-[#A51D21] ' : ' bg-white '} `} id="bar3"></div>
        </label>
        <div className="hidden xl:flex xl:items-center xl:justify-between xl:w-[75%] xl:mr-6">
          <div className="flex justify-center border-l-2  h-[55%] items-center pl-3">
            <a id='NavContact' href="/#Info" className='mx-2  font-montserrat font-medium transition duration-600 ease-in-out  '>À propos de nous</a>
            <a id='NavAbout' href="/#Services" className='mx-2  font-montserrat font-medium transition duration-600 ease-in-out  '>Services</a>
            <a id='NavService' href="/#Work" className='mx-2  font-montserrat font-medium transition duration-600 ease-in-out'>Nos Realisations</a>
            <a id='NavService' href="/#FAQ" className='mx-2  font-montserrat font-medium transition duration-600 ease-in-out'>FAQ</a>
            <a id='Navteritory' href="/#Contact" className='mx-2  font-montserrat font-medium transition duration-600 ease-in-out'>Contactez-nous</a>
          </div>
          <div className="flex justify-center items-center">
            <p className='font-montserrat font-medium mr-4'>Travaillons ensemble</p>
            <div className="cursor-pointer w-[120px] h-[30px] rounded border-[2px]  flex justify-center items-center hover:bg-[#A51D21] hover:text-white transition duration-600 ease-in-out  p-4">
              <a href="/#Contact" className='font-montserrat font-medium'>CONTACT</a>
            </div>
          </div>
        </div>
      </div>

      <div className={`sidenav w-full h-[260px] bg-white fixed z-30 top-[95px] transition-all duration-700 ease-in-out transform ${isActive ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="flex flex-col justify-center items-center h-full">
          <a href="/#Info" className="hover:bg-[#A51D21] bg-white hover:text-white font-montserrat font-medium text-[#000] border-b w-full text-center p-5 block transition duration-600 ease-in-out" onClick={handleNavLinkClick}>À propos de nous</a>
          <a id='NavContact' href="/#Services" className="hover:bg-[#A51D21] hover:text-white font-montserrat font-medium text-[#000] border-b w-full text-center p-5 block transition duration-600 ease-in-out" onClick={handleNavLinkClick}>Services</a>
          <a id='NavContact' href="/#Work" className="hover:bg-[#A51D21] hover:text-white font-montserrat font-medium text-[#000] border-b w-full text-center p-5 block transition duration-600 ease-in-out" onClick={handleNavLinkClick}>Nos Realisations</a>
          <a id='NavContact' href="/#FAQ" className="hover:bg-[#A51D21] hover:text-white font-montserrat font-medium text-[#000] border-b w-full text-center p-5 block transition duration-600 ease-in-out" onClick={handleNavLinkClick}>FAQ</a>
          <a id='Navteritory' href="/#Contact" className="hover:bg-[#A51D21] hover:text-white font-montserrat bg-white font-medium text-[#000] border-b w-full text-center p-5 block transition duration-600 ease-in-out" onClick={handleNavLinkClick}>Contactez-nous</a>
        </div>
      </div>
      <div className={`w-full h-full bg-black bg-opacity-30 fixed z-20 top-0 ${isActive ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`} onClick={handleNavLinkClick}></div>
    </div>
  );
}

export default Nav;
