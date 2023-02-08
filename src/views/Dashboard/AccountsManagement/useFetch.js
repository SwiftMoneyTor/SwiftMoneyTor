import {useState, useEffect} from 'react';
import axios from 'axios';

function useFetch(url){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() =>{
        setLoading(true);
        axios.get(url, {
            params:{
                accounts_id: 1
            },
            headers: {
                "Content-Type": "application/json",
                "Authorization": "",
                "Custom-Header": JSON.stringify({ key: "value" })
            }})
            .then(response => {
            setData(noData => response.data)
            console.log('response', response.data)
        }).catch((e)=>{
            setError(e)
            console.log('error', e)
        }).finally(()=>{
            setLoading(false)
        })
    }, [])

    return {
        data: [],
        loading: false,
        error: null
    }

}

export default useFetch;