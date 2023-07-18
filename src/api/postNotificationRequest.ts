import axios from "axios";

export async function postNotificationRequest(token: string) {
  const data = await axios.post(
    `${import.meta.env.VITE_APP_BASE_URL}/api/notifications`,
    { deviceToken: token },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  console.log("postNotificationRequest" + data);
  return data;
}
