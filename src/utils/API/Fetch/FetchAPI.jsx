

const FetchAPI = async (url, data = {}, method = 'POST') => {
    try {
        let response = await fetch(url, {
            method,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let json = await response.json()
        return await json
    } catch (error) {
        console.log(error)
    }

}

export default FetchAPI