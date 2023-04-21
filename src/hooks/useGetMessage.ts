import { fetcher } from "@/helpers";
import useSWRImmutable from "swr/immutable";

export default function useGetMessage() {
  const { data } = useSWRImmutable("/api/get-messages", fetcher, {
    revalidateOnFocus: false,
  });

  return { messages: data?.messages };
}
