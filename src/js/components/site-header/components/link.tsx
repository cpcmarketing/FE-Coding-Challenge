import NextLink from "next/link";

type Props = {};

export default function Link(props: Props) {
  return (
    <NextLink href="/" className="site-header__logo__link">
      <span className="sr-only">Acme</span>
    </NextLink>
  );
}
