import styles from "@/css/components/forms/_label.module.css";

import clsx from "clsx";

export default function Label({
  text,
  ...props
}: React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & {
  text: string;
}) {
  return (
    <label className={clsx("form__label", styles.label)} {...props}>
      {text}
    </label>
  );
}
