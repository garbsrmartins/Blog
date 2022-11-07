import TopBar from "./TopBar/TopBar";
import Home from './Pages/Home/Home';
import Reserva from './Pages/Reserva/Reserva'
import {Routes, Route} from "react-router-dom";

function App() {
  return (
       <> <TopBar/>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/reservas" element ={ <Reserva/>}/>
             
          </Routes>
          </>
  )
}

export default App;
