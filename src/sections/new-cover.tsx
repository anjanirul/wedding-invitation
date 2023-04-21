import IconBamboo from "@/icons/bambo";
import style from "@/styles/new-cover.module.scss";
import { useRouter } from "next/router";

export default function NewCover({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: (arg: any) => void;
}) {
  const { query } = useRouter();
  return (
    <div className={`${style.newCover} ${isOpen ? style.opened : ""}`}>
      <div className={style.topArea}>
        <IconBamboo />
      </div>
      <div className={style.bottomArea}>
        <div className={style.guestName}>Dear: {query.tamu}</div>
        <div className="px-8">
          <button className="btn-white" onClick={() => setOpen(true)}>
            Open Invitation
          </button>
        </div>
      </div>
    </div>
  );
}
