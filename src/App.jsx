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

  const dataJSX = data.map((object,index) => {
    return <TodoObject key={index} userId={object.userId} id={object.id} title={object.title} completed={object.completed}/>
  })

  return (
    <>
    {dataJSX}
    </>
  )
}

export default App
