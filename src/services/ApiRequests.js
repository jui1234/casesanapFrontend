import { LOGIN } from "./ApiConstant";
import API from "../configs/axios";

export const LoginAPI = async (data) => {
  try {
    let response = await API.post(LOGIN, data);
    if (response.status === 200) {
      localStorage.setItem(
        "token",
        JSON.stringify(response.data.token)
      );
      // localStorage.setItem(
      //   "user",
      //   JSON.stringify({
      //     company: response.data.data.company_list[0],
      //     company_list: response.data.data.company_list,
      //     user_data: response.data.data.user_data,
      //   })
      // );
      // data.remember
      //   ? localStorage.setItem("credentialData", JSON.stringify(data))
      //   : localStorage.removeItem("credentialData");
      return response.data;
    } else {
      console.log("error in login api");
      return false;
    }
  } catch (error) {
    console.log("error in login api", error);
  }
};
