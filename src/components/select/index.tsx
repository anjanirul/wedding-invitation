import ArrowDown from "@/icons/arrow-down";
import { useState } from "react";

export default function Select({
  placeholder = "",
  list,
}: {
  placeholder: string;
  list?: Array<object>;
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any>("");

  const toggle = () => setOpen(!open);

  const textDisplay = selected?.label || selected?.value || placeholder;

  return (
    <div className="relative">
      <div className={`select ${open ? "select-open" : ""}`}>
        <button type="button" onClick={toggle} className="select__cta">
          <div className="input__placeholder">{textDisplay}</div>
          <div className="select__arrow">
            <ArrowDown />
          </div>
        </button>
        <div className="select__options">
          {list?.map((i: any) => (
            <button
              className="select__option"
              key={i.value}
              onClick={() => {
                setSelected(i);
                setOpen(false);
              }}
            >
              {i.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
