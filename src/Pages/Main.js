import Reviews from "./Sections/Reviews";
import Dashboard from "./Sections/Dashboard";
import Info from "./Sections/Info";
import Services from "./Sections/Services";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";

const Main = () => {
    return ( 
        <div className="">
            <Dashboard/>
            <Info/>
            <Services/>
            <Reviews/>
            <Contact/>
            <Footer/>
        </div>
     );
}
 
export default Main;