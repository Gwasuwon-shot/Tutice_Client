import axios from "axios";

export const client = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": import.meta.env.VITE_APP_BASE_URL,
    "Content-type": "application/json",
  },
});
