import Loading from "@/components/loading";
import Select from "@/components/select";
import Textarea from "@/components/textarea";
import style from "@/styles/presence.module.scss";
import supabase from "@/supabase";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSWRConfig } from "swr";

export default function Presence({ slug }: any) {
  const [form, setForm] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState("");

  const { query } = useRouter();
  const { mutate } = useSWRConfig();

  const submit = async (e: any) => {
    e.preventDefault();
    if (Object.values(form).length < 3)
      alert("Mohon melengkapi form terlebih dahulu");
    else {
      const body = {
        ...form,
        presence: form.presence.value === "yes",
        slug,
        given_name: query.tamu,
      };
      setLoading(true);
      const { status } = await supabase().from("messages").insert(body);
      mutate("/api/get-messages");
      setTimeout(() => {
        setLoading(false);
        setStatus(status === 201 ? "success" : "error");
      }, 1000);
    }
  };

  let statusMessage: any = "Pesan kamu sedang dikirim...";
  if (status === "success")
    statusMessage = (
      <>
        <div className="text-3xl">🥳</div>
        <div>Terimakasih! Pesan kamu berhasil terkirim</div>
      </>
    );
  else if (status === "error")
    statusMessage = (
      <>
        <div className="text-3xl">😥</div>
        <div>Maaf, pesan kamu gagal terkirim</div>
        <button className="mt-4 btn-white" onClick={() => setStatus("")}>
          Coba Lagi
        </button>
      </>
    );

  return (
    <div className={style.presence}>
      <div className={style.inner}>
        <div className="jemina-title mb-6">Konfirmasi Kehadiran</div>
        <form className="relative block" onSubmit={submit}>
          <input
            className="input"
            placeholder="Nama"
            onChange={(e) => setForm({ ...form, name: e.target.value || "" })}
            disabled={loading}
          />
          <Select
            onChange={(e) => setForm({ ...form, presence: e })}
            placeholder="Apakah anda akan hadir?"
            list={[
              { value: "yes", label: "Ya, Saya akan hadir" },
              { value: "no", label: "Maaf, Saya tidak bisa hadir" },
            ]}
            disabled={loading}
          />
          <Textarea
            placeholder="Tulis Salam & Pesan"
            onChange={(e) =>
              setForm({ ...form, message: e.target.value || "" })
            }
            disabled={loading}
          />
          <button className="btn-white" disabled={loading}>
            Kirim
          </button>
          <div
            className={`absolute left-0 top-0 bg-black w-full h-full flex justify-center flex-col items-center ${
              loading || status
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {loading && !status && <Loading />}
            <div className="mt-4">{statusMessage}</div>
          </div>
        </form>
      </div>
    </div>
  );
}
