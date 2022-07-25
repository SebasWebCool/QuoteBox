import { useState } from 'react'
import './App.css'
import QuoteBox from './componets/QuoteBox'
import frases from './Json/frases.json'
import colors from './Colors/colors.js'


function App() {

  const getRamdonFrase = (us) => {
    let iUser = Math.floor(Math.random() * us.length)
    return us[iUser]
  }
  let radomFrase = getRamdonFrase(frases)

  const getRamdonColor = (us) => {
    let iUser = Math.floor(Math.random() * us.length)
    return us[iUser]
  }
  let radomColor = getRamdonColor(colors)

  const [Color, setColor] = useState(radomColor)
  
  const [Frase, setFrase] = useState(radomFrase)

  const GetAll = () =>{
    radomFrase = getRamdonFrase(frases)
    radomColor = getRamdonColor(colors)
    
    setColor(radomColor)
    setFrase(radomFrase)
  }

  return (
    <div className="App">
      <QuoteBox 
      Frase={Frase} 
      Color={Color} 
      GetAll={GetAll}/>
    </div>
  )
}

export default App
