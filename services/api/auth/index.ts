import { IAuth, IAuthResponse } from "@/types/auth";
import { api } from "..";
import axios, { AxiosResponse } from "axios";

const baseUrl = "https://test-api-y04b.onrender.com/signIn";

export const Auth = () => {
  async function auth(data: IAuth) {
    try {
      const res: AxiosResponse<IAuthResponse> = await api.post(
        `${baseUrl}`,
        data
      );

      if (!res.data.error) {
        return {
          error: false,
          user: res.data.user,
        };
      }
    } catch (error) {
      console.error(error);
      const message =
        axios.isAxiosError(error) && error.response?.data?.message
          ? error.response.data.message
          : "An unexpected error occurred";

      return {
        error: true,
        message,
      };
    }
  }

  return { auth };
};
