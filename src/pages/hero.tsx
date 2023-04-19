import IconBamboo from "@/icons/bambo";
import style from "@/styles/hero.module.scss";

export default function Hero() {
  return (
    <div className={style.hero}>
      <div className={style.bambooIcon}>
        <IconBamboo />
      </div>
      <div className={style.bottom}>
        <div className="font-belle">The wedding of</div>
        <div className={style.brideName}>
          anjani <span className={style.join}>&</span> irul
        </div>
        <div className="font-belle mb-10">Minggu, 14 Mei 2023 </div>
        <div className={style.bar}>
          <div className={style.flower} />
        </div>
      </div>
    </div>
  );
}
