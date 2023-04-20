import Select from "@/components/select";
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
          <input className="input" placeholder="Nama" />
          <Select
            placeholder="Apakah anda akan hadir?"
            list={[
              { value: "yes", label: "Ya, Saya akan hadir" },
              { value: "no", label: "Maaf, Saya tidak bisa hadir" },
            ]}
          />
          <input className="input" placeholder="Tulis Salam & Pesan" />
          <button className="btn-white">Kirim</button>
        </form>
      </div>
    </div>
  );
}
