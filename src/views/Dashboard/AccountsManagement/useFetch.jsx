import {useState, useEffect} from 'react';
import axios from 'axios';

function useFetch(url){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() =>{
        setLoading(true);
            const fetchData = async () => {
                try {
                const response = await fetch(url, {
                    headers: {
                    'Content-Type': 'application/json',
                    "Authorization": ""
                    }
                });
                const json = await response.json();
                console.log(json)
                setData(json);
                } catch (error) {
                setError(error);
                console.log(error)
                } finally {
                setLoading(false);
                }
            };
        
            fetchData();
        //     .then(response => {
        //     setData(noData => response.data)
        //     console.log('response', response.data)
        // }).catch((e)=>{
        //     setError(e)
        //     console.log('error', e)
        // }).finally(()=>{
        //     setLoading(false)
        // })
    }, [])

    return {
        data, loading, error
    }

}

export default useFetch;