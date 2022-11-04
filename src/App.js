import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Home from './Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact name="mubaraq"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
