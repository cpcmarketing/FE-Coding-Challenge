import { Metadata } from "next";

import LoginForm from "@/js/components/forms/login";
import Main from "@/js/components/main";

export const metadata: Metadata = {
  title: "About",
};

export default function Login() {
  return (
    <Main>
      <LoginForm />
    </Main>
  );
}
