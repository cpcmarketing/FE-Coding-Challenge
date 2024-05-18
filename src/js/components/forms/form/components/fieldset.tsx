import styles from "@/css/components/forms/_fieldset.module.css";

import clsx from "clsx";

export default function Fieldset({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.FieldsetHTMLAttributes<HTMLFieldSetElement>,
  HTMLFieldSetElement
>) {
  return (
    <fieldset className={clsx("form__fieldset", styles.fieldset)} {...props}>
      {children}
    </fieldset>
  );
}
