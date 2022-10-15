import axios from "axios";
import { API } from "@/enum/api";

interface Authorization {
  email: string;
  password: string;
}

export const signInReq = async (userData: Authorization) => {
  return await axios.post(API.SIGN_IN_PATH, userData);
};
