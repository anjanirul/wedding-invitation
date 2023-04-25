import useGetMessage from "@/hooks/useGetMessage";
import style from "@/styles/messages.module.scss";
import supabase from "@/supabase";
import { useRouter } from "next/router";
import { useState } from "react";

const ChatItem = ({
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

export default function Messages(props: any) {
  const { query } = useRouter();
  const guest = query.tamu;

  const { messages = [] } = useGetMessage();

  return (
    <div className={style.messageSection}>
      <div className={style.inner}>
        <div className="jemina-title mb-6">Salam & Pesan</div>
        <div className={style.chatList}>
          {messages?.map((c: any, index: number) => (
            <ChatItem
              key={index}
              {...c}
              showStatus={guest === "anjanirul"}
              showGName={guest === "anjanirul"}
              showRemove={guest === "anjanirul"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
