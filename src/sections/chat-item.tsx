import supabase from "@/supabase";
import { useState } from "react";
import style from "@/styles/messages.module.scss";

export const ChatItem = ({
  name,
  message,
  presence,
  showStatus,
  slug,
  showGName,
  id,
  is_deleted,
  showRemove,
}: {
  name: string;
  message: string;
  presence: boolean;
  showStatus: boolean;
  slug: string;
  showGName: boolean;
  id: string;
  is_deleted: boolean;
  showRemove: boolean;
}) => {
  const [deleted, setDeleted] = useState(false);

  const confirmRemove = async () => {
    if (confirm(`Apa anda ingin menghapus pesan dari ${name}(${slug})?`)) {
      setDeleted(true);
      console.log("DELETED");
      return await supabase()
        .from("messages")
        .update({ is_deleted: true })
        .eq("id", id);
    }
    return console.log("NO DELETING");
  };

  if (deleted) return <></>;
  return (
    <div className={`${style.chat} ${style[presence ? "yes" : "no"]}`}>
      <div className="flex items-start justify-between w-full mb-4">
        <div>
          <div className={style.chatName}>{name}</div>
          {showGName && <div className="text-xs">{slug}</div>}
        </div>
        <div>{showStatus && <div className={style.status} />}</div>
      </div>
      <div className={style.chatMessage}>{message}</div>
      {showRemove && (
        <div className="mt-4">
          <button
            type="button"
            className="btn-white btn-sm red text-xs"
            onClick={confirmRemove}
            disabled={is_deleted}
          >
            REMOVE
          </button>
        </div>
      )}
    </div>
  );
};
