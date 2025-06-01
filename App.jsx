import { useState } from 'react'
import './App.css'

function App() {
  const [index,setIndex]=useState(0);

  const phases=[
    {"task":"Just inhale everything for 4 Seconds",
    "believe":"Inhale Your guilts, score in life, money you have, respect you don't have. Everything",
    "color":"#FFFF81"},
    {"task" : "Pause, Hold your breathe inside",
    "believe" : "Like holding those emotions, giving them space within you",
    "color":"#ADF802"},
    {"task" : "Exhale slowly for 6 seconds.",
    "believe" : "Let them out of you for 6 seconds, Let them exist on their own",
    "color":"#F7CFE1"},
    {"task" : "Pause for a moment before next breath",
    "believe" : "Finally let yourself feel how badly they affected you, it was all in past",
    "color" : "#018FC7"}];

    const updateCard=()=>{
      if (index<phases.length-1){
        setIndex(index+1);
      }
      else{
        setIndex(0);
      }
     
    }
  return (
    <div style={{backgroundColor:phases[index]["color"]}}>
      <p>{phases[index]["task"]}</p>
      <p>{phases[index]["believe"]}</p>
      <button onClick={updateCard}>NEXT</button>
      <p>{index}</p>
    </div>
  )
}

export default App
