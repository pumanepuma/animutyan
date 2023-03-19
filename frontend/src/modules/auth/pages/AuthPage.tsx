import axios from "axios"
import { useEffect } from "react"
import { REACT_APP_API_URL } from "../../../constants"
import { Auth } from "../components/Auth"

const authPage = () => {
    return (
        <div>
            <Auth />
        </div>
    )
}

export default authPage