import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './style.css'
function App() {
  const[city,SetCity] = useState('')
  console.log(city);
  const handleValue=(e)=>{
    SetCity(e)
  }
  return (
    <div id='id1'>
      <Header onValue={handleValue}/>
      <Main city={city}/>
      <Footer/>
    </div>
  )
}

export default App
