import axios from "axios"
import { useEffect } from "react"
import { REACT_APP_API_URL } from "../../../constants"

const TyansPage = () => {
    
    useEffect(() => {
        axios.get(`${REACT_APP_API_URL}Tyan`)
        .then(res => console.log(res.data))
    })
    return (
        <div>
            <h1>Tyans page</h1>
        </div>
    )
}

export default TyansPage