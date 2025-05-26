import { Apis } from "@/services/constants";
import { get } from "@/services/useBaseClient";

interface GetMeRes {
  userId: string;
  optimusMemberNumber: string;
  displayName: string;
  loginType: string;
}

export const getMe = (): Promise<GetMeRes> => {
  return get(Apis.Auth.GetMe);
};
