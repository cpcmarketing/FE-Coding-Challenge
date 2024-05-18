import styles from "@/css/components/forms/_input.module.css";

import clsx from "clsx";

import { useField } from "formik";

export default function Input({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: string;
}) {
  const [field, meta] = useField(props);

  return (
    <>
      <input
        id={props.name}
        className={clsx("form__input", styles.input)}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}
