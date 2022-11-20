


import {Routes, Route} from "react-router-dom";
import Navbar from "./NavBar/Navbar"
import Home2 from './Home2/Home2';
import Piramide from "./Pages/Quartos/Piramide";
import Beija from "./Pages/Quartos/BeijaFlor";
import Contato from "./Pages/Contato";




function App() {
  return (
       <> <Navbar/>
            <Routes>
            <Route path="/" element={<Home2/>}/>
            <Route path="/piramide" element ={ <Piramide/>}/>
            <Route path="/beija-flor" element ={ <Beija/>}/>
            <Route path="/contato" element ={ <Contato/>}/>
           
             
          </Routes>
          </>
  )
}

export default App;
