export const slugSession = [{ name: "pg" }, { name: "sg" }];

export const getSessionTime = (slug: "sg" | "pg") => {
  if (slug === "sg") return "13.30 - 15.30";
  else return "11.00 - 13.00";
};

export const fetcher = (url: string) =>
  fetch(url, { method: "GET" }).then((res) => res.json());

export function fallbackCopyTextToClipboard(text: string) {
  var textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand("copy");
    var msg = successful ? "successful" : "unsuccessful";
  } catch (err) {
    alert("Fallback: Oops, unable to copy");
  }

  document.body.removeChild(textArea);
}
function copyTextToClipboard(text: string) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(
    function () {
      console.log("Async: Copying to clipboard was successful!");
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
}
