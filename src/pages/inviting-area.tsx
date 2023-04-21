import Loading from "@/components/loading";
import Select from "@/components/select";
import { getSessionTime } from "@/helpers";
import useGetGuests from "@/hooks/useGetGusets";
import supabase from "@/supabase";
import { useState } from "react";
import { useSWRConfig } from "swr";

export default function InvitingArea() {
  const { guest, loading, isValidating } = useGetGuests();
  const { mutate } = useSWRConfig();
  let guestList = guest || [];

  const [form, setForm] = useState<any>({});
  const [isloading, setLoading] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (Object.values(form).length < 3) alert("Form belum lengkap");
    else {
      const body = { ...form, session: form.session.value };
      setLoading(true);
      const { status, error } = await supabase().from("invited").insert(body);
      if (status === 201) {
        alert("Link tamu baru berhasil dibuat");
        mutate("/api/get-guest");
        let els: any = document.getElementById("formCreate");
        if (els) els.reset();
      } else alert(`Link tamu gagal dibuat --- ${error?.message}`);
      setLoading(false);
      console.log("WRITE: ", body);
    }
  };

  function fallbackCopyTextToClipboard(text: string) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "successful" : "unsuccessful";
      console.log("Fallback: Copying text command was " + msg);
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }

    document.body.removeChild(textArea);
  }
  function copyTextToClipboard(text: string) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(
      function () {
        console.log("Async: Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      <div className="mb-32 py-10">
        <div className="jemina-title mb-10">Buat Link Undangan</div>
        <form onSubmit={onSubmit} id="formCreate">
          <input
            className="input"
            placeholder="Nama"
            onChange={(e) => setForm({ ...form, name: e.target.value || "" })}
            disabled={isloading}
          />
          <input
            className="input"
            placeholder="link"
            onChange={(e) => setForm({ ...form, path: e.target.value || "" })}
            disabled={isloading}
          />
          <Select
            onChange={(e) => setForm({ ...form, session: e })}
            disabled={isloading}
            placeholder="Pilih Sesi"
            list={[
              { value: "pg", label: "11.00 - 13.00" },
              { value: "sg", label: "13.30 - 15.30" },
            ]}
          />
          <div className="flex justify-center">
            {isloading ? (
              <Loading />
            ) : (
              <button className="btn-white">Buat Link</button>
            )}
          </div>
        </form>
      </div>
      <div className="mb-32 py-10">
        <div className="jemina-title mb-10">Yang sudah diundang:</div>
        {(loading || isValidating) && (
          <div className="my-5 flex justify-center">
            <Loading />
          </div>
        )}
        {guestList.map((g: any) => (
          <div key={g.id} className="relative border rounded-md mb-4 p-4">
            <div className="flex">
              <div className="w-1/5">Link</div>
              <div className="w-4/5 line-clamp-1">
                : anjanidanirul.com/{g.path}
              </div>
            </div>
            <div className="flex">
              <div className="w-1/5">Nama</div>
              <div className="w-4/5">: {g.name}</div>
            </div>
            <div className="flex">
              <div className="w-1/5">Sesi</div>
              <div className="w-4/5">: {getSessionTime(g.session)}</div>
            </div>
            <div className="absolute right-3 top-3">
              <button
                type="button"
                className="bg-white text-black text-sm py-1 px-2 rounded-md active:scale-75 transition-all duration-150"
                onClick={() => {
                  fallbackCopyTextToClipboard(`anjanidanirul.com/${g.path}`);
                  alert("Link berhasil disalin");
                }}
              >
                COPY
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
