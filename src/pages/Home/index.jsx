import '../../pages/Home/styles.scss'
import React from 'react';
import Form from '../../components/Forms/forms.jsx'
import star from'../../assets/star.png'
import prancheta from'../../assets/prancheta.png'
import complet from'../../assets/complet.png'

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
      {/*formulario*/}
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
     
     {/*container que contem a parte da equipe da empresa*/}
      <div className='container3'>
          <h2 className='text2Main'>O QUE A AGENCIA ROSS FAZ?</h2>
          <h4 className='text2'>Somos um time de especialistas e fazemos dezenas de negócios venderem mais através de campanhas</h4>
          <h4 className='text2'>nas Plataformas: Facebook, Instagram, Google, Youtube, LinkedIn, Tik Tok dentre outras..</h4> 
          <div className="containerEquipe">
          <div className="card">
  <h4 className='textTime'>Diretor De Operações e Líder do time</h4>
  <h3 className='textTime'>MATHEUS ROCHA</h3>
  <div className="imgEquipeR">
  </div>
</div>
<div className="card">
<h4 className='textTime'>CEO – Head Comercial</h4>
  <h3 className='textTime'>GERSON GONÇALVES</h3>
  <div className="imgEquipeG">
</div></div>

<div className="card">
<h4 className='textTime'>Diretor Audio Visual</h4>
  <h3 className='textTime'>GIAN GABOARDI</h3>
  <div className="imgEquipeJ">
  </div>
</div>

<div className="card">
<h4 className='textTime'>Head Social Midia e Designer</h4>
  <h3 className='textTime'>MARIA EDUARDA</h3>
  <div className="imgEquipeE">
  </div>
</div>
<div className="card">
<h4 className='textTime'>Gestor de tráfego mirin</h4>
  <h3 className='textTime'>MARCOS JOSÉ</h3>
  <div className="imgEquipeM">
  </div>
</div>
    </div>
    {/*Carrosel banner*/ }
  <div class="slider">
	<div class="slide-track">
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"  height="100" width="250" alt="" />
		</div>
	</div>
</div>
        </div>
  <div className='container4'>
    <h2 className='text4'>Como funciona?</h2></div>
    <div className='container5'>
    <div className='spaceContainer5'>
      <img src={star} style={{height:40}}/>    
    <h3 className='text5'>ENTENDEMOS O OBJETIVO<br/>DO SEU NEGÓCIO</h3>  
    </div>
      
    <div className='spaceContainer5'> 
    <img src={prancheta} style={{height:40}}/>
    <h3 className='text5'>CRIAMOS UMA ESTRATÉGIA <br/>PERSONALIZADA</h3>   
    </div>
     
    <div className='spaceContainer5'> 
    <img src={complet} style={{height:40}}/> 
    <h3 className='text5'>ENTRAMOS EM CAMPO PARA<br/> EXECUTAR</h3>   
    </div>
  </div>

    <dix className='container6'>
      <h2 className='text6'>TEMOS UMA ESTRUTURA DE VENDAS<br/>PODEROSA CAPAZ DE FAZER O SEU NEGÓCIO<br/>DECOLAR ATRAVÉS DA INTERNET</h2>
      </dix>  

      <div className='container7'>
      <div className='spaceContainer7'>
      <img src={star} style={{height:40}}/>    
    <h3 className='text5'>ESTRATÉGIA</h3>  
    <h3 className='text5'> Plano estratégico<br/>&nbsp;&nbsp;&nbsp;Personalizado</h3> 
    </div>
    
    <div className='spaceContainer7'> 
    <img src={prancheta} style={{height:40}}/>
    <h3 className='text5'>FACEBOOK ADS</h3>   
    <h3 className='text7'>Tráfego Pago no Facebook ADS</h3>
    </div>
     
    <div className='spaceContainer7'> 
    <img src={complet} style={{height:40}}/> 
    <h3 className='text5'>GOOGLE ADS</h3>
    <h3 className='text7'>Tráfego Pago no Google ADS</h3>
     </div>
   
    <div className='spaceContainer7'> 
    <img src={complet} style={{height:40}}/> 
    <h3 className='text5'>COPYWRITING</h3>
    <h3 className='text7'>Construímos a comunicação certa para você vender mais</h3>
     </div>
        </div> 
        <div className='container8'>
          <h3 className='text8'> Hoje você pode receber nossos serviços completos de marketing</h3>
          <h2 className='text8'>PELO PREÇO DE UM FUNCIONÁRIO!</h2>
          <button className='button2'>ENTRAR EM CONTATO AGORA</button>
        </div>     
  </div>
)
}
export default Home 