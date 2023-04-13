import React from "react";
import { useFormik } from 'formik';
import { basicLoginSchema } from "../../../schemas/yupSchema";
import s from './LoginForm.module.css';
import InputField from "../../common components/defaultLoginFormInput/InputField";

export const LoginForm = ({ login }) => {

    const onSubmit = (values, { setSubmitting, setStatus, resetForm }) => {
        setSubmitting(true);
        login(values.email, values.password, values.rememberMe, setStatus, setSubmitting);
        /*   resetForm(); */
    };

    const { values, status, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: true,
        },
        validationSchema: basicLoginSchema,
        onSubmit,
    });

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <InputField
                id="email"
                name="email"
                type="email"
                placeholder={"Enter your email"}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
                values={values}
                text="Email"
            />
            <InputField
                id="password"
                name="password"
                type="password"
                placeholder={"Enter your password"}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
                values={values}
                text="Password"
            />
            {
                status &&
                <div className={s.errorMessage}>
                    {status}
                </div>
            }
            <div className={s.checkBoxField}>
                <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    onChange={handleChange}
                    checked={values.rememberMe}
                    onBlur={handleBlur}
                    className={errors.rememberMe && touched.rememberMe ? s.inputError : ''} /> Remember Me?
            </div>
            <button disabled={isSubmitting} type="submit">Sign Up</button>
        </form>
    );
};
