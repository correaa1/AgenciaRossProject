import '../Home/styles.css'
import Card from '../../components/Card'
import React,{useState, useEffect} from 'react';

function Home() {
const [studantName,setStudantName] = useState();
const [studants, setStudant] = useState([]);
const [user,setUser] = useState();
function handleAddStudant(){
  const newStudant = {
    city: studantName,
  }
  setStudant(( )=>[newStudant])
}

useEffect(() => {
  fetch('https://api.bigdatacloud.net/data/reverse-geocode-client')
  .then(response => response.json())
  .then(data => {
    setUser({
      city: data.city,
    })
  })
},[])
return(
  <div className='container'>
     <h1>Busque sua cidade</h1>
  <button onClick={handleAddStudant} type="button">Buscar</button>

  {
    studants.map(studant =>  <Card key={studant.time} name={studant.city} />)
   }

  </div>
)
}
export default Home