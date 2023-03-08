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
       </h2>  <div className='containerButton1'>
       <button className='button1'>QUERO VENDER MAIS</button></div>
       </div>       
      </div>
      <div className='containerForm'>
    <Form/>
    
      <div className='container2'>
      <h2 className='text2Main' >SE A SUA EMPRESA</h2>
      <div className='container2Text'>
      <h3 className='text2'>Fatura mais de R$30 mil reais</h3>
      <h3 className='text2'>Busca ter previsibilidade nas vendas</h3>
      <h3 className='text2'>Busca receber mais leads qualificados</h3></div>
     
     <button class='button1'>Nos vamos te ajudar</button></div> </div>
      
  </div>
)
}
export default Home 