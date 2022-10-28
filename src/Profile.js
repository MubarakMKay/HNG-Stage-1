import ProfileIcon from './Assets/Profile.jpg'
import ShareWeb from './Assets/ShareWeb.png'
import ShareMobile from './Assets/ShareMobile.png'
import "./Styles/Profile.css"

const Profile = () => {
    return ( 
        <div className="profile">
            <div className="profileOriginal">
                <img src={ProfileIcon} alt="Profile Icon" id="profile__img" />
                <h1 id="twitter">Mubarak_MKay</h1>
                <h1 id="slack">MubaraqMK</h1>
            </div>
            <img src={ShareWeb} alt="ShareWeb" id="shareWeb" />
            <img src={ShareMobile} alt="ShareMobile" id="shareMobile" />
        </div>
     );
}
 
export default Profile;