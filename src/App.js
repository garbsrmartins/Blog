
import Home from './Pages/Home/Home';
import Quartos from './Pages/Quartos/Quartos';
import {Routes, Route} from "react-router-dom";
import Navbar from "./NavBar/Navbar"

function App() {
  return (
       <> <Navbar/>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/quartos" element ={ <Quartos/>}/>
            <Route path="/espaco" element ={ <Home/>}/>
             
          </Routes>
          </>
  )
}

export default App;
