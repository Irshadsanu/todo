import './App.css';
import {useState} from 'react'

function App() {
  const[ToDos,setToDos] = useState([])
  const[ToDo,setToDo] = useState('')
  const [removedToDos,setRemovedToDos] = useState([]);
  const addToDos = (e) => {
    setToDos([...ToDos,{id:Date.now(), Text: ToDo,status:false}])
    ToDo('');
  };
  const setInput =(e)=> { 
    setToDo(e.target.value)
  }
  
  const handlekeypress = (e) =>{
    if (e.key === 'Enter') {
      addToDos()
    }
    
  }
  const reset = () => {
    setToDo("");
  };

  

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={ToDo} onChange={setInput} onKeyPress={handlekeypress} type="text" placeholder="🖊️ Add item..." />
        <i onClick= {addToDos}  className="fas fa-plus"></i>
        
        <button className='clear-btn'>
          <i className='fas fa-eraser erase' title='clear' onClick={reset}></i>
        </button>
      </div>
       
      <div className="todos">
      <h2 className='heading'>ToDos</h2>

      
       { ToDos.map((obj)=>{
         
         return( <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked)
              console.log(obj)
              setToDos(ToDos.filter(obj2=>{
                if (obj2.id===obj.id) {
                  obj2.status=e.target.checked
                }
                return obj2
              }))
            }} value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.Text}</p>
          </div>
          <div className="right">
            <i style={{color:'red'}} onClick={()=>{
              if (window.confirm("Are you sure to delete ?")){
                setRemovedToDos((removedToDos) => [...removedToDos, obj]);
                setToDos(ToDos.filter(obj2 =>{
                  if (obj2.id !==obj.id) {
                    return obj2;
                  }
                  return null;
                }))
              }
            }} className="fas fa-times"></i>
          </div>
        </div>)  
        })}

      </div>

      <div className='display'>
            <h2 className="heading">Selected</h2>
        <div className="SlToDos">
              {ToDos.map((obj)=>{
              if (obj.status){
                return(<h3>{obj.Text} </h3>)
              }
              return null
              })}
        </div>
      </div>

      {removedToDos.map((obj) => {
        return null
      })}
    </div>
  );
}

export default App;
