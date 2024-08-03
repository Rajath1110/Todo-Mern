import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Signup from './components/signup/Signup'
import Signin from './components/signin/Signin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>} />
      </Routes>
      <Footer/>

    </Router>
      
      
      
      
        
    </>
  )
}

export default App
