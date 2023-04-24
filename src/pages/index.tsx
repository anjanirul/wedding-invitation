import Loading from "@/components/loading";
import MusicOffIcon from "@/icons/music-off";
import MusicIcon from "@/icons/music-on";
import EVent from "@/sections/Event";
import Introduction from "@/sections/introduction";
import Messages from "@/sections/messages";
import NewCover from "@/sections/new-cover";
import NewHero from "@/sections/new-hero";
import Presence from "@/sections/presence";
import Saklilane from "@/sections/saklilane";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export async function getStaticProps(context: any) {
  return {
    props: { slug: "pg", user: null },
    revalidate: 30,
  };
}

export default function Home({ slug, user }: { slug: string; user: any }) {
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);

  const { isFallback } = useRouter();

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
        <div className="fixed left-0 bottom-0 w-full">
          <div className="max-w-md mx-auto p-4">
            <button
              type="button"
              className={`btn-music ${playing ? "play" : "pause"}`}
              onClick={() => {
                setPlaying(!playing);
                const el: any = document.getElementById("themesong");
                if (el && playing) return el.pause();
                return el.play();
              }}
            >
              {playing ? <MusicIcon /> : <MusicOffIcon />}
            </button>
          </div>
        </div>
      </div>
      <NewCover
        isOpen={opened}
        setOpen={setOpened}
        user={user}
        setPlaying={setPlaying}
      />
      <audio id="themesong" loop>
        <source src={`/tulus-jatuh-suka.mp3`} type="audio/mpeg" />
      </audio>
    </section>
  );
}
