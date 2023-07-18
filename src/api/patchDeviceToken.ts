import axios from "axios";
import { client } from "./axios";

export async function patchDeviceToken(token: string) {
  console.log(token);
  const data = await axios.patch(
    `${import.meta.env.VITE_APP_BASE_URL}/api/user/device-token`,
    { deviceToken: token },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  console.log(data);
  return data;
}
