import Link from "next/link";

type Props = {};

export default function Menu(props: Props) {
  return (
    <ul className="site-header__nav__menu" id="main-navigation" role="menu">
      <li className="site-header__nav__menu__item" role="presentation">
        <Link href="/" className="site-header__nav__menu__link" role="menuitem">
          Home
        </Link>
      </li>
    </ul>
  );
}
