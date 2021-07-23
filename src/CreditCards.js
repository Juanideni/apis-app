
import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
function CreditCards(){
    let [creditCards, setCreditCards] = useState([])
    useEffect(() => {
        fetch("https://fakerapi.it/api/v1/credit_cards")
          .then(result => result.json())
          .then(
              (result) => {
                setCreditCards(result.data)
            },   
          )
      }, [])
    

    

    function test(){
        console.log(creditCards)
    }
    
return(
    <>
   
    <button><Link to="/">Volver al menu principal</Link></button>

    
       {
        creditCards.map(card => (
            <ul>

            
        <li key="card.type">
            <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Marca de la tarjeta
                            </th>
                            <th>
                                Numero
                            </th>
                            <th>
                                Fecha de expiracion
                            </th>
                            <th>
                                Titular de la tarjeta
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {card.type}
                            </td>
                            <td>
                                {card.number}
                            </td>
                            <td>
                                {card.expiration} 
                            </td>
                            <td>
                                {card.owner}
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
export default CreditCards;