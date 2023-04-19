import { useEffect, useState } from "react";
import Cover from "./cover";
import Hero from "./hero";

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
      className={`w-full max-w-sm mx-auto text-white h-screen ${
        opened ? "" : "overflow-hidden"
      }`}
    >
      <Cover isOpen={opened} setOpen={setOpened} />

      <div className="relative h-full">
        <Hero />
        <div className="h-screen">b</div>
      </div>
    </section>
  );
}
