import styles from "@/css/components/forms/_input.module.css";

import clsx from "clsx";

export default function Input({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <input
      id={props.name}
      className={clsx("form__input", styles.input)}
      {...props}
    />
  );
}
