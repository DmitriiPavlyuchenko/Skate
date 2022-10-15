import axios from "axios";
import { API } from "@/enum/api";

interface Registration {
  name: string;
  email: string;
  password: string;
}

export const signUpReq = async (userData: Registration) => {
  return await axios.post(API.SIGN_UP_PATH, userData);
};
