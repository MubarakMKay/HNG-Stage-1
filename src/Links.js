import Link from './Link';
import Slack from "./Assets/Slack.png"
import GitHub from "./Assets/GitHub.png"

const Links = () => {
    return ( 
        <div className="links">
            <div className="linksButtons">
                <Link site="https://twitter.com/Mubarak_MKay" displaySite="Twitter Link"/>
                <Link site="https://training.zuri.team/" displaySite="Zuri Team" idSite="btn__zuri" />
                <Link site="http://books.zuri.team" displaySite="Zuri Books" idSite="books"/>
                <Link site="https://books.zuri.team/python-for-beginners?ref_id=MubarakMK" displaySite="Python Books" idSite="books__python"/>
                <Link site="https://background.zuri.team" displaySite="Background Check for Coders" idSite="pitch"/>
                <Link site="https://books.zuri.team/design-rules" displaySite="Design Books" idSite="book__design"/>   
            </div>
            <div className="linksIcons">
                <img src={Slack} alt="Slack" />
                <img src={GitHub} alt="GitHub" />
            </div>
        </div>
     );
}
 
export default Links;