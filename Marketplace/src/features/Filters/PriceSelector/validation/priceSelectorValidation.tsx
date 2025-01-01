import * as Yup from 'yup';


const validationSchema = (min: number, max: number)=>Yup.object({
    min: Yup.number()
        .min(min, 'Value must be at least 10')
        .max(max, 'Value must not exceed 100'),
    max: Yup.number()
        .min(min, 'Value must be at least 10')
        .max(max, 'Value must not exceed 100'),
});

export default validationSchema;
