import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import localfont from "next/font/local";
import { Lavishly_Yours, Halant } from "next/font/google";
import Head from "next/head";

const fontLavish = Lavishly_Yours({
  subsets: ["latin"],
  variable: "--font-lavishy",
  weight: ["400"],
});
const fontHalant = Halant({
  subsets: ["latin"],
  variable: "--font-halant",
  weight: ["400", "600"],
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
  const fontClass = `relative ${fontLavish.variable} ${fontJemina.variable} ${fontHalant.variable}`;

  const title = "Anjani & Irul Invitation";
  const description =
    "Dengan segala kerendahan hati dan ucapan syukur atas rahmat Allah subhanahu wa ta’ala, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://anjanidanirul.com/thumbnail.jpg"
        />
      </Head>
      <main className={fontClass}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
