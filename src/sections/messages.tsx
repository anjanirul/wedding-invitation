import useGetMessage from "@/hooks/useGetMessage";
import style from "@/styles/messages.module.scss";

import { useRouter } from "next/router";
import { ChatItem } from "./chat-item";

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
