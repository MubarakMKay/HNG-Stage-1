import ZuriWeb from "./Assets/ZuriWeb.png"
import ZuriMobile from "./Assets/ZuriMobile.png"
import I4GWeb from "./Assets/I4GWeb.png"
import I4GMobile from "./Assets/I4GMobile.png"

const Footer = () => {
    return ( 
        <div className="footer">
            <img src={ZuriWeb} alt="ZuriWeb" className="ZuriWeb"/>
            <img src={ZuriMobile} alt="ZuriMobile" className="ZuriMobile"/>
            <span>HNG Internship 9 Frontend Task</span>
            <img src={I4GWeb} alt="I4GWeb" className="I4GWeb"/>
            <img src={I4GMobile} alt="I4GMobile" className="I4GMobile"/>
        </div>
     );
}
 
export default Footer;