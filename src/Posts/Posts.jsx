import './posts.css'
import pool from '../images/pool.webp'



function Posts() {
  return (
    <div>
                  
            
            <p className='title'>Conheça nossas instalações</p>
            <a className='postButton' href="/espaço"> Clique aqui </a>
          <img className='postImg' src={pool} alt="alt"></img>
          
         
       
        
    </div>
  )
}

export default Posts
