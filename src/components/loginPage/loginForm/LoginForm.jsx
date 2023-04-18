import React from "react";
import { useFormik } from 'formik';
import { basicLoginSchema } from "../../../schemas/yupSchema";
import s from './LoginForm.module.css';
import InputField from "../../common components/defaultLoginFormInput/InputField";

export const LoginForm = ({ login, captchaURL }) => {

    const onSubmit = (values, { setSubmitting, setStatus }) => {
        setSubmitting(true);
        login(values.email, values.password, values.rememberMe, values.captcha, setStatus, setSubmitting);
        /*   resetForm(); */
    };

    const { values, status, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: true,
            captcha: '',
        },
        validationSchema: basicLoginSchema,
        onSubmit,
    });

    return (
        <div>
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
                {
                    captchaURL &&
                    <div>
                        <img alt='captcha' src={captchaURL} />
                        <InputField
                            id="captcha"
                            name="captcha"
                            type="text"
                            placeholder={"Input picture values"}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            errors={errors}
                            touched={touched}
                            values={values}
                        />
                    </div>
                }
                <button disabled={isSubmitting} type="submit">Sign Up</button>
            </form>
            <div>
                <p>Access Login: <strong>free@samuraijs.com</strong></p>
                <p>Access Password: <strong>free</strong></p>
            </div>
        </div>
    );
};
