import Menu from "@/js/components/site-header/components/menu";

type Props = {};

export default function Navigation(props: Props) {
  return (
    <nav className="site-header__nav" aria-label="Main Navigation">
      <Menu />
    </nav>
  );
}
