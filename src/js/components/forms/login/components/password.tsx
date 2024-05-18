import Fieldset from "@/js/components/forms/form/components/fieldset";
import Input from "@/js/components/forms/form/components/input";
import Label from "@/js/components/forms/form/components/label";

export default function Password() {
  return (
    <Fieldset>
      <Label htmlFor="password" text="Password" />
      <Input type="password" name="password" />
    </Fieldset>
  );
}
