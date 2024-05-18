import Form from "@/js/components/forms/form";
import Username from "@/js/components/forms/login/components/username";
import Password from "@/js/components/forms/login/components/password";
import Submit from "@/js/components/forms/form/components/submit";

export default function LoginForm() {
  return (
    <Form>
      <Username />
      <Password />
      <Submit />
    </Form>
  );
}
