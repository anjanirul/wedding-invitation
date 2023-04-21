import style from "@/styles/messages.module.scss";
import { useRouter } from "next/router";

const ChatItem = ({
  name,
  message,
  presence,
  showStatus,
}: {
  name: string;
  message: string;
  presence: boolean;
  showStatus: boolean;
}) => {
  return (
    <div className={`${style.chat} ${style[presence ? "yes" : "no"]}`}>
      <div className="flex items-start justify-between w-full">
        <div className={style.chatName}>{name}</div>
        <div>{showStatus && <div className={style.status} />}</div>
      </div>
      <div className={style.chatMessage}>{message}</div>
    </div>
  );
};

export default function Messages(props: any) {
  const { query } = useRouter();
  const guest = query.tamu;

  return (
    <div className={style.messageSection}>
      <div className={style.inner}>
        <div className="jemina-title mb-6">Salam & Pesan</div>
        <div className={style.chatList}>
          {props.messages?.map((c: any, index: number) => (
            <ChatItem key={index} {...c} showStatus={guest === "anjanirul"} />
          ))}
        </div>
      </div>
    </div>
  );
}
