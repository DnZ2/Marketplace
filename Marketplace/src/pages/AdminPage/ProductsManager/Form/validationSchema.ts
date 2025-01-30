import * as yup from "yup";

const adminFormSchema = yup
    .object({
        title: yup.string().required("Title is required"),
        category: yup.string().required("Category is required"),
        price: yup.number().required("Price is required"),
        maxQuantity: yup.number().required("Quantity is required"),
        discount: yup.number().min(0).max(90),
        description: yup
            .string()
            .max(1000, "Maximum 1000 characters")
            .default(""),
    })
    .required();
export default adminFormSchema;
