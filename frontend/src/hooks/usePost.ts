import axios from "axios";
import { useState } from "react";

export default function usePost<Type>(url:string,data:Type){
    const [response,setResponse] = useState('')
    const [error,setError] = useState('')

    axios.post(url,data)
    .then(res => setResponse(res.data))
    .catch(error => setError(error))

    return {response,error}
}