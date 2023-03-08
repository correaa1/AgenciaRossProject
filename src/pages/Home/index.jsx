import '../../pages/Home/styles.scss'
import React from 'react';
import Form from '../../components/Forms/forms.jsx'

function Home() {
return(

  <div id='container'>
      <div class='imagem'>
    
    <div className='containerTextInitial'>
        <h2 className='textoImgCaps'>
    CONHEÇA O MECANISMO QUE <br/> FARÁ O SEU NEGÓCIO VENDER<br/> MAIS ATRAVÉS DA INTERNET.
    </h2>
      <h2 className='textoImg'>
      Entre em contato e descubra as estratégias <br/>exclusivas que nós utilizamos para fazer dezenas <br/> de negócios escalarem suas vendas através do <br/>digital.
       </h2>  
       <button className='button1'>QUERO VENDER MAIS</button>
       </div>       
      </div>
      <div className='containerForm'>
    <Form/>
    </div>
      <div className="containerEquipe">
        <div className='containerEquipeText'>
      <h3 className='textTime'>Nosso Time</h3>
        <h2 className='textTime'>Inspirando sorrisos </h2>
        </div>
  <div className="card">
  
    <div className="imgEquipeR">
    </div>
  </div>
  <div className="card">
    
    <div className="imgEquipeG">
  </div></div>

  <div className="card">
  
    <div className="imgEquipeJ">
    </div>
  </div>

  <div className="card">
   
    <div className="imgEquipeE">
    </div>
  </div>
  <div className="card">
    <div className="imgEquipeM">
    </div>
  </div>
  </div> 
  </div>
)
}
export default Home 