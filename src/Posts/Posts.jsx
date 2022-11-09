import './posts.css'
import pool from '../images/pool.webp'
import room from '../images/room-verde/4.webp'



function Posts() {
  return (
    <><div>
                  
            
          <img className='postImg' src={pool} alt="alt">      

           
          </img>
          <div className='centered'>Teste</div>
               
       
        
    </div>

<div>
                  
            
<img className='postImg' src={room} alt="alt"></img>
     


</div>
</>
  )
}

export default Posts
