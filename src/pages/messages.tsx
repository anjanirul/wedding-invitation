import style from "@/styles/messages.module.scss";
import { useRouter } from "next/router";

const chatList = [
  {
    name: "Melan",
    message: "Lorerm Ipsum Dolor Happy Wedding Samawa",
    pressence: "yes",
  },
  {
    name: "Melan",
    message: "Lorerm Ipsum Dolor Happy Wedding Samawa",
    pressence: "no",
  },
  {
    name: "Melan",
    message: "Lorerm Ipsum Dolor Happy Wedding Samawa",
    pressence: "",
  },
  {
    name: "Melan",
    message: "Lorerm Ipsum Dolor Happy Wedding Samawa",
    pressence: "yes",
  },
  {
    name: "Melan",
    message: "Lorerm Ipsum Dolor Happy Wedding Samawa",
    pressence: "yes",
  },
  {
    name: "Melan",
    message: "Lorerm Ipsum Dolor Happy Wedding Samawa",
    pressence: "yes",
  },
  {
    name: "Melan",
    message: "Lorerm Ipsum Dolor Happy Wedding Samawa",
    pressence: "yes",
  },
  {
    name: "Melan",
    message: "Lorerm Ipsum Dolor Happy Wedding Samawa",
    pressence: "yes",
  },
  {
    name: "Melan",
    message: "Lorerm Ipsum Dolor Happy Wedding Samawa",
    pressence: "yes",
  },
];

export default function Messages() {
  const { query } = useRouter();
  const guest = query.for;

  return (
    <div className={style.messageSection}>
      <div className={style.inner}>
        <div className="jemina-title mb-6">Salam & Pesan</div>
        <div className={style.chatList}>
          {chatList.map(
            (
              c: { name: string; message: string; pressence: string },
              index
            ) => (
              <div
                key={index}
                className={`${style.chat} ${style[c.pressence]}`}
              >
                <div className="flex items-start justify-between w-full">
                  <div className={style.chatName}>{c.name}</div>
                  <div>
                    {guest === "anjanirul" && <div className={style.status} />}
                  </div>
                </div>
                <div className={style.chatMessage}>{c.message}</div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
