import ActualLink from './ActualLink';
import Slack from "./Assets/Slack.png"
import GitHub from "./Assets/GitHub.png"
import "./Styles/Links.css"
import { Link } from "react-router-dom";


const Links = () => {
    return ( 
        <div className="links">
            <div className="linksButtons">
                <ActualLink site="https://twitter.com/Mubarak_MKay" siteDisplay="Twitter Link"/>
                <ActualLink site="https://training.zuri.team/" siteDisplay="Zuri Team" siteId="btn__zuri" />
                <ActualLink site="http://books.zuri.team" siteDisplay="Read more on design and coding..." siteId="books" siteTitle="Books on design and coding"/>
                <ActualLink site="https://books.zuri.team/python-for-beginners?ref_id=MubarakMK" siteDisplay="Python Books" siteId="books__python"/>
                <ActualLink site="https://background.zuri.team" siteDisplay="Wanna know what happens behind the scenes?" siteId="pitch"/>
                <ActualLink site="https://books.zuri.team/design-rules" siteDisplay="Free design book here!" siteId="book__design"/>   
                <Link to="/contact" className="linkContact"><ActualLink site="/contact" siteDisplay="Contact Me" siteId="contact"/></Link>    
            </div>
            <div className="linksIcons">
                <img src={Slack} alt="Slack" />
                <img src={GitHub} alt="GitHub" />
            </div>
        </div>
     );
}
 
export default Links;