import * as yup from "yup";

export const signupSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8, "Deve ter pelo menos 8 caracteres").required(),
});

export type SignUpSchemaType = yup.InferType<typeof signupSchema>;
