import axios from "axios"
import { useEffect, useState } from "react"

// Custom hook to retreive data from the API
export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {
        setLoading(true)
        axios.get(url)
            .then(resp=>setData(resp.data))
            .catch(err=>setError(err))
            .finally(()=>setLoading(false))
    }, [url])
    
    return {
        data, loading, error
    }
}

