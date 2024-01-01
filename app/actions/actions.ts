"use server";

import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(5).email(),
  message: z.string().min(10),
});

export async function sendMesssage(formData: FormData) {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const { name, email, message } = FormSchema.parse(rawFormData);

  // POST DATA
}
