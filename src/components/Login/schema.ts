import * as yup from "yup";

export const LoginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8, "Deve ter pelo menos 8 caracteres").required(),
});

export type LoginSchemaType = yup.InferType<typeof LoginSchema>;
