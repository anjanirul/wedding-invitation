export function getStaticProps() {
  return {
    redirect: {
      destination: "/404",
    },
    props: {
      status: "no-render",
    },
  };
}

export default function Home() {
  return "";
}
