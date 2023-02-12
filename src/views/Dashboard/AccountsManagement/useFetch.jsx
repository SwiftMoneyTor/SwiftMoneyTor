import {useState, useEffect} from 'react';
import axios from 'axios';

function useFetch(url){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() =>{
        fetch(getUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(profileData => {
            setData(noData => ({...profileData}))
            setLoading(false)
            console.log(data)
        })
        .catch(err => {
            setError(err)
            console.error(err)
        });
}, [])

    return {
        data, loading, error
    }

}

export default useFetch;