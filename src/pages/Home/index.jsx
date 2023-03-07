import '../../pages/Home/styles.scss'
import React,{useState, useEffect} from 'react';
import engrenagem from '../../assets/engrenagem.gif'
import asas from '../../assets/asas.gif'
import trofeu from '../../assets/trofeu.gif'
import imgEquipeG from '../../assets/imgEquipeG.png'
import imgEquipeR from '../../assets/imgEquipeR.png'
import imgEquipeJ from '../../assets/imgEquipeJ.png'
import imgEquipeE from '../../assets/imgEquipeE.png'
import imgEquipeM from '../../assets/imgEquipeM.png'

function Home() {
return(
  <body>
  <div className='container'>
    <div className='imagem'>
     <h2 className='textoImg'>
      Quer ter resultados acima da média? Junte-se com quem está acima da média!
       </h2>
    <h1 className='textoImgCaps'>
    Aumente em até 6x o seu ROI!
    </h1>
    <h2 className='textoImg'>
    Descubra agora mesmo qual gargalo na sua empresa te impede de ter resultados como esses!
       </h2>         
       <div className='divButton1'><button className='button2'>Quero faturar mais</button></div>                          
    </div>

    <h2 className='textGold'>
    Resolvemos problemas reais da sua empresa.
    </h2>
    <h1 className='textSecond'>O simples que funciona!</h1>
    <h4 className='textSecond'>Somos uma agência full service, o básico de toda agência, claro que fazemos…</h4>
    <h3 className='textSecond'>Mas falando sério, de empresário para empresário(a), vamos falar do que importa! $$$</h3>
    <div className='divImg' >

      <div clasclassNamesName='engrenagem'>    
      <img src={engrenagem} alt="loading..."/> 
      <div/>
      <div className='divSecond'>
      <h3>Identificamos os ”Gargalos”</h3><br/>
      <h4 className='textSecond'>Sua empresa está enfrentando<br/>
      dificuldades para identificar<br/>
      os gargalos no processo de venda?</h4>
      <br></br>
      <br></br>
      <h4 className='textSecond'>Isso significa que você pode estar<br/>
      perdendo vendas e oportunidades,<br/> pois não sabe exatamente onde <br/>melhorar seus esforços.</h4>
      <br/>
      <br/>
      <h4 className='textSecond'>O nossos serviços são a solução <br/>
      ideal para este problema. Vamos<br/>
       auxiliá-lo a identificar rapidamente<br/>
       os gargalos em seus processos de<br/>
       venda, para que possa tomar as<br/>
       medidas corretivas e termos mais</h4>
       </div>
      </div>

      <div className='asas'>
      <img src={asas} alt="loading..."/><div/>
      <div className='divSecond'>
      <h3>Recuperamos o dinheiro na mesa</h3><br/>
      <h4 className='textSecond'>Muitas empresas têm dificuldade<br/> em fidelizar seus clientes<br/> e acabam deixando<br/> muito dinheiro na mesa
      <br/>dificuldades para identificar<br/>
      os gargalos no processo de venda?</h4>
      <br></br>
      <br></br>
      <h4 className='textSecond'>Isso significa que você pode estar<br/>
      perdendo vendas e oportunidades,<br/> pois não sabe exatamente onde <br/>melhorar seus esforços.</h4>
      <br/>
      <br/>
      <h4 className='textSecond'>O nossos serviços são a solução <br/>
      ideal para este problema. Vamos<br/>
       auxiliá-lo a identificar rapidamente<br/>
       os gargalos em seus processos de<br/>
       venda, para que possa tomar as<br/>
       medidas corretivas e termos mais</h4>
       </div>
      <div className='divButton'> <button class="button2" >Faz sentido, quero faturar</button>
      </div></div>

      <div className='trofeu'>
      <img src={trofeu} alt="loading..."/>
        <div/>
      <div className='divSecond'>  
        <h3 >Identificamos os ”Gargalos”</h3><br/>
      <h4 className='textSecond'>Sua empresa está enfrentando<br/>
      dificuldades para identificar<br/>
      os gargalos no processo de venda?</h4>
      <br></br>
      <br></br>
      <h4 className='textSecond'>Isso significa que você pode estar<br/>
      perdendo vendas e oportunidades,<br/> pois não sabe exatamente onde <br/>melhorar seus esforços.</h4>
      <br/>
      <br/>
      <h4 className='textSecond'>O nossos serviços são a solução <br/>
      ideal para este problema. Vamos<br/>
       auxiliá-lo a identificar rapidamente<br/>
       os gargalos em seus processos de<br/>
       venda, para que possa tomar as<br/>
       medidas corretivas e termos mais</h4>
        </div>
     </div>
      </div>   

      <div className='animated'> 
      <div className='textGold1'>
      <h2 className='textGold'>O parceiro que você sempre quis e nunca achou!</h2><br/>
      
      <div className='divEscrita4'>
        <h1 className='escritaFour' >Acelerando Negócios.</h1>
        <h4 className='escritaFour'>Com nossa base sólida de cases de sucessos e especializados em Fidelização de Clientes e Growth Marketing, 
        podemos te ajudar a alavancar seus negócios gerando um fluxo contínuo e crescente de faturamento no seu caixa!
        Aumente o faturamento da sua empresa com as estratégias certas! Marketing Raiz + Digital.
        Nossas soluções incluem tudo o que é necessário para ter um excelente retorno sobre o investimento realizado por você 😉</h4>
        </div>
        <div className='divButton4'>
      <button className='button2'>Quero acelerar</button>
      </div>
      </div>
      </div>

      
      <div className="containerEquipe">
      <h3 className='textTime'>Nosso Time</h3>
        <h2 className='textTime'>Inspirando sorrisos </h2>
        <div className='carousel'>
        
  <div className="card">
    <h3 className="title">MATHEUS ROCHA</h3>
    <h4 className='title'>Diretor De Operações e Líder do time</h4>
    <div className="bar">
      <div className="emptybar"></div>
      <div claclassNamess="filledbar"></div>
    </div>
    <div className="imgEquipeR">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle className="stroke" />
    </svg>
    </div>
  </div>
  <div className="card">
    <h3 className="title"> GERSON GONÇALVES</h3>
    <h4 className="title">CEO – Head Comercial</h4>
    <div className="bar">
      <div className="emptybar"></div>
      <div className="filledbar"></div>
    </div>
    <div className="imgEquipeG">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle className="stroke" />
    </svg>
    </div>
  </div>

  <div className="card">
  <h3 className='title'>GIAN GABOARDI</h3>
  <h4 className="title">Diretor Audio Visual</h4>
    <div className="bar">
      <div className="emptybar"></div>
      <div className="filledbar"></div>
    </div>
    <div className="imgEquipeJ">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle className="stroke" />
    </svg>
    </div>
  </div>
  <div className="card">
    <h3 className='title'>MARIA EDUARDA</h3>
    <h4 className="title">Head Social Midia e Designer</h4>
    <div className="bar">
      <div className="emptybar"></div>
      <div className="filledbar"></div>
    </div>
    <div className="imgEquipeE">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    </svg>
    </div>
  </div>


  <div className="card">
    <h3 className='title'>MARCOS JOSÉ</h3>
    <h4 className="title">Gestor de trafego mirin</h4>
    <div className="bar">
      <div className="emptybar"></div>
      <div className="filledbar"></div>
    </div>
    <div className="imgEquipeM">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    </svg>
    </div>
  </div>
  </div>
  
</div>

<div className="slider">
<div className='containerPatrocionio'>
    <h3 className='titlePatrocinio'>Algumas empresas que já trabalhamos</h3>
  </div>
	<div className="slide-track">
		<div className="slide">
			<img src={imgEquipeG} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src={imgEquipeR} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src={imgEquipeJ} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src={imgEquipeE} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src={imgEquipeM} height="100" width="250" alt="" />
		</div>
	
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />

		</div>
	</div>
  </div>
  </div> 

  
  <div >
  </div>
  <div className='divPortifolio'>
          <h3 className='textPortifolio1'>Nossos Projetos</h3>
          <h4 className='textPortifolio2'>Portifolio</h4>
          <div className='divButton5'>
       
    <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Falar com especialista
    </a>
          </div>
              
          </div>
          <div className='divTrabalhos'>
            <div className='workTransition'>
            </div>
          </div>
      <div className='divsText5'>
        <h3 className='text5'>Ross é confiável?</h3>
        <h2 className='text5'>O que nossos clientes estão falando</h2>
      </div>

      <div className='divsText6'>
        <div className='div1'>
          <h3 className='text6'>” Me surpreendi ”</h3>
          <h4 className='text6'>Com certeza a melhor agência <br/>que passou pelos meus negócios, <br/>as últimas que contrete
paguei <br/> mais caro e não cobriu meus custos…<br/>Hoje em dia só anúncio com o Gerson e o<br/>
Matheus porque as estratégias que<br/> executamos nos diferenciam <br/> completamente da concorrência. Parabéns pessoal!</h4>
          <h3 className='text6Name'>Juliani Pavelski</h3>
          <h4 className='text6Name'>Dona – Juli Estética Facial</h4>
        </div>
        <div className='div1'>
          <h3 className='text6'>” Agora sim tenho resultados “</h3>
          <h4 className='text6'>Não acreditava muito no início <br/>no trabalho de base, mas me<br/> surprendi com os resultados!<br/>
Vendi muito mais do que com a <br/>captação de leads convencionais, <br/> e olha que já passei por muita agência… <br/>
Gratidão a toda equipe<br/> por ter mudado completamente minha<br/> empresa para melhor!</h4>
          <h3 className='text6Name'>João Rafael</h3>
          <h4 className='text6Name'>Dono – Artcult e Barzim</h4>
        </div>
      </div>
  </body>
)
}
export default Home 