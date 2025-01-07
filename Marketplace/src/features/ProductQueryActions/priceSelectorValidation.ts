import * as yup from 'yup';


const validationSchema = (from: number, to: number)=>yup.object({
    min: yup
        .number()
        .min(from, `Минимальное значение: ${from}`)
        .max(to, `Максимальное значение: ${to}`)
        .required("Это поле обязательно"),
    max: yup
        .number()
        .min(from, `Минимальное значение: ${from}`)
        .max(to, `Максимальное значение: ${to}`)
        .required("Это поле обязательно"),
});

export default validationSchema;
