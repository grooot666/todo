import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='Board'>
     <div className='container'>
      <h1>To-Do list</h1>
      <div className='addinput'>
        <div className='input'>
        <input placeholder='Add a new task...' className='addnew'/> 
        </div>
        <button className='addButton'>Add</button>
      </div>
      <div className='buttons'>
        
         <button className='buttons1'>All</button>
         <button className='buttons2'>Active</button>
         <button className='buttons2'>Completed</button>
        
      </div>
     </div>
     <div className='notask'><p>No tasks yet. Add one above!</p></div>
     <div className='pine'>
      <p className='pinep1'>Powered by</p>
      <p className='pinep'>Pinecone Academy</p>
      </div>
     </div>
    </>
  )
}

export default App
