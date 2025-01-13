import './App.css'
import React,{useState}  from 'react'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([])
  
  const [error,setError] = useState (false)
  const [inputValue, setInputValue] = useState("")
  const hanleInputChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleAddTaskButton = () => {
    if(inputValue.length === 0){
      setError(true)
    }else{
      setError(false)
      setTodos([...todos,{description: inputValue, status:"ACTIVE", id: uuidv4()}])
      setInputValue("")
    }
   
    
  };
  const HandleTaskCheckBox = (id) => {
   const tasks = todos.map((todo) => {
    if(todo.id === id){
      return{...todo, status:"COMPLETED"};
    }else{
      return todo;
    }
   });
   setTodos(tasks)
  };
 
console.log(todos);



  return (
    <>
    <div className='Board'>
     <div className='container'>
      <h1>To-Do list</h1>
      {error && <div>please enter task</div>}
      <div className='addinput'>
        <div className='input'>
        <input value={inputValue } onChange={hanleInputChange} placeholder='Add a new task...' className='addnew'/> 
        </div>
        <button onClick={handleAddTaskButton} className='addButton'>Add</button>
      </div>
      
      <div className='buttons'>
        
         <button className='buttons1'>All</button>
         <button className='buttons2'>Active</button>
         <button className='buttons2'>Completed</button>
        
      </div>
      {todos.map((todo, i) => {
          return(
            <div key={i}>
              <input type="checkbox" 
              onChange={() => HandleTaskCheckBox}/>
              {todo.description}</div>
          )
        })}
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

