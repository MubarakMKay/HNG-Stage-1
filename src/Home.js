import './Styles/Home.css';
import Profile from './Profile';
import Links from './Links';
import Footer from './Footer';

const Home = () => {
    return ( 
        <div className="home">
            <div className="appMain">
                <Profile />
                <Links />
            </div>
            <div className="appFooter">
                <Footer />
            </div>
        </div>
     );
}
 
export default Home;