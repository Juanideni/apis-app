
import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
function Books(){
    let [books, setBooks] = useState([])
    
    useEffect(() => {
        fetch("https://fakerapi.it/api/v1/books")
          .then(result => result.json())
          .then(
              (result) => {
                setBooks(result.data)
                
            },   
          ) 
    }, [])

    
return(
    <>
    <button><Link to="/">Volver al menu principal</Link></button>  
    {
        books.map(book => (
        <ul>
            <li key="book.title">
                <table>
                    <thead>
                        <tr>
                            <th>
                                Titulo
                            </th>
                            <th>
                                Autor
                            </th>
                            <th>
                                Genero
                            </th>
                            <th>
                                Fecha de publicacion
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {book.title}
                            </td>
                            <td>
                                {book.author}
                            </td>
                            <td>
                                {book.genre} 
                            </td>
                            <td>
                                {book.published}
                            </td>
                        </tr>
                    </tbody> 
                </table>  
            </li>
        </ul>
        ))
    }
    
    
    </>
)
}
export default Books;