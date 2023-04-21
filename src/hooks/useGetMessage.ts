import useSWRImmutable from "swr/immutable";

const fetcher = (url: string) =>
  fetch(url, { method: "GET" }).then((res) => res.json());

export default function useGetMessage() {
  const { data } = useSWRImmutable("/api/get-messages", fetcher, {
    revalidateOnFocus: false,
  });

  return { messages: data?.messages };
}
