import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localfont from "next/font/local";
import { Bellefair, Lavishly_Yours } from "next/font/google";
import Head from "next/head";

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
const fontJemina = localfont({
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
  const fontClass = `${fontBelle.variable} ${fontLavish.variable} ${fontJemina.variable}`;
  return (
    <>
      <Head>
        <title>Anjani & Irul Invitation</title>
        <meta
          name="description"
          content="Dengan segala kerendahan hati dan ucapan syukur atas rahmat Allah subhanahu wa ta’ala, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami"
        />
      </Head>
      <main className={fontClass}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
