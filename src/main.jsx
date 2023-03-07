import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Forms from './components/Forms/forms.jsx'
import './Styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Home>
    <Forms/>
    </Home>
    
  </React.StrictMode>,
)