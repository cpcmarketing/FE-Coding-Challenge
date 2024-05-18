import styles from "@/css/components/site-header/_index.module.css";

import clsx from "clsx";

import Logo from "@/js/components/site-header/components/logo";
import Navigation from "@/js/components/site-header/components/navigation";

type Props = {};

export default function SiteHeader(props: Props) {
  return (
    <header className={clsx("site-header", styles.siteHeader)}>
      <div
        className={clsx("site-header__container", styles.siteHeaderContainer)}
      >
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
