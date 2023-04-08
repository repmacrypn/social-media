import React from "react";
import s from './InputField.module.css';

const InputField = ({ id, name, type, placeholder, handleChange, handleBlur, errors, touched, values }) => {
    return (
        <div className={s.InputField}>
            <label htmlFor={type}>Email </label>
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
        </div>
    );
};

export default InputField;