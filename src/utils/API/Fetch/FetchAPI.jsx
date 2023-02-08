

const FetchAPI = async (url, data = {}, method = 'POST') => {
    let path = location.host === 'www.swiftmoneytorph.netlify.app' ? '/api-path' : 'http://ec2-54-169-139-199.ap-southeast-1.compute.amazonaws.com'
    try {
        let response = await fetch(`${path}/${url}`, {
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