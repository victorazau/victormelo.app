import type { Metadata } from "next";
import { slugParams, postMetadata, PostPageShell } from "@/lib/blogShells";

export function generateStaticParams() {
  return slugParams("es");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return postMetadata(slug, "es");
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PostPageShell slug={slug} locale="es" />;
}
