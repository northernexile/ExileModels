
import Cookies from "js-cookie"
import { ProfileInterface } from "../../../models/user/profile/profile.interface"

const UserProfile = ():ProfileInterface => {
    const userData:string|undefined = Cookies.get('userRole')

    const getProfile = ():ProfileInterface => {
        let profile:ProfileInterface = {profile:undefined};

        if ( userData ) {
            profile.profile = JSON.parse(userData)
        }

        return profile
    }

    return getProfile()
}

export default UserProfile;