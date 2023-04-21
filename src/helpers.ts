export const slugSession = [{ name: "pg" }, { name: "sg" }];

export const getSessionTime = (slug: "sg" | "pg") => {
  if (slug === "sg") return "13.30 - 15.30";
  else return "11.00 - 13.00";
};
