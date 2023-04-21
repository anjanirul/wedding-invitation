import { createClient } from "@supabase/supabase-js";

export default function supabase() {
  const url = `${process.env.NEXT_PUBLIC_supabaseURL}`;
  const key = `${process.env.NEXT_PUBLIC_supabaseAUTH}`;
  const supabase = createClient(url, key);
  return supabase;
}
