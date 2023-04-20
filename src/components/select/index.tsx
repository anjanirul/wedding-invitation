import ArrowDown from "@/icons/arrow-down";
import { useState } from "react";

export default function Select({
  placeholder = "",
  list,
  onChange,
}: {
  placeholder: string;
  list?: Array<object>;
  onChange?: (arg: any) => void;
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
              type="button"
              className="select__option"
              key={i.value}
              onClick={() => {
                setSelected(i);
                if (typeof onChange === "function") onChange(i);
                setOpen(false);
              }}
            >
              <span>{i.label}</span>
              {i.value === selected.value && (
                <div className="relative">
                  <span className="absolute left-0 top-0 w-2 h-2 bg-white rounded-full"></span>
                  <span className="absolute left-0 top-0 w-2 h-2 border border-white rounded-full animate-ping"></span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
