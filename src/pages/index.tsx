import { useState } from "react";
import Cover from "./cover";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="w-full max-w-sm mx-auto text-white">
      <div className="relative">
        <Cover isOpen={opened} setOpen={setOpened} />
      </div>
    </section>
  );
}
