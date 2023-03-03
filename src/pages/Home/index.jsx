import '../Home/styles.css'
import React,{useState, useEffect} from 'react';
import gif from '../../assets/engrenagem.gif'
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
    <button className='buttonInitial'>Quero faturar mais</button>
       </h2>                                   
    </div>

    <h2 class='textSecond'>
    Resolvemos problemas reais da sua empresa.
    </h2>
    <h1 class='textSecond'>O simples que funciona!</h1>
    <h4 class='textSecond'>Somos uma agência full service, o básico de toda agência, claro que fazemos…</h4>
    <h3 class='textSecond'>Mas falando sério, de empresário para empresário(a), vamos falar do que importa! $$$</h3>
    <div className='divImg' >   
      <img src={gif} alt="loading..."/>
      <img src={gif} alt="loading..."/>
      <img src={gif} alt="loading..."/>
      <p>teste</p>
      </div>
    
    

  </div>
)
}
export default Home 