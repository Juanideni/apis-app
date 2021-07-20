
import { useState, useEffect } from "react"

function CreditCards(){
    let [type, setType] = useState("")
    let [owner, setOwner] = useState("")
    let [number, setNumber] = useState("")
    let [expiration, setExpiration] = useState("")
    let [prueba, setPrueba] = useState("")
 
    let axios = require("axios")
    
    useEffect(() => {
        fetch("https://fakerapi.it/api/v1/credit_cards")
          .then(result => result.json())
          .then(
              (result) => {
                setOwner(result.data.[0].owner)
                setType(result.data.[0].type);
                setNumber(result.data.[0].number);
                setExpiration(result.data.[0].expiration)
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
        {"Marca de tarjeta: "+type}
        </li>
        <li>
        {"Numero de tarjeta: "+number}
        </li>
        <li>
        {"Fecha de vencimiento: "+expiration}
        </li>
        <li>
        {"Dueño: "+owner}
        </li>
    </ul>
    </h1>
    
    </>
)
}
export default CreditCards;