"use client";

import Form from "@/js/components/forms/form";
import Username from "@/js/components/forms/login/components/username";
import Password from "@/js/components/forms/login/components/password";
import Submit from "@/js/components/forms/form/components/submit";

import { Formik } from "formik";

type Values = {
  username: string;
  password: string;
};

export default function LoginForm() {
  // @todo: add error message for invalid username/password
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={async (values: Values) => {
        // @todo: wire-up back-end submission
      }}
    >
      <Form>
        <Username />
        <Password />
        <Submit />
      </Form>
    </Formik>
  );
}
