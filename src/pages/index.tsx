export function getStaticProps() {
  return {
    redirect: {
      destination: "/404",
    },
    fallback: true,
  };
}

export default function Home({}) {
  return "";
}
