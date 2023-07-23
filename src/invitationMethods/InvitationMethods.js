import axios from "axios";
import MEMBER_TOKEN from "../api/memberToken/MemberToken";
import BASE_URL from "../api/baseUrl/BaseUrl";

export const handleInviteMembers = async (memberEmail) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/user/invite`,
      { email: memberEmail },
      {
        headers: {
          Authorization: `Bearer ${MEMBER_TOKEN}`,
          "Content-Type": "application/json",
          referrerPolicy: "no-referrer",
          mode: "no-mode",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getTotalMembers = async (adminLocation) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/user/all?location=${adminLocation}`,
      {
        headers: {
          Authorization: `Bearer ${MEMBER_TOKEN}`,
          "Content-Type": "application/json",
          referrerPolicy: "no-referrer",
          mode: "no-mode",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const handleAddMember = async (memberData) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/insert`, memberData, {
      headers: {
        Authorization: `Bearer ${MEMBER_TOKEN}`,
        "Content-Type": "application/json",
        referrerPolicy: "no-referrer",
        mode: "no-mode",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const handleDeleteMember = async (memberEmail) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/user/delete?email=${memberEmail}`,
      {
        headers: {
          Authorization: `Bearer ${MEMBER_TOKEN}`,
          "Content-Type": "application/json",
          referrerPolicy: "no-referrer",
          mode: "no-mode",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getReversedDate = (date) => {
  const reversedDate = date.split("-").reverse().join("-");
  return reversedDate;I
};

export const getLastFiveDaysCount = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/bookmeal/week/count`, {
      headers: {
        Authorization: `Bearer ${MEMBER_TOKEN}`,
        "Content-Type": "application/json",
        referrerPolicy: "no-referrer",
        mode: "no-mode",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
