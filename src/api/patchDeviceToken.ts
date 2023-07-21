import axios from "axios";
import { client } from "./axios";

export async function patchDeviceToken(token: string) {
  const data = await axios.patch(
    `${import.meta.env.VITE_APP_BASE_URL}/api/user/device-token`,
    { deviceToken: token },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_APP_TEACHER_TOKEN}`,
      },
    },
  );

  return data;
}