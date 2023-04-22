import Loading from "@/components/loading";
import Select from "@/components/select";
import { fallbackCopyTextToClipboard, getSessionTime } from "@/helpers";
import useGetGuests from "@/hooks/useGetGusets";
import supabase from "@/supabase";
import { useState } from "react";
import { useSWRConfig } from "swr";

function GuestBox({ g }: { g: any }) {
  const [onEdit, setEdit] = useState(false);
  const [flag, setFlag] = useState("");
  const [loading, setLoading] = useState(false);
  const { mutate } = useSWRConfig();

  const doDelete = async () => {
    setLoading(true);
    const { status } = await supabase().from("invited").delete().eq("id", g.id);
    if (status === 204) {
      alert("Undangan berhasil dihapus");
      mutate("/api/get-guest");
      setFlag("deleted");
    } else alert("Undangan gagal dihapus");
    setLoading(false);
  };

  if (flag === "deleted") return <></>;
  else if (onEdit)
    return (
      <div className="relative border rounded-md mb-4 p-4">
        <FormWriteInvitation
          editMode
          values={{ name: g.name, path: g.path, session: g.session, id: g.id }}
          onClose={() => setEdit(false)}
        />
      </div>
    );

  return (
    <div className="relative border rounded-md mb-4 p-4">
      <div className="flex">
        <div className="w-1/5">Link</div>
        <div className="w-4/5 line-clamp-1">
          <div>: anjanidanirul.com/{g.path}</div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/5">Nama</div>
        <div className="w-4/5">{g.name}</div>
      </div>
      <div className="flex">
        <div className="w-1/5">Sesi</div>
        <div className="w-4/5">: {getSessionTime(g.session)}</div>
      </div>
      <div className="flex">
        <div className="w-1/5"></div>
        <div className="w-4/5 flex gap-2 pt-3">
          <button
            type="button"
            className="btn-white"
            onClick={() => {
              fallbackCopyTextToClipboard(`anjanidanirul.com/${g.path}`);
              alert("Link berhasil disalin");
            }}
            disabled={loading}
          >
            COPY
          </button>
          <button
            type="button"
            className="btn-white"
            onClick={() => setEdit(true)}
            disabled={loading}
          >
            EDIT
          </button>
          <button
            type="button"
            className="btn-white red"
            onClick={doDelete}
            disabled={loading}
          >
            {loading ? <Loading /> : "REMOVE"}
          </button>
        </div>
      </div>
    </div>
  );
}

function FormWriteInvitation({
  editMode = false,
  values = {},
  onClose,
}: {
  values?: any;
  editMode?: boolean;
  onClose?: () => void;
}) {
  const { mutate } = useSWRConfig();

  const [form, setForm] = useState<any>(values);
  const [isloading, setLoading] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (Object.values(form).length < 3) alert("Form belum lengkap");
    else {
      const body = { ...form, session: form.session.value };
      setLoading(true);
      let api = () => supabase().from("invited").insert(body);
      if (editMode)
        api = () => supabase().from("invited").update(body).eq("id", form.id);
      const { status, error } = await api();
      if (status === 201 || (editMode && status === 204)) {
        alert("Link tamu baru berhasil dibuat");
        mutate("/api/get-guest");
        let els: any = document.getElementById("formCreate");
        if (els) els.reset();
        if (onClose) onClose();
      } else alert(`Link tamu gagal dibuat --- ${error?.message}`);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} id="formCreate">
      <input
        className="input"
        placeholder="Nama"
        onChange={(e) => setForm({ ...form, name: e.target.value || "" })}
        disabled={isloading}
        value={form.name || ""}
      />
      <input
        className="input"
        placeholder="link"
        onChange={(e) => setForm({ ...form, path: e.target.value || "" })}
        disabled={isloading}
        value={form.path || ""}
      />
      <Select
        onChange={(e) => setForm({ ...form, session: e })}
        disabled={isloading}
        placeholder="Pilih Sesi"
        value={form.session || ""}
        list={[
          { value: "pg", label: "11.00 - 13.00" },
          { value: "sg", label: "13.30 - 15.30" },
        ]}
      />
      <div className="flex justify-center">
        {isloading ? (
          <Loading />
        ) : (
          <div className="flex gap-2 w-full">
            {editMode && (
              <button type="button" className="btn-white red" onClick={onClose}>
                Batal
              </button>
            )}
            <button className="btn-white">Buat Link</button>
          </div>
        )}
      </div>
    </form>
  );
}

export default function InvitingArea() {
  const { guest, loading, isValidating } = useGetGuests();
  let guestList = guest || [];

  return (
    <div className="max-w-lg mx-auto">
      <div className="mb-32 py-10">
        <div className="jemina-title mb-10">Buat Link Undangan</div>
        <FormWriteInvitation />
      </div>
      <div className="mb-32 py-10">
        <div className="jemina-title mb-10">Yang sudah diundang:</div>
        {(loading || isValidating) && (
          <div className="my-5 flex justify-center">
            <Loading />
          </div>
        )}
        {guestList.map((g: any) => (
          <GuestBox key={g.id} g={g} />
        ))}
      </div>
    </div>
  );
}
