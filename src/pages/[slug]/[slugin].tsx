import SubSlug from ".";
import supabase from "@/supabase";
import { useRouter } from "next/router";
import Loading from "@/components/loading";

export async function getStaticPaths() {
  const { data } = await supabase().from("invited").select();

  return {
    paths: [
      { params: { slug: "pg", slugin: "" } },
      { params: { slug: "sg", slugin: "" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const slug = context.params.slug;
  const slugin = context.params.slugin;

  if (slugin) {
    const { data } = await supabase()
      .from("invited")
      .select()
      .eq("path", slugin);

    if (data) {
      if (data.length < 1)
        return {
          redirect: { destination: "/404", permanent: false },
        };
      else if (data.length > 0)
        return {
          props: { slug: slugin, user: data?.[0] },
        };
    }
  }

  return {
    props: { slug },
    revalidate: 30,
  };
}

export default function Slugin(props: any) {
  const router = useRouter();
  if (router.isFallback)
    return (
      <div className="flex items-center justify-center">
        <Loading />
      </div>
    );
  return <SubSlug slug={props.slug} user={props.user} />;
}
