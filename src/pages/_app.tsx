import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localfont from "next/font/local";
import { Bellefair, Lavishly_Yours } from "next/font/google";

const fontBelle = Bellefair({
  subsets: ["latin"],
  variable: "--font-belle",
  weight: ["400"],
});
const fontLavish = Lavishly_Yours({
  subsets: ["latin"],
  variable: "--font-lavishy",
  weight: ["400"],
});
const jemina = localfont({
  src: [
    {
      path: "./fonts/jemina/jemina-bold.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-jemina",
});

export default function App({ Component, pageProps }: AppProps) {
  const fontClass = `${fontBelle.variable} ${fontLavish.variable} ${jemina.variable}`;
  return (
    <main className={fontClass}>
      <Component {...pageProps} />
    </main>
  );
}
