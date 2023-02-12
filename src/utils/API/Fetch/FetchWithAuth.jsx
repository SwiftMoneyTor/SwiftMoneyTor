const FetchWithAuth = async (url, token, data = {}, method = "POST") => {
    let path = location.host === 'swiftmoneytorph.netlify.app' ? '/api' : 'http://ec2-13-250-12-139.ap-southeast-1.compute.amazonaws.com/api'
    // let path = 'http://127.0.0.1:8000/api'
    try {
        let response = await fetch(`${path}/${url}`, {
            method,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        let json = await response.json()
        return await json
    } catch (error) {
        console.log(error)
    }
}

export default FetchWithAuth