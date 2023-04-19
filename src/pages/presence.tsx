import style from "@/styles/presence.module.scss";

export default function Presence() {
  const submit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className={style.presence}>
      <div className={style.inner}>
        <div className="jemina-title mb-6">Konfirmasi Kehadiran</div>
        <form className="relative block" onSubmit={submit}>
          <input className={style.input} placeholder="Nama" />
          <input
            className={style.input}
            placeholder="Apakah anda akan hadir?"
          />
          <input className={style.input} placeholder="Tulis Salam & Pesan" />
          <button className="btn-white">Kirim</button>
        </form>
      </div>
    </div>
  );
}
