import Select from "@/components/select";
import style from "@/styles/presence.module.scss";
import { useState } from "react";

export default function Presence() {
  const [form, setForm] = useState<object>({});

  const submit = (e: any) => {
    e.preventDefault();
    if (Object.values(form).length < 4)
      alert("Mohon melengkapi form terlebih dahulu");
  };

  console.log(form);

  return (
    <div className={style.presence}>
      <div className={style.inner}>
        <div className="jemina-title mb-6">Konfirmasi Kehadiran</div>
        <form className="relative block" onSubmit={submit}>
          <input
            className="input"
            placeholder="Nama"
            onChange={(e) => setForm({ ...form, name: e.target.value || "" })}
          />
          <Select
            onChange={(e) => setForm({ ...form, presence: e })}
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
