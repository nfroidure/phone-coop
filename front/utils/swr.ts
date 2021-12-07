import useSWR from "swr";
import API from "./api";
import type { SWRConfiguration } from "swr/dist/types";
import type { PromiseValue } from "type-fest";

type Handler<I, O> = (input: I) => Promise<O>;
type HandlerInput<T> = T extends Handler<infer I, unknown> ? I : never;
type HandlerOutput<T> = T extends Handler<unknown, infer I> ? I : never;

const API_KEYS: Map<any, string> = Object.keys(API).reduce((hash, key) => {
  hash.set(API[key as keyof typeof API], key);

  return hash;
}, new Map<any, string>());

export default function useAPISWR<T extends Handler<any, any>>(
  swrCouple: [T, HandlerInput<T>],
  options?: SWRConfiguration
) {
  const uniqueKey = swrCouple
    ? Object.keys(swrCouple[1]).reduce(
        (finalKey, key) => finalKey + key + JSON.stringify(swrCouple[1][key]),
        // Sadly, here, we cannot rely on `swrCouple[0].name` to
        // build the unicity key since the build destroys it
        API_KEYS.get(swrCouple[0]) + "-"
      )
    : null;

  return useSWR<
    PromiseValue<HandlerOutput<T>> extends { body: infer D } ? D : never
  >(uniqueKey, async () => (await swrCouple[0](swrCouple[1])).body, options);
}
