import './Quartos.css'
import pool from '../../images/pool.webp'
import Slider from '../../Slider/Slider'
import Slider1 from '../../Slider/Slider-Verde'
import Slider2 from '../../Slider/Slider-Prive'


function Quartos() {

 
  return (
    <>
    <div>
      <div className="reservaTitles">
         Quartos<br></br>
          
        </div>
      <img className='reservaImg' src={pool} alt=''/>
    </div>
    
   


    <div className='reservaQuartosBlue'> Quarto Arara Azul</div>
    <Slider/> 
    <div className='descriptionBlue'>12m² em alvenaria<br></br>
piso em porcelanato<br></br>
banheiro<br></br>
ventilador de teto e aquecedor a óleo<br></br>
frigobar<br></br>
mesa<br></br>
duas janelas bem ventiladas<br></br>
vista para o jardim<br></br>
varanda social<br></br>
inclui café para 2</div>  
<hr className='blue'></hr>
    <div className='reservaQuartosVerde'> Quarto Arara Verde</div>
    <Slider1/>
    <div className='descriptionGreen'>
    15m² em madeiramento rústico<br></br>
assoalho de madeira<br></br>
banheiro<br></br>
ventilador de teto e aquecedor a óleo<br></br>
frigobar<br></br>
mesa<br></br>
pequena biblioteca<br></br>
duas janelas grandes maxiar<br></br>
vista para a mata<br></br>
varanda social<br></br>
inclui café para 2<br></br>
    </div>

    <hr className='green'></hr>
    <div className='reservaQuartosYellow'> Quarto Arara Privê</div>
    <Slider2/>
    <div className='descriptionYellow'>
    50m² em níveis <br></br>
construção mista inédita (pirâmide)<br></br>
piso em ardósia, madeira e porcelana<br></br>
cozinha com equipamento básico<br></br>
banheiro com chuveiro a gás<br></br>
lavanderia<br></br>
quarto casal com varanda panorâmica privativa<br></br>
quarto acompanhante p 2 pessoas<br></br>
varanda social relaxante<br></br>
excelente iluminação e ventilção<br></br><br></br>
Este quarto é exclusivo pela privacidade e comodidade, mas frequentemente recebe visitas inesperadas de adoráveis macaquinhos na varanda.<br></br>
    </div>

    
    </>
  )
}

export default Quartos
