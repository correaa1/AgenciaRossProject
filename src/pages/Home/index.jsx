import '../Home/styles.css'
import React,{useState, useEffect} from 'react';
import engrenagem from '../../assets/engrenagem.gif'
import asas from '../../assets/asas.gif'
import trofeu from '../../assets/trofeu.gif'
import img3 from '../../assets/img3.png'
function Home() {
return(
  <div className='container'>
    <div className='imagem'>
     <h2 class='textoImg'>
      Quer ter resultados acima da média? Junte-se com quem está acima da média!
       </h2>
    <h1 class='textoImgCaps'>
    Aumente em até 6x o seu ROI!
    </h1>
    <h2 class='textoImg'>
    Descubra agora mesmo qual gargalo na sua empresa te impede de ter resultados como esses!

       </h2>         
       <div className='divButton1'><button className='buttonInitial'>Quero faturar mais</button></div>                          
    </div>

    <h2 class='textGold'>
    Resolvemos problemas reais da sua empresa.
    </h2>
    <h1 class='textSecond'>O simples que funciona!</h1>
    <h4 class='textSecond'>Somos uma agência full service, o básico de toda agência, claro que fazemos…</h4>
    <h3 class='textSecond'>Mas falando sério, de empresário para empresário(a), vamos falar do que importa! $$$</h3>
    <div className='divImg' >

      <div className='engrenagem'>    
      <img src={engrenagem} alt="loading..."/> 
      <div/>
      <div class='divSecond'>
      <h3>Identificamos os ”Gargalos”</h3><br/>
      <h4 class='textSecond'>Sua empresa está enfrentando<br/>
      dificuldades para identificar<br/>
      os gargalos no processo de venda?</h4>
      <br></br>
      <br></br>
      <h4 class='textSecond'>Isso significa que você pode estar<br/>
      perdendo vendas e oportunidades,<br/> pois não sabe exatamente onde <br/>melhorar seus esforços.</h4>
      <br/>
      <br/>
      <h4 class='textSecond'>O nossos serviços são a solução <br/>
      ideal para este problema. Vamos<br/>
       auxiliá-lo a identificar rapidamente<br/>
       os gargalos em seus processos de<br/>
       venda, para que possa tomar as<br/>
       medidas corretivas e termos mais</h4>
       </div>
      </div>

      <div className='asas'>
      <img src={asas} alt="loading..."/><div/>
      <div class='divSecond'>
      <h3>Recuperamos o dinheiro na mesa</h3><br/>
      <h4 class='textSecond'>Muitas empresas têm dificuldade<br/> em fidelizar seus clientes<br/> e acabam deixando<br/> muito dinheiro na mesa
      <br/>dificuldades para identificar<br/>
      os gargalos no processo de venda?</h4>
      <br></br>
      <br></br>
      <h4 class='textSecond'>Isso significa que você pode estar<br/>
      perdendo vendas e oportunidades,<br/> pois não sabe exatamente onde <br/>melhorar seus esforços.</h4>
      <br/>
      <br/>
      <h4 class='textSecond'>O nossos serviços são a solução <br/>
      ideal para este problema. Vamos<br/>
       auxiliá-lo a identificar rapidamente<br/>
       os gargalos em seus processos de<br/>
       venda, para que possa tomar as<br/>
       medidas corretivas e termos mais</h4>
       </div>
      <div class='divButton'> <button class="button2" >Faz sentido, quero faturar</button>
      </div></div>

      <div className='trofeu'>
      <img src={trofeu} alt="loading..."/>
        <div/>
      <div class='divSecond'>  
        <h3 >Identificamos os ”Gargalos”</h3><br/>
      <h4 class='textSecond'>Sua empresa está enfrentando<br/>
      dificuldades para identificar<br/>
      os gargalos no processo de venda?</h4>
      <br></br>
      <br></br>
      <h4 class='textSecond'>Isso significa que você pode estar<br/>
      perdendo vendas e oportunidades,<br/> pois não sabe exatamente onde <br/>melhorar seus esforços.</h4>
      <br/>
      <br/>
      <h4 class='textSecond'>O nossos serviços são a solução <br/>
      ideal para este problema. Vamos<br/>
       auxiliá-lo a identificar rapidamente<br/>
       os gargalos em seus processos de<br/>
       venda, para que possa tomar as<br/>
       medidas corretivas e termos mais</h4>
        </div>
     </div>
      </div>   
      <div class='divImg3'>
        <img className='img3' src={img3} />
      </div>
  </div>
)
}
export default Home 