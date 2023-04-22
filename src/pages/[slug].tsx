import supabase from "@/supabase";
import Home from ".";

export async function getStaticPaths() {
  const { data } = await supabase().from("invited").select();

  let userdata = data || [];

  return {
    paths: [
      { params: { slug: "pg" } },
      { params: { slug: "sg" } },
      ...userdata.map((i: any) => ({ params: { slug: i.path } })),
    ],
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const slug = context.params.slug;
  // console.log("STATIC: ", slug);
  if (slug !== "pg" && slug !== "sg") {
    const { data } = await supabase().from("invited").select().eq("path", slug);

    if (data && data.length < 1)
      return {
        redirect: { destination: "/404", permanent: false },
      };

    return {
      props: { slug, user: data?.[0] },
    };
  }

  return {
    props: { slug, user: null },
    revalidate: 30,
  };
}

export default function SubSlug({ slug, user }: { slug: string; user: any }) {
  return <Home slug={slug} user={user} />;
}
