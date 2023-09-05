import { getCookie } from "../../api/cookie";

export function isLogin() {
  return getCookie("accessToken") !== undefined;
}

export function isCookieNull() {
  return getCookie("accessToken") === null;
}

export function isCookieAuthenticated() {
  return getCookie("accessToken") === "false";
}
