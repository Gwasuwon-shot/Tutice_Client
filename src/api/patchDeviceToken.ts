import { client } from "./axios";

export async function patchDeviceToken(deviceToken: string) {
  console.log(deviceToken);
  const data = await client.patch(`/api/user/device-token`, { deviceToken: deviceToken });

  console.log(data);
  return data;
}
