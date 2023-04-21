import { useState } from "react";

import Cover from "@/sections/cover";
import NewHero from "@/sections/new-hero";
import Introduction from "@/sections/introduction";
import EVent from "@/sections/Event";
import Presence from "@/sections/presence";
import Messages from "@/sections/messages";
import Saklilane from "@/sections/saklilane";
import useGetMessage from "@/hooks/useGetMessage";

export function getStaticPaths() {
  return {
    paths: [{ params: { slug: "family" } }, { params: { slug: "friends" } }],
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const slug = context.params.slug;

  if (!slug)
    return {
      redirect: {
        destination: "/404",
      },
    };

  return {
    props: { slug },
    revalidate: 30,
  };
}

export default function SubSlug(props: any) {
  const [opened, setOpened] = useState(false);

  const { messages = [] } = useGetMessage();

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
        <Messages messages={messages} />
        <Saklilane />
      </div>
    </section>
  );
}
