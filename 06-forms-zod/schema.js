import * as z from 'https://esm.sh/zod@3.23.8';

export const schema = z.object({
    name: z.string()
        .min(3, { message: "El nombre debe tener al menos 3 caracteres" })
        .max(100, { message: "El nombre no puede exceder los 100 caracteres" }),

    email: z.string()
        .email({ message: "El correo electrónico no es válido" }),

    password: z.string()
        .min(8, { message: "El nombre debe tener al menos 8 caracteres" })
        .max(20, { message: "El nombre no puede exceder los 20 caracteres" })
        .regex(/[A-Z]/, { message: "Debe contener al menos una letra mayúscula" })
        .regex(/[a-z]/, { message: "Debe contener al menos una letra minúscula" })
        .regex(/[0-9]/, { message: "Debe contener al menos un número" }),

    country: z.string()
        .nonempty({ message: "Debe seleccionar un país" }),

    terminos: z.preprocess((val) => val === 'on', z.boolean())
        .refine((val) => val === true, { message: "Debe aceptar los términos y condiciones" })
});