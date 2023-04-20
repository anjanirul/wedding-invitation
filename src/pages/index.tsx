import { useEffect, useState } from "react";
import NewHero from "./new-hero";
import Cover from "./cover";
import Introduction from "./introduction";
import EVent from "./Event";
import Presence from "./presence";
import Messages from "./messages";
import Saklilane from "./saklilane";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [allowed, setAllow] = useState(false);

  useEffect(() => {
    if (opened) {
      document.body.style.overflow = "auto";
      setTimeout(setAllow, 500, true);
    } else {
      document.body.style.overflow = "hidden";
      setAllow(false);
    }
  }, [opened]);

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
        <EVent />
        <Presence />
        <Messages />
        <Saklilane />
      </div>
    </section>
  );
}
