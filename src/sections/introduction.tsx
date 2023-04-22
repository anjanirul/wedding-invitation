import style from "@/styles/introduction.module.scss";

export default function Introduction() {
  return (
    <div className={style.introduction}>
      <div className={style.bride}>
        <div>
          <div className={style.brideName}>Mentari Dwianjani Puteri</div>
          <div className={style.brideOrigin}>
            <div>Putri dari:</div>
            <div>Bpk. Joni Junarto & Ibu Diah Junias Handayani</div>
          </div>
        </div>
        <div className="mt-8">
          <div className={style.brideName}>Akhmad Bani Irulloh</div>
          <div className={style.brideOrigin}>
            <div>Putra dari:</div>
            <div>Bpk. Sutejo & Ibu Siti Khafidoh</div>
          </div>
        </div>
      </div>
    </div>
  );
}
