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

  const data = { name, email, message };

  // TODO:error handling
  // Expecting no error.
  await fetch(`${process.env.MESSAGE_POST_API_URL}/api/v1/submissions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
