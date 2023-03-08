import '../../pages/Home/styles.scss'
import React from 'react';
import Form from '../../components/Forms/forms.jsx'
import img from'../../assets/img3.png'
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
       </div>  </div> 
        <div className='containerButton1'>
       
       </div>
      
      <div className='containerForm'>
    <Form/>
    </div>
      <div className='container2'>
      <h2 className='text2Main' >SE A SUA EMPRESA</h2>
      <div className='container2Text'>
      <h3 className='text2'>Fatura mais de R$30 mil reais</h3>
      <h3 className='text2'>Busca ter previsibilidade nas vendas</h3>
      <h3 className='text2'>Busca receber mais leads qualificados</h3></div>
     <button class='button1'>Nos vamos te ajudar</button></div> 
      <div className='container3'>
          <h2 className='text2Main'>O QUE A AGENCIA ROSS FAZ?</h2>
          <h4 className='text2'>Somos um time de especialistas e fazemos dezenas de negócios venderem mais através de campanhas</h4>
          <h4 className='text2'>nas Plataformas: Facebook, Instagram, Google, Youtube, LinkedIn, Tik Tok dentre outras..</h4> 
          <div className="containerEquipe">
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
        
  
      
  </div>
)
}
export default Home 