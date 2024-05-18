import Fieldset from "@/js/components/forms/form/components/fieldset";
import Input from "@/js/components/forms/form/components/input";
import Label from "@/js/components/forms/form/components/label";

export default function Username() {
  return (
    <Fieldset>
      <Label htmlFor="username" text="Username" />
      <Input type="text" name="username" />
    </Fieldset>
  );
}
