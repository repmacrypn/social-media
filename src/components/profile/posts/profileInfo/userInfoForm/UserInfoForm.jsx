import React from "react";
import s from '../userInfo/UserInfo.module.css';
import { useFormik } from 'formik';
import { basicProfileInfoChanger } from "../../../../../schemas/yupSchema";
import InputField from "../../../../common components/defaultLoginFormInput/InputField";
import '../../../../../common_styles/button.css';
import '../../../../../common_styles/validationErrors.css';
import { MainAbstract } from "../userInfo/UserInfo";

const UserInfoForm = ({ profilePage, setEditMode, saveProfileChanges }) => {
    const onSubmit = (values, { setSubmitting, setStatus }) => {
        setSubmitting(true);
        saveProfileChanges(values, setStatus, setSubmitting)
            .then(() => {
                setEditMode(false);
            })
            .catch(() => { });
    };

    const { values, status, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
        enableReinitialize: true,
        initialValues: {
            fullName: profilePage.fullName || '',
            aboutMe: profilePage.aboutMe || '',
            lookingForAJob: profilePage.lookingForAJob || false,
            lookingForAJobDescription: profilePage.lookingForAJobDescription || '',
            contacts: {
                facebook: profilePage.contacts.facebook || '',
                website: profilePage.contacts.website || '',
                vk: profilePage.contacts.vk || '',
                twitter: profilePage.contacts.twitter || '',
                instagram: profilePage.contacts.instagram || '',
                youtube: profilePage.contacts.youtube || '',
                github: profilePage.contacts.github || '',
                mainLink: profilePage.contacts.mainLink || '',
            },
        },
        validationSchema: basicProfileInfoChanger,
        onSubmit,
    });

    return <form onSubmit={handleSubmit} autoComplete="off" className={s.profileInfo}>
        <MainAbstract />
        <InputField
            id="fullName"
            name="fullName"
            type="text"
            placeholder={"Enter nickName"}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
            values={values}
            text="Nickname: "
        />
        <InputField
            id="aboutMe"
            name="aboutMe"
            type="text"
            placeholder={"Enter smth about you"}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
            values={values}
            text="General info about me: "
        />
        <InputField
            id="lookingForAJob"
            name="lookingForAJob"
            type="checkbox"
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
            values={values}
            text="Looking for a job? "
        />
        <InputField
            id="lookingForAJobDescription"
            name="lookingForAJobDescription"
            type="text"
            placeholder={"Describe the job"}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
            values={values}
            text="Info about the job: "
        />
        <div className={s.profileInfoList}>
            <span className={s.title}>My contacts: </span>
            {
                Object.keys(profilePage.contacts).map((key, i) => {
                    return <div className={s.contact} key={i}>
                        {key} - <input
                            id={key}
                            name={`contacts.${key}`}
                            type="text"
                            placeholder={`Input ${key}`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.contacts?.[key] && touched.contacts?.[key] ? 'inputError' : 'inputField'}
                            value={values.contacts[key]}
                            maxLength={50}
                        />
                        {
                            errors.contacts?.[key] &&
                            touched.contacts?.[key] &&
                            <div className='errorMessage'>{errors.contacts?.[key]}</div>
                        }
                    </div>;
                })
            }
        </div>
        <ServerErrorMessage status={status} />
        <DefautButton text='Save' isSubmitting={isSubmitting} />
    </form>;
};

export const DefautButton = ({ text, isSubmitting }) => {
    return <button
        className="defaultWebsiteButton"
        disabled={isSubmitting}
        type="submit">
        {text}
    </button>
};

export const ServerErrorMessage = ({ status }) => {
    return status && <div className={'errorMessage'}>
        {status}
    </div>;
};

export default UserInfoForm;