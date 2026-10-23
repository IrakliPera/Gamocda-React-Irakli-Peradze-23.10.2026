import * as yup from "yup"

const schema = yup.object({
    name: yup.string().required("სახელი სავალდებულოა"),
    email: yup
    .string()
    .email("ელფოსტა არასწორია")
    .required("ელფოსტა სავალდებულოა"),

    password: yup
    .string()
    .min(6, "პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს")
    .required("პაროლი სავალდებულოა")
})
export default schema;