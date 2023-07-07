import axios from "axios";
import MEMBER_TOKEN from "../api/memberToken/MemberToken";
import BASE_URL from "../api/baseUrl/BaseUrl";

export const handleInviteMembers = async (memberEmail) => {
    try{
        const response = await axios.post(`${BASE_URL}/user/invite`, { email: memberEmail }, {
            headers: {
                'Authorization': `Bearer ${MEMBER_TOKEN}`,
                'Content-Type': 'application/json',
                referrerPolicy:'no-referrer',
                mode:'no-mode',
                "Access-Control-Allow-Origin":"*",
            },
        });
        console.log("response of invite a particular member API is this", response);
        return response;
    }
    catch(error){
        console.log("I'm getting this error");
        return error;
    }
};

export const getTotalMembers = async (adminLocation) => {
    try{
        const response = await axios.get(`${BASE_URL}/user/all?location=${adminLocation}`, {
            headers: {
                'Authorization': `Bearer ${MEMBER_TOKEN}`,
                'Content-Type': 'application/json',
                referrerPolicy:'no-referrer',
                mode:'no-mode',
                "Access-Control-Allow-Origin":"*",
            },
        });
        return response;
    }
    catch(error){
        return error;
    }
};