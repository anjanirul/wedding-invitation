import { useState } from "react";

export default function Textarea({
  placeholder,
  onChange,
}: {
  placeholder: string;
  onChange: (e: any) => void;
}) {
  const [value, setValue] = useState("");
  const change = (e: any) => {
    setValue(e.target.value || "");
    onChange(e);
  };
  return (
    <textarea
      className={`textarea ${value.length > 20 ? "textarea__heighted" : ""}`}
      placeholder={placeholder}
      onChange={change}
      value={value}
    ></textarea>
  );
}
