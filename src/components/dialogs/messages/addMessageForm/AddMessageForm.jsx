import React from "react";
import s from './AddMessageForm.module.css';
import { useFormik } from "formik";
import { basicAddMessageSchema } from "../../../../schemas/yupSchema";

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
            <div className={s.textareaField}>
                <textarea
                    name="addMessageField"
                    id="addMessageField"
                    type="textarea"
                    onChange={handleChange}
                    value={values.addMessageField}
                    placeholder="Input your message!"
                    onBlur={handleBlur}
                    className={errors.addMessageField && touched.addMessageField ?
                        s.addMessageFieldError : ''}
                >
                </textarea>
                {errors.addMessageField && touched.addMessageField &&
                    <p className={s.errorMessage}>{errors.addMessageField}</p>}
            </div>
            <div>
                <button disabled={isSubmitting} type="submit">Send Message</button>
            </div>
        </form>
    );
};

export default AddMessageForm;
