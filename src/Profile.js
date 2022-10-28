import Mubaraq from './Assets/Mubaraq.jpg'
import "./Styles/Profile.css"

const Profile = () => {
    return ( 
        <div className="profile">
            <img src={Mubaraq} alt="Mubaraq" id="profile__img" />
            <h1 id="twitter">Mubarak_MKay</h1>
            <h1 id="slack">MubaraqMK</h1>
        </div>
     );
}
 
export default Profile;