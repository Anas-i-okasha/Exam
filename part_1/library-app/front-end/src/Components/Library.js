import React ,  {state} from 'react'
import Axios from 'axios'

const Library=()=> {
    const [books , setBooks]=[]
    const [title , setTile]=("")
    const [author , setAuthor]=('')
    const [publisher , setPublisher]=('')
    const [publisher_at , setPublesher_at]=('')

   const getAll=()=>{
    Axios.get('http://localhost:3000').then((responce)=>{

    })
    .err((err)=>{
        console.log(err)
    })
   } 
    return (
      <div>

   {books.map((item)=>{ return <h1>Title : {item.title}</h1> , <h1> Author:{item.author} </h1>  , <h1>Publisher : {item.publisher}</h1> })}
           <button onClick={getAll}></button>
      </div>
    )
  }
  export default Library

