import axios from "axios";
import MEMBER_TOKEN from "../memberToken/MemberToken";
import BASE_URL from "../baseUrl/BaseUrl";

export const getNonInvitedMembers = async (adminEmail, adminLocation) => {
    try{
        const config = {
            method: 'POST',
            maxBodyLength: Infinity,
            url: `${BASE_URL}/user/all/invite`,
            params:{ location: adminLocation },
            headers: {
                'Authorization': `Bearer ${MEMBER_TOKEN}`, 
                'Content-Type': 'application/json',
                referrerPolicy:'no-referrer',
                mode:'no-mode',
                "Access-Control-Allow-Origin":"*",
            },
            data: { email: adminEmail }
        };

        const response = await axios.request(config);
        return response;
    }
    catch(error){
        return error;
    }
}