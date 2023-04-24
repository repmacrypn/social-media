import React from "react";
import '../../../../common_styles/button.css';
import { useFormik } from "formik";
import { basicAddMessageSchema } from "../../../../schemas/yupSchema";
import InputField from "../../../common components/defaultLoginFormInput/InputField";
import { DefautButton } from "../../../profile/posts/profileInfo/userInfoForm/UserInfoForm";
import s from './AddMessageForm.module.css'

const AddMessageForm = ({ addMessage }) => {

    const onSubmit = (values, actions) => {
        addMessage(values.addMessageField);
        actions.resetForm();
    };

    const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            addMessageField: '',
        },
        validationSchema: basicAddMessageSchema,
        onSubmit,
    });

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <div className={s.inputWrapper}>
                <InputField
                    id="addMessageField"
                    name="addMessageField"
                    type="text"
                    placeholder={"Your message:)"}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                    values={values}
                />
            </div>
            <DefautButton text='Send message!' isSubmitting={isSubmitting} />
        </form>
    );
};

export default AddMessageForm;
