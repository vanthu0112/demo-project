import { post } from "@/services/useBaseClient";
import { Apis } from "@/services/constants";
// Define or import the SignInRes type
export interface LoginRes {
  AccessToken: string;
  IdToken: string;
  expiry: number;
  ChallengeName: string;
  Session?: string;
}

export const Login = (
  userName: string,
  password: string
): Promise<LoginRes> => {
  return post(Apis.Auth.Login, {
    userName,
    password,
  });
};
