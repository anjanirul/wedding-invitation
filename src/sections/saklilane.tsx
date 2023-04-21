import SaklilaneIcon from "@/icons/saklilane";
import style from "@/styles/saklilane.module.scss";

export default function Saklilane() {
  return (
    <div className={style.saklilaneSection}>
      <div className={style.inner}>
        <div className="jemina-title text-center mb-2.5 flex items-center justify-center">
          {/* {`sak’lila-ne`} */}
          <SaklilaneIcon />
        </div>
        <div className="text-center text-sm font-halant">
          Saiki lan liya-liyane // Sekarang dan selama-lamanya.
          <br />
          <br />
          Terimakasih.
        </div>
      </div>
    </div>
  );
}
