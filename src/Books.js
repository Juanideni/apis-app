

import { useState, useEffect } from "react"

function Books(){
    let [author, setAuthor] = useState("")
    let [title, setTitle] = useState("")
    let [genre, setGenre] = useState("")
    let [published, setPublished] = useState("")
    let [prueba, setPrueba] = useState("")
 
    let axios = require("axios")
    
    useEffect(() => {
        fetch("https://fakerapi.it/api/v1/books")
          .then(result => result.json())
          .then(
              (result) => {
                setTitle(result.data.[0].title)
                setAuthor(result.data.[0].author);
                setGenre(result.data.[0].genre);
                setPublished(result.data.[0].published)
                setPrueba(result.data)

            },   
          )
      }, [])
    

    

    function test(){
        console.log(prueba)
    }
    
return(
    <>
    <button onClick={test}></button>   
    <h1>
    <ul>
        <li>
        {"Titulo: "+title}
        </li>
        <li>
        {"Escrito por: "+author}
        </li>
        <li>
        {"Genero: "+genre}
        </li>
        <li>
        {"Fecha de publicacion: "+published}
        </li>
    </ul>
    </h1>
    
    </>
)
}
export default Books;