import '../../pages/Home/styles.scss'
import React from 'react';
import Form from '../../components/Forms/forms.jsx'

function Home() {
return(

  <div id='container'>
      <div class='imagem'>
      <h2 className='textoImg'>
      Quer ter resultados acima da média? Junte-se com quem está acima da média!
       </h2>
    <h1 className='textoImgCaps'>
    Aumente em até 6x o seu ROI!
    </h1>
    <h3 className='textoImg'>
    Descubra agora mesmo qual gargalo na sua empresa te impede de ter resultados como esses!
       </h3>         
      </div>
      <div className='containerForm'>
    <Form/>
    </div>
      <div className="containerEquipe">
      <h3 className='textTime'>Nosso Time</h3>
        <h2 className='textTime'>Inspirando sorrisos </h2>
       
  <div className="card">
    <h3 className="title">MATHEUS ROCHA</h3>
    <h4 className='title'>Diretor De Operações e Líder do time</h4>
    <div className="imgEquipeR">
    </div>
  </div>
  <div className="card">
    <h3 className="title"> GERSON GONÇALVES</h3>
    <h4 className="title">CEO – Head Comercial</h4>
    <div className="imgEquipeG">
  </div></div>

  <div className="card">
  <h3 className='title'>GIAN GABOARDI</h3>
  <h4 className="title">Diretor Audio Visual</h4>
    <div className="imgEquipeJ">
    </div>
  </div>

  <div className="card">
   
    <div className="imgEquipeE">
    </div>
  </div>
  <div className="card">
    <h3 className='title'>MARIA EDUARDA</h3>
    <h4 className="title">Head Social Midia e Designer</h4>
    <div className="imgEquipeM">
    </div>
  </div>
  </div> 
  </div>
)
}
export default Home 