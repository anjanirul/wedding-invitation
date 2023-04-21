export function getStaticProps() {
  return {
    redirect: {
      destination: "/404",
    },
    fallback: true,
    props: {
      status: "no-render",
    },
  };
}

export default function Home() {
  return "";
}
