import axios from "axios";
import { newUserDataTypes } from "../type/SignUp/newUserDataType";

// 커밋을 위한 주석
export async function newUserPost(newUser: newUserDataTypes) {
  const data = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/api/auth/local/sign-up`, newUser, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  return data;
}
