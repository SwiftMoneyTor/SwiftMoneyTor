import axios from "axios"


const FetchFormData = async (url, token, bodyFormData) => {
    // let path = location.host === 'swiftmoneytorph.netlify.app' ? '/api' : 'http://ec2-13-250-12-139.ap-southeast-1.compute.amazonaws.com/api'
    let path = 'http://127.0.0.1:8000/api'
    try {
        let response = await axios({
            method: "post",
            url: `${path}/${url}`,
            data: bodyFormData,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                'Authorization': `Bearer ${token}`
            },
        })
        return response
    } catch (e) {
        console.error(e)
    }
}
export default FetchFormData