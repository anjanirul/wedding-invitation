import { fetcher } from "@/helpers";
import useSWRImmutable from "swr/immutable";

export default function useGetGuests() {
  const { data, isLoading, isValidating } = useSWRImmutable(
    "/api/get-guest",
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  return { guest: data?.guest, loading: isLoading, isValidating };
}
