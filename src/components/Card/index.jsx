import '../../pages/Home/styles.css'

import React,{useState, useEffect} from 'react';

export default function Home() {
const [user, setUser] = useState({city:''})

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
  <h1> Você está em {user.city} </h1>

  </div>
)
}
