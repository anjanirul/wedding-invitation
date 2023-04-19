import { useEffect, useState } from "react";
import Cover from "./cover";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [allowed, setAllow] = useState(false);

  useEffect(() => {
    if (opened) setTimeout(setAllow, 500, true);
    else setAllow(false);
  }, [opened]);

  return (
    <section className="w-full max-w-sm mx-auto text-white">
      <div className="relative">
        <Cover isOpen={opened} setOpen={setOpened} />
      </div>
    </section>
  );
}
