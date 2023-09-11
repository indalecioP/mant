import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={()=>{
        hablar('vienbenido a indacursos')
        console.log(aleat)
        }}>vienbenido</button>         
    </div>
  )
}

var voicesSp = []

var speechMessage = new SpeechSynthesisUtterance();
document.addEventListener('DOMContentLoaded', (e) => {
  speechSynthesis.addEventListener('voiceschanged', (e) => {
    var voices = speechSynthesis.getVoices()
    voices.forEach(voice => {
      if (voice.lang == 'es-ES') {
        voicesSp.push(voice)
      }
    })
  })
})
var aleat;
function hablar(z) {
  speechMessage.text = z
  aleat = Math.floor(Math.random() * voicesSp.length)
  speechMessage.voice = voicesSp[aleat]
  speechSynthesis.speak(speechMessage)
}

export default App
