import { useEffect } from "react"
import useAppStore from "../../../appStore"
import avatar from '../../../assets/dashboard/avatar.png'
import FetchWithAuth from "../../../utils/API/Fetch/FetchWithAuth"
import DashBoardNav from "../DashBoardNav/DashBoardNav"
import Main from "../Main/Main"

const DashContainer = () => {
    const setProfilePic = useAppStore(state => state.setProfilePic)
    const credentials = useAppStore(state => state.credentials)
    useEffect(() => {
        let data = { user_id: credentials.id }
        FetchWithAuth('profile/fetch/image', credentials.token, data).then(response => {
            if (response.responsedata.display_image !== '')
                setProfilePic(response.responsedata.display_image)
            else
                setProfilePic(avatar)
        })
    }, [])
    return (
        <div>
            <DashBoardNav />
            <Main />
        </div>
    )
}

export default DashContainer