import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Forms from './components/Forms/forms.jsx'
import './Styles/global.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router>
   <Routes>
    <Route path='/' element={<Home/>}/>
    
   </Routes>
    </Router>
  </React.StrictMode>,
)