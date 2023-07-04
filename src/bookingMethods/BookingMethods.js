import axios from "axios";
import MEMBER_TOKEN from "../api/memberToken/MemberToken";
import BASE_URL from "../api/baseUrl/BaseUrl";

export const handleMemberCountBooking = async (memberData) => {
    try{
        const response = await axios.post(`${BASE_URL}/bookmeal/me`, memberData, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${MEMBER_TOKEN}`,
            referrerPolicy:'no-referrer',
            mode:'no-mode',
            "Access-Control-Allow-Origin":"*",
        }
    });
        return response;
    }
    catch(error){
        return error;
    }
};

export const handleCancelMealBooking = async (memberData) => {
    try{
        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: `${BASE_URL}/bookmeal/me/delete`,
            headers: {
                'Authorization': `Bearer ${MEMBER_TOKEN}`, 
                'Content-Type': 'application/json',
                referrerPolicy:'no-referrer',
                mode:'no-mode',
                "Access-Control-Allow-Origin":"*",
            },
            data : memberData
          };
          
        const response = await axios.request(config);
        return response;
    }
    catch(error){
        return error;
    }
};

export const handleMemberBookingStatus = async (memberId) => {
    try{
        const response = await axios.get(`${BASE_URL}/bookmeal/me/${memberId}`, {
            headers: {
                'Authorization': `Bearer ${MEMBER_TOKEN}`,
                'Content-Type': 'application/json',
                referrerPolicy:'no-referrer',
                mode:'no-mode',
                "Access-Control-Allow-Origin":"*",
            }
        });
        return response;
    }
    catch(error){
        return error;
    }
};

export const handleMemberCountByDate = async (date) => {
    try{
        const response = await axios.get(`${BASE_URL}/bookmeal/date/count`, date, {
            headers: {
                'Authorization': `Bearer ${MEMBER_TOKEN}`,
                'Content-Type': 'application/json',
                referrerPolicy:'no-referrer',
                mode:'no-mode',
                "Access-Control-Allow-Origin":"*",
            }
        });
        return response;
    }
    catch(error){
        return error;
    }
};

export const getMyBuddies = async (memberEmail) => {
    try{
        const config = {
            method: 'POST',
            url:`${BASE_URL}/user/all/joined`,
            params:{ location: 'Jaipur' },
            headers: {
                'Authorization': `Bearer ${MEMBER_TOKEN}`, 
                'Content-Type': 'application/json',
                referrerPolicy:'no-referrer',
                mode:'no-mode',
                "Access-Control-Allow-Origin":"*",
            },
            data: { email: memberEmail }
        };

        const response = await axios.request(config);
        return response;
    }
    catch(error){
        return error;
    }
};

export const bookMealForBuddy = async (buddyData) => {
    try{
        const response = await axios.post(`${BASE_URL}/bookmeal/me`, buddyData, {
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