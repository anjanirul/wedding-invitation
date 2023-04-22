import style from "@/styles/new-cover.module.scss";
import { useRouter } from "next/router";

export default function NewCover({
  isOpen,
  setOpen,
  user,
}: {
  isOpen: boolean;
  setOpen: (arg: any) => void;
  user: any;
}) {
  const { query } = useRouter();

  let guestName = query.tamu || "Bapak/Ibu/Saudara/i";
  if (user && user.name) guestName = user.name;

  return (
    <div className={`${style.newCover} ${isOpen ? style.opened : ""}`}>
      <div className={style.inner}>
        <div className={style.topArea}>
          <div className={style.event}>
            <div>Wedding Invitation by</div>
            <div>Mei 14, 2023</div>
          </div>
          <div className={style.bride}>
            <div className={style.name}>anjani</div>
            <div className={style.name}>
              <span className={style.join}>&</span> irul
            </div>
          </div>
        </div>
        <div className={style.bottomArea}>
          <div className={style.guestName}>Dear: {guestName}</div>
          <div className="px-8">
            <button className="btn-white" onClick={() => setOpen(true)}>
              Open Invitation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
