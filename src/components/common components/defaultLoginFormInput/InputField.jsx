import React from "react";
import s from './InputField.module.css';

const InputField = ({ id, name, type, placeholder, handleChange, handleBlur, errors, touched, values, text }) => {
    return (
        <span className={s.InputField}>
            <label htmlFor={type}>{text} </label>
            <input
                id={id}
                name={name}
                type={type}
                onChange={handleChange}
                value={values[name]}
                placeholder={placeholder}
                onBlur={handleBlur}
                className={errors[name] && touched[name] ? s.inputError : ''} />
            {errors[name] && touched[name] && <p className={s.errorMessage}>{errors[name]}</p>}
        </span>
    );
};

export default InputField;