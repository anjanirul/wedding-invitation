import { useState } from "react";
import supabase from "@/supabase";

import Cover from "@/sections/cover";
import NewHero from "@/sections/new-hero";
import Introduction from "@/sections/introduction";
import EVent from "@/sections/Event";
import Presence from "@/sections/presence";
import Messages from "@/sections/messages";
import Saklilane from "@/sections/saklilane";

export function getStaticPaths() {
  return {
    paths: [{ params: { slug: "family" } }, { params: { slug: "friends" } }],
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const slug = context.params.slug;

  const { data } = await supabase().from("messages").select();

  if (!slug)
    return {
      redirect: {
        destination: "/404",
      },
    };

  return {
    props: { slug, messages: data },
    revalidate: 30,
  };
}

export default function SubSlug(props: any) {
  const [opened, setOpened] = useState(false);

  return (
    <section
      className={`w-full max-w-md mx-auto text-white h-screen ${
        opened ? "" : "overflow-hidden"
      }`}
    >
      <Cover isOpen={opened} setOpen={setOpened} />
      <div className="relative h-full">
        <NewHero />
        <Introduction />
        <EVent slug={props.slug} />
        <Presence slug={props.slug} />
        <Messages messages={props.messages} />
        <Saklilane />
      </div>
    </section>
  );
}
