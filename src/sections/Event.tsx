import { getSessionTime } from "@/helpers";
import style from "@/styles/event.module.scss";
import Link from "next/link";

export default function EVent({ slug }: { slug: "pg" | "sg" }) {
  let eventTime = getSessionTime(slug);

  return (
    <div className={style.event}>
      <div className={style.inner}>
        <div className="font-halant mb-10 text-sm">
          <div className="mb-5 font-semibold text-sm">{`Assalamu'alaikum Warahmatullahi Wabarakatuh`}</div>
          <div>
            Dengan segala kerendahan hati dan ucapan syukur atas rahmat Allah
            subhanahu wa ta’ala, kami bermaksud mengundang Bapak/Ibu/Saudara/i
            untuk hadir di acara pernikahan kami yang Insya Allah akan
            dilaksanakan pada:
          </div>
        </div>
        <div className="mb-8">
          <div className="jemina-title mb-5">Akad Nikah</div>
          <div className="font-halant text-sm font-semibold">
            <div>Minggu, 14 Mei 2023</div>
            <div>09.00 - Selesai</div>
          </div>
        </div>
        {eventTime && (
          <div className="mb-10">
            <div className="jemina-title mb-5">Resepsi</div>
            <div className="font-halant text-sm font-semibold">
              <div>Minggu, 14 Mei 2023</div>
              <div>{eventTime}</div>
            </div>
          </div>
        )}
        <div className="font-halant mb-5">Acara akan dilaksanakan di:</div>
        <div className="mb-5">
          <div className="jemina-title mb-5">Buni Manten Wedding Venue</div>
          <div className="text-sm">
            <div>JI. KH. Dewantoro, Sawah Besar, Kec. Ciputat</div>
            <div>Tangerang Selatan</div>
          </div>
        </div>
        <div className="flex justify-center mb-5">
          <Link
            className="btn-glass"
            href="https://goo.gl/maps/EBMMZpVuRnFUWnF57"
          >
            Lihat Lokasi
          </Link>
        </div>
        <div className="text-sm leading-5 max-w-[315px] mx-auto">
          Sehubungan dengan keterbatasan kondisi saat ini, kami mohon maaf Akad
          Nikah terbatas hanya akan dihadiri oleh keluarga.
        </div>
        <div className="mt-5 font-semibold text-sm">{`Wassalamu'alaikum Warahmatullahi Wabarakatuh`}</div>
      </div>
    </div>
  );
}
