import './App.css'
import Form from './components/Form/Form'
import { useState } from "react";

function App() {

  const [list,setList] = useState([]) // estado macro que guarda la lista de tareas
  

  return (
    <>
     {/* { console.log('Esta lista es de APP',list)} */}
      <Form setList={setList}/>
      
    </>
  )
}

export default App
