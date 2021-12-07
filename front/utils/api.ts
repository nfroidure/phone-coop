import BaseAPI from "./sdk";
import config from "./config";
import YError from "yerror";
import type { AxiosRequestConfig } from "axios";
import type { Components } from "./sdk";

export type { Components };

export type APITypes = typeof API;

type AuthTokenInput = { token?: string };

const API = Object.keys(BaseAPI).reduce((FinalAPI, operationId) => {
  return {
    ...FinalAPI,
    [operationId as keyof typeof FinalAPI]: async (
      { token, ...input }: unknown & AuthTokenInput,
      options: AxiosRequestConfig = {}
    ) => {
      try {
        return await BaseAPI[operationId as keyof typeof BaseAPI](
          {
            ...input,
            xApplicationVersion: config.applicationVersion,
          },
          {
            ...options,
            baseURL: config.apiURL,
            headers: {
              ...options.headers,
              ...(token
                ? {
                    authorization: `Bearer ${token}`,
                  }
                : {}),
            },
          }
        );
      } catch (err) {
        console.error("Got an API error:", (err as Error).stack);
        throw new YError(
          (err as any).response?.data?.error
            ? "E_API_ERROR"
            : "E_UNEXPECTED_ERROR",
          (err as any).response?.data
        );
      }
    },
  };
}, {}) as {
  [P in keyof typeof BaseAPI]: (
    input: Parameters<typeof BaseAPI[P]>[0] & AuthTokenInput,
    config?: AxiosRequestConfig
  ) => Promise<ReturnType<typeof BaseAPI[P]>>;
};

export default API;
