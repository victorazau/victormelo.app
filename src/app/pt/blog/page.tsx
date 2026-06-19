import type { Metadata } from "next";
import { indexMetadata, IndexPageShell } from "@/lib/blogShells";

export const metadata: Metadata = indexMetadata("pt");

export default function Page() {
  return <IndexPageShell locale="pt" />;
}
