import axios from "axios"


const FetchWithFormData = async (token, bodyFormData) => {
    let path = location.host === 'swiftmoneytorph.netlify.app' ? '/api' : 'http://ec2-54-169-139-199.ap-southeast-1.compute.amazonaws.com/api'
    try {
        let response = await axios({
            method: "post",
            url: `${path}/products/add`,
            data: bodyFormData,
            headers: {
                "Content-Type": "multipart/form-data",
                'Authorization': `Bearer ${token}`
            },
        })
        return await response
    } catch (e) {
        console.error(e)
    }
}

export default FetchWithFormData