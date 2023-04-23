import React from "react";
import s from '../../../components/profile/posts/profileInfo/userInfo/UserInfo.module.css';
import '../../../common_styles/validationErrors.css';
import '../../../common_styles/input.css';

const InputField = ({ id, name, type,
    placeholder = null, handleChange, handleBlur,
    errors, touched, values, text = '' }) => {
    let elem;

    switch (type) {
        case "checkbox": {
            elem = <input
                id={id}
                name={name}
                type={type}
                onChange={handleChange}
                checked={values[name]}
                placeholder={placeholder}
                onBlur={handleBlur}
            />;
            break;
        }

        case 'text':
        case 'textarea':
        default:
            elem = <input
                id={id}
                name={name}
                type={type}
                onChange={handleChange}
                value={values[name]}
                placeholder={placeholder}
                onBlur={handleBlur}
                className={errors[name] && touched[name] ? 'inputError' : 'inputField'}
                maxLength={49}
            />;
            break;
    }
    return (
        <div className={s.profileInfoList}>
            <label
                className={s.title}
                htmlFor={type}>
                {text}
            </label>
            {elem}
            {errors[name] && touched[name] &&
                <div className='errorMessage'>{errors[name]}</div>}
        </div>
    );
};

export default InputField;