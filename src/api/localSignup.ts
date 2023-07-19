import axios from "axios";
import { newUserDataTypes } from "../type/SignUp/newUserDataType";

export async function newUserPost(newUser: newUserDataTypes) {
  const data = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/api/auth/local/sign-up`, newUser, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (data) {
    console.log(data);
  } else {
    console.log("error");
  }
}
