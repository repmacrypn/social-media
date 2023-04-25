import React from "react";
import { useFormik } from 'formik';
import { basicLoginSchema } from "../../../schemas/yupSchema";
import s from './LoginForm.module.css';
import InputField from "../../common components/defaultLoginFormInput/InputField";
import { ServerErrorMessage } from "../../profile/posts/profileInfo/userInfoForm/UserInfoForm";
import '../../../common_styles/button.css';
import { MainAbstract } from "../../profile/posts/profileInfo/userInfo/UserInfo";

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
        <div className={s.loginPage}>
            <MainAbstract text='Verification' />
            <form className={s.loginFormWrapper} onSubmit={handleSubmit} autoComplete="off">
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
                    text="Email: "
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
                    text="Password: "
                />
                <InputField
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                    values={values}
                    text="Remember Me? "
                />
                <ServerErrorMessage status={status} />
                {
                    captchaURL &&
                    <>
                        <img
                            className={s.loginImage}
                            alt='captcha'
                            src={captchaURL}
                        />
                        <InputField
                            id="captcha"
                            name="captcha"
                            type="text"
                            placeholder={"picture values"}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            errors={errors}
                            touched={touched}
                            values={values}
                            text="Verification code: "
                        />
                    </>
                }
                <button
                    className={`defaultWebsiteButton ${s.loginButton}`}
                    disabled={isSubmitting}
                    type="submit">
                    Sign Up
                </button>
            </form>
            <div className={s.accessDataWrapper}>
                <p className={s.loginAccessField}>Access Email:
                    <span className={s.accessData}> free@samuraijs.com</span>
                </p>
                <p className={s.loginAccessField}>Access Password:
                    <span className={s.accessData}> free</span>
                </p>
            </div>
        </div>
    );
};
