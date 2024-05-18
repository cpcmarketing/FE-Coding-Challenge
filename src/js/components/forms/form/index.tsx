import styles from "@/css/components/forms/_index.module.css";

import clsx from "clsx";

export default function Form({
  children,
  ...props
}: React.FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form {...props} className={clsx("form", styles.form)}>
      {children}
    </form>
  );
}
