import { useState,useEffect } from 'react'
import json from './dati.json'
import TodoObject from './TodoObject.jsx'
//const API = "https://jsonplaceholder.typicode.com/todos";

function App() {
  //const [data , setData] = useState({});
  const data = json;

  // useEffect(() => {
  //   try {
  //     fetch(API)
  //   .then(response => response.json())
  //   .then(data => setData(data))
  //   } catch (error) {
  //     console.error(error)
  //   }
  // },[])

  //console.log(data);

  const dataJSX = data.map(element => {
    <TodoObject key={element.userId} id={element.id} title={element.title} completed={element.completed}/>
    console.log(element);
  })

  return (
    <>
    <h1>todo</h1>
    {dataJSX}
    </>
  )
}

export default App
