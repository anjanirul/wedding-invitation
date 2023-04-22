import ArrowDown from "@/icons/arrow-down";
import { useState } from "react";

export default function Select({
  placeholder = "",
  list,
  onChange,
  disabled,
  value,
}: {
  placeholder: string;
  list?: Array<object>;
  onChange?: (arg: any) => void;
  disabled?: boolean;
  value?: any;
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any>(
    list?.find((i: any) => i.value === value) || ""
  );

  const toggle = () => {
    if (!disabled) setOpen(!open);
  };
  const close = () => {
    if (!disabled) setOpen(false);
  };
  const doOpen = () => {
    if (!disabled) setOpen(true);
  };

  const textDisplay = selected?.label || selected?.value || placeholder;

  return (
    <div className="relative">
      <div
        className={`select ${open ? "select-open" : ""} ${
          disabled ? "disabled" : ""
        }`}
        onBlur={close}
      >
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
                let els: any = document.querySelector(":focus");
                if (els) els.blur();
              }}
            >
              <div>{i.label}</div>
              {i.value === selected.value && (
                <div>
                  <span></span>
                  <span></span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
