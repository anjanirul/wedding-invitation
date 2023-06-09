import supabase from "@/supabase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = await supabase()
    .from("messages")
    .select()
    .or(`is_deleted.is.${null},is_deleted.is.${false}`)
    .order("created_at", { ascending: false });

  res.status(200).json({ messages: data });
}
