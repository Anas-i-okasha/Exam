import React ,  {state} from 'react'
import Axios from 'axios'

const Library=()=> {
    const [books , setBooks]=[]
    const [title , setTile]=state("")
    const [author , setAuthor]=state('')
    const [publisher , setPublisher]=state('')
    const [publisher_at , setPublesher_at]=state('')

   const getAll=()=>{
    Axios.get('http://localhost:3000').then((responce)=>{

    })
    .err((err)=>{
        console.log(err)
    })
   } 
   const renderBooks=books.map((item)=>{ return <h1>Title : {item.title}</h1> , <h1> Author:{item.author} </h1>  , <h1>Publisher : {item.publisher}</h1> })
    return (
      <div>
          {renderBooks}

   
           <button onClick={getAll}></button>
      </div>
    )
  }
  export default Library

