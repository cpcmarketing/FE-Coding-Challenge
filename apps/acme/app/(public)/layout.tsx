import type { Metadata } from "next";

import SiteHeader from "@/js/components/site-header";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: {
    template: "Acme | %s",
    default: "Acme",
  },
};

export default async function PublicLayout({ children }: Props) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
}
