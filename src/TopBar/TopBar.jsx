import './topbar.css'
import { Link } from 'react-router-dom'
function TopBar() {
  return (
    <div className='top'>

<div className="topCenter">
        <ul className='topList'>
            <Link to="/" className='topListItem'>Home</Link>
            <Link to="/espaco" className='topListItem'>O Espaço</Link>
            <Link to="/reservas" className='topListItem'>Reservas</Link>
            <Link to="/contato" className='topListItem'>Contato</Link>
           
        </ul>

      </div>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-airbnb"></i>
      </div>
     
          </div>
  )
}

export default TopBar
