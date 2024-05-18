import type { Metadata } from "next";

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
  return <>{children}</>;
}
