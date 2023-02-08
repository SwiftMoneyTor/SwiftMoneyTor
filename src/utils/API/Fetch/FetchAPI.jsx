

const FetchAPI = async (url, data = {}, method = 'POST') => {
    try {
        let response = await fetch(`http://ec2-13-213-62-166.ap-southeast-1.compute.amazonaws.com/${url}`, {
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