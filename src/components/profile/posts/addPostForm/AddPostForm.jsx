import React from "react";
import s from './AddPostForm.module.css';
import { useFormik } from "formik";
import { basicAddPostSchema } from "../../../../schemas/yupSchema";

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
        <form onSubmit={handleSubmit} autoComplete="off">
            <div className={s.textareaField}>
                <textarea
                    name="addPostField"
                    id="addPostField"
                    type="textarea"
                    onChange={handleChange}
                    value={values.addPostField}
                    placeholder="Share your news:)"
                    onBlur={handleBlur}
                    className={errors.addPostField && touched.addPostField ? s.addPostFieldError : ''}
                >
                </textarea>
                {errors.addPostField && touched.addPostField && <p className={s.errorMessage}>{errors.addPostField}</p>}
            </div>
            <div>
                <button disabled={isSubmitting} type="submit">add post</button>
            </div>
        </form>
    );
};
