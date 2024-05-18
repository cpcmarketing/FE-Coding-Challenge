import styles from "@/css/components/forms/_button.module.css";

import clsx from "clsx";

export default function Fieldset({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button
      type="button"
      className={clsx("form__button", styles.button)}
      {...props}
    >
      {children}
    </button>
  );
}
