import axios from "axios";
import BASE_URL from "../baseUrl/BaseUrl";

const handleMemberSignup = async (memberData) => {

    try{
        const response = await axios.post(`${BASE_URL}/signup`, memberData,
        {
            headers: {
                'Content-Type': 'application/json',
                referrerPolicy:'no-referrer',
                mode:'no-mode',
                "Access-Control-Allow-Origin":"*",
            }
        },
        );
        return response;
    }
    catch(error){
        return error;
    }
};

export default handleMemberSignup;