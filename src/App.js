

import Quartos from './Pages/Quartos/Quartos';
import {Routes, Route} from "react-router-dom";
import Navbar from "./NavBar/Navbar"
import Home2 from './Home2/Home2';


function App() {
  return (
       <> <Navbar/>
            <Routes>
            <Route path="/" element={<Home2/>}/>
            <Route path="/quartos" element ={ <Quartos/>}/>
           
             
          </Routes>
          </>
  )
}

export default App;
