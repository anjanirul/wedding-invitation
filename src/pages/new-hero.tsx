import IconBamboo from "@/icons/bambo";
import style from "@/styles/new-hero.module.scss";
import Image from "next/image";

export default function NewHero() {
  return (
    <div className={style.newHero}>
      <div className={style.bambooIcon}>
        <IconBamboo />
      </div>
      <div className={style.content}>
        <div className="mb-10">The wedding of</div>
        <div className={style.brideName}>
          anjani <span className={style.join}>&</span> irul
        </div>
        <div className="mb-10">Minggu, 14 Mei 2023</div>
        <div className={style.bar}>
          <div className={style.flower} />
        </div>
        <div className="max-w-[310px] mx-auto mb-[68px]">
          <div className="text-sm">
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
