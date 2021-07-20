
import {Link} from "react-router-dom"


function Home(){
    return(
        <>
        <ul>
            <li>
                <h1><Link to={`/Credit-Cards`}>Tarjetas de credito</Link></h1>
            </li>
            <li>
                <h1><Link to={`/Books`}>Libros</Link></h1>
            </li>
        </ul>
        
        
        
       </>
    )
}

export default Home