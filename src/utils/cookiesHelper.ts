import Cookies from "js-cookie";

const expires = 7;
export const cookiesKeys = {
  ACCESS_TOKEN: "access_token",
};

export function getAccessToken() {
  const accessToken = Cookies.get(cookiesKeys.ACCESS_TOKEN);
  if (!accessToken) return null;

  return accessToken;
}

export function saveAccessToken(token: string) {
  if (!token) return null;
  return Cookies.set(cookiesKeys.ACCESS_TOKEN, token, { expires });
}

export function removeAccessToken() {
  return Cookies.remove(cookiesKeys.ACCESS_TOKEN);
}
