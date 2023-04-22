import Loading from "@/components/loading";
import EVent from "@/sections/Event";
import Introduction from "@/sections/introduction";
import Messages from "@/sections/messages";
import NewCover from "@/sections/new-cover";
import NewHero from "@/sections/new-hero";
import Presence from "@/sections/presence";
import Saklilane from "@/sections/saklilane";
import { useRouter } from "next/router";
import { useState } from "react";

export async function getStaticProps(context: any) {
  return {
    props: { slug: "pg", user: null },
    revalidate: 30,
  };
}

export default function Home({ slug, user }: { slug: string; user: any }) {
  const [opened, setOpened] = useState(false);

  const { isFallback } = useRouter();

  if (isFallback) return <Loading />;

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
