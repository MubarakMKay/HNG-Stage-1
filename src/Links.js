import Link from './Link';
import Slack from "./Assets/Slack.png"
import GitHub from "./Assets/GitHub.png"
import "./Styles/Links.css"

const Links = () => {
    return ( 
        <div className="links">
            <div className="linksButtons">
                <Link site="https://twitter.com/Mubarak_MKay" siteDisplay="Twitter Link"/>
                <Link site="https://training.zuri.team/" siteDisplay="Zuri Team" siteId="btn__zuri" />
                <Link site="http://books.zuri.team" siteDisplay="Read more on design and coding..." siteId="books" siteTitle="Books on design and coding"/>
                <Link site="https://books.zuri.team/python-for-beginners?ref_id=MubarakMK" siteDisplay="Python Books" siteId="books__python"/>
                <Link site="https://background.zuri.team" siteDisplay="Wanna know what happens behind the scenes?" siteId="pitch"/>
                <Link site="https://books.zuri.team/design-rules" siteDisplay="Free design book here!" siteId="book__design"/>   
            </div>
            <div className="linksIcons">
                <img src={Slack} alt="Slack" />
                <img src={GitHub} alt="GitHub" />
            </div>
        </div>
     );
}
 
export default Links;