
import Home from './Pages/Home/Home';
import Reserva from './Pages/Reserva/Reserva'
import {Routes, Route} from "react-router-dom";
import Navbar from "./NavBar/Navbar"

function App() {
  return (
       <> <Navbar/>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/reserva" element ={ <Reserva/>}/>
            <Route path="/espaco" element ={ <Home/>}/>
             
          </Routes>
          </>
  )
}

export default App;
