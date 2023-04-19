import IconBamboo from "@/icons/bambo";
import style from "@/styles/hero.module.scss";

export default function Hero() {
  return (
    <div className={style.hero}>
      <div className={style.bambooIcon}>
        <IconBamboo />
      </div>
      <div className={style.bottom}>
        <div className="font-halant text-sm">The wedding of</div>
        <div className={style.brideName}>
          anjani <span className={style.join}>&</span> irul
        </div>
        <div className="font-halant mb-10 text-sm">Minggu, 14 Mei 2023 </div>
        <div className={style.bar}>
          <div className={style.flower} />
        </div>
        <div className="font-halant max-w-[311px] mx-auto mt-10 mb-16 text-xs">
          <div className="mb-5 leading-5">
            Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </div>
          <div className="font-semibold">QS. Ar-Rum Ayat 21</div>
        </div>
      </div>
    </div>
  );
}
