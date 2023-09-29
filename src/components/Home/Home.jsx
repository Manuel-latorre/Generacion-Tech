import AboutUs from "../AboutUs/AboutUs";
import Servicios from "../Servicios/Servicios";
import Faqs from '../Faqs/Faqs';
import Equipo from "../Equipo/Equipo";
import Contacto from "../Contacto/Contacto";
import ContactoFaqs from '../Faqs/ContactoFaqs'
import { Slide } from "react-awesome-reveal";
const Home= ()=>{
    return(
        <>
            <AboutUs/>
            <Slide direction="right">
            <Servicios/>
            </Slide>
            <ContactoFaqs/>
            <Faqs/>
            <Equipo/>
            <Contacto/>
        </>
    )
}

export default Home;