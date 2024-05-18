import styles from "@/css/components/main/_index.module.css";

import { Metadata } from "next";

import clsx from "clsx";

import LoginForm from "@/js/components/forms/login";

export const metadata: Metadata = {
  title: "About",
};

export default function Login() {
  return (
    <main className={clsx("site-main", styles.main)}>
      <LoginForm />
    </main>
  );
}
