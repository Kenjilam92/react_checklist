import React, {useState} from 'react';
import Form from './Components/Form';
import Display from './Components/Display';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [task,setTask] = useState("")
  const [taskslist,setTaskslist]=useState([
    {taskDetails: "finish to do list", fontStyle: ""}
  ])
  const addNewTask = (e) =>{
    e.preventDefault();
    const newTask= { taskDetails: task, fontStyle: ""};
    setTaskslist([...taskslist,newTask]);
    setTask("");
  }
  const changeTextstyle = (v,i) => {
    const temp = [...taskslist]
    temp[i].fontStyle = v? "line-through" :  "";
    setTaskslist(temp);
  }
  const deleteTask = (i) => {
    const temp = [...taskslist];
    console.log (`delete index ${i}`);
    temp.splice(i,1);
    setTaskslist(temp);
  }
  const changeTaskDeatail = (i) => {
    const temp = [...taskslist];
    console.log (`edit index ${i}`) 
  }
  
  return (
    <>
    <Form 
      handleSubmit={addNewTask} 
      handleInput={setTask}
      valueInput={task}
      />
    <Display 
      list={taskslist}
      handleCheckbox={changeTextstyle}
      handleEdit={changeTaskDeatail}
      handleDelete={deleteTask}
    />
    </>
  );
}

export default App;
