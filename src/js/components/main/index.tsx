import styles from "@/css/components/main/_index.module.css";

import clsx from "clsx";

type Props = {
  children: React.ReactNode;
};

export default function Main(props: Props) {
  return (
    <main className={clsx("site-main", styles.main)}>{props.children}</main>
  );
}
