import { useState } from "react";
import NewHero from "@/sections/new-hero";
import Introduction from "@/sections/introduction";
import EVent from "@/sections/Event";
import Presence from "@/sections/presence";
import Messages from "@/sections/messages";
import Saklilane from "@/sections/saklilane";
import useGetMessage from "@/hooks/useGetMessage";
import NewCover from "@/sections/new-cover";
import { slugSession } from "@/helpers";
import supabase from "@/supabase";

export async function getStaticPaths() {
  const { data } = await supabase().from("invited").select();

  let userdata = data || [];

  return {
    paths: [
      { params: { slug: "pg" } },
      { params: { slug: "sg" } },
      ...userdata.map((i: any) => ({ params: { slug: i.path } })),
    ],
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const slug = context.params.slug;

  if (slug === "pg" || slug === "sg")
    return {
      props: { slug, user: null },
      revalidate: 30,
    };
  else {
    const { data } = await supabase().from("invited").select().eq("path", slug);
    return {
      props: { slug, user: data?.[0] },
    };
  }
}

export default function SubSlug({ slug, user }: { slug: string; user: any }) {
  const [opened, setOpened] = useState(false);

  return (
    <section
      className={`w-full max-w-md mx-auto text-white h-screen ${
        opened ? "" : "overflow-hidden"
      }`}
    >
      <div className="relative h-full">
        <NewHero />
        <Introduction />
        <EVent slug={slug} user={user} />
        <Presence slug={slug} />
        <Messages />
        <Saklilane />
      </div>
      <NewCover isOpen={opened} setOpen={setOpened} user={user} />
    </section>
  );
}
