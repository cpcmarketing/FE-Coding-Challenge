export default async function validate(formData: any) {
  const errors: any = {};

  if (!formData.username) {
    errors.username = "Required";
  }

  if (!formData.password || formData.password === "password") {
    errors.password = "Required";
  }

  return errors;
}
