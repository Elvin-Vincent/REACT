import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDos, setTodos] = useState([]) // print divs
  const [toDo, setTodo] = useState('') // store data
//comment
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>ADD TO LIST </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Add to list..."
        />
        <i onClick={()=>setTodos([...toDos,toDo])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((value, i) => (
          <div  className="todo" key={i}>
            <div className="left">
              <input type="checkbox"/>
              <p>{value}</p>
            </div>
            <div className="right">
              <i onClick={()=>setTodos((previoustoDos)=>{
                const updatedTodos = [...previoustoDos];
                updatedTodos.splice(i, 1);
                return updatedTodos;
              })}  className="fas fa-times"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
