import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch<Type>(url:string) {
    const [data,setData] = useState(Array<Type>())
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('')

    useEffect(() => {
        axios.get(url)
        .then(res => setData(res.data))
        .catch(error => setError(error))
        .finally(() => setLoading(false))
    }, [url])

    return {data,loading,error}
}