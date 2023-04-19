import style from "@/styles/cover.module.scss";

export default function Cover({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: any;
}) {
  let height = "max-h-[700px]";
  if (isOpen) height = "max-h-[0px] overflow-hidden";

  const toggle = () => setOpen(!isOpen);
  console.log({ isOpen });

  return (
    <div className={style.coverScreen}>
      <div className="px-8">
        <div className={style.coverInfo}>
          <div>Wedding Invitation by</div>
          <div>Mei 14, 2023 </div>
        </div>
        <div className={style.brideName}>
          <div>anjani</div>
          <div>
            <span className={style.join}>&</span>
            <span>irul</span>
          </div>
        </div>
      </div>
      <div className={style.bottomArea}>
        <div className={style.btmInside}>
          <div className="bg-black p-1 text-center font-belle mb-5">
            Dear: Weekend Inc.
          </div>
          <div className={style.btmCta}>
            <button className={style.btn}>Open Invitation</button>
          </div>
        </div>
      </div>
    </div>
  );
}
