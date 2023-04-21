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

export function getStaticPaths() {
  return {
    paths: slugSession.map((s: any) => ({ params: { slug: s.name } })),
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
      <div className="relative h-full">
        <NewHero />
        <Introduction />
        <EVent slug={props.slug} />
        <Presence slug={props.slug} />
        <Messages messages={messages} />
        <Saklilane />
      </div>
      <NewCover isOpen={opened} setOpen={setOpened} />
    </section>
  );
}
