import axios from "axios";
import { useRecoilValue } from "recoil";
import { newUserData } from "../atom/signup/signup";
import { newUserDataTypes } from "../type/SignUp/newUserDataType";

export async function newUserPost(newUser: newUserDataTypes) {
  await axios.create(`${import.meta.env.VITE_APP_BASE_URL}/api/auth/local/sign-up`, newUser).then(function (response) {
    if (response) {
      console.log(response.data);
    }
  });
}
