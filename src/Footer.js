import ZuriWeb from "./Assets/ZuriWeb.png"
import ZuriMobile from "./Assets/ZuriMobile.png"
import I4GWeb from "./Assets/I4GWeb.png"
import I4GMobile from "./Assets/I4GMobile.png"
import "./Styles/Footer.css"

const Footer = () => {
    return ( 
        <div className="footer">
            <img src={ZuriWeb} alt="ZuriWeb" className="zuriWeb footerWeb"/>
            <img src={ZuriMobile} alt="ZuriMobile" className="zuriMobile footerMobile"/>
            <span>HNG Internship 9 Frontend Task</span>
            <img src={I4GWeb} alt="I4GWeb" className="i4GWeb footerWeb"/>
            <img src={I4GMobile} alt="I4GMobile" className="i4GMobile footerMobile"/>
        </div>
     );
}
 
export default Footer;