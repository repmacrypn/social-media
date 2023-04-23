import React from "react";
import s from './AddPostForm.module.css';
import '../../../../common_styles/button.css';
import { useFormik } from "formik";
import { basicAddPostSchema } from "../../../../schemas/yupSchema";
import InputField from "../../../common components/defaultLoginFormInput/InputField";

export const AddPostForm = ({ addPost }) => {
    const onSubmit = (values, actions) => {
        addPost(values.addPostField);
        actions.resetForm();
    };

    const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            addPostField: '',
        },
        validationSchema: basicAddPostSchema,
        onSubmit,
    });

    return (
        <form className={s.formWrapper} onSubmit={handleSubmit} autoComplete="off">
            <InputField
                id="addPostField"
                name="addPostField"
                type="textarea"
                placeholder={"Share your news:)"}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
                values={values}
            />
            <div className={s.buttonField}>
                <button
                    className='defaultWebsitebutton'
                    disabled={isSubmitting}
                    type="submit">Add post</button>
            </div>
        </form>
    );
};
