import './Styles/App.css';
import Profile from './Profile';
import Links from './Links';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
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

export default App;
