import React from "react";
import s from './UserInfoForm.module.css';
import { useFormik } from 'formik';
import { basicProfileInfoChanger } from "../../../../../schemas/yupSchema";
import InputField from "../../../../common components/defaultLoginFormInput/InputField";

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
        <div>
            Profile Information:
        </div>
        <div>
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
        </div>
        <div>
            <InputField
                id="aboutMe"
                name="aboutMe"
                type="textarea"
                placeholder={"Enter smth about you"}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
                values={values}
                text="General info about me: "
            />
        </div>
        <div>
            <label>
                Looking for a job?
                <input
                    id="lookingForAJob"
                    name="lookingForAJob"
                    type="checkbox"
                    onChange={handleChange}
                    checked={values.lookingForAJob}
                    onBlur={handleBlur}
                    className={errors.lookingForAJob && touched.lookingForAJob ? s.inputError : ''}
                />
            </label>
        </div>
        <div>
            <InputField
                id="lookingForAJobDescription"
                name="lookingForAJobDescription"
                type="textarea"
                placeholder={"Describe the job"}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
                values={values}
                text="Info about the job i'm looking for: "
            />
        </div>
        <div className={s.contactsField}>
            My contacts:
            {
                Object.keys(profilePage.contacts).map((key, i) => {
                    return <div key={i}>
                        {key} - <input
                            id={key}
                            name={`contacts.${key}`}
                            type="text"
                            placeholder={`Input ${key}`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.contacts?.[key] && touched.contacts?.[key] ? s.inputError : ''}
                            value={values.contacts[key]}
                        />
                        {
                            errors.contacts?.[key] &&
                            touched.contacts?.[key] &&
                            <p className={s.errorMessage}>{errors.contacts?.[key]}</p>
                        }
                    </div>;
                })
            }
        </div>
        {
            status &&
            <div className={s.errorMessage}>
                {status}
            </div>
        }
        <button disabled={isSubmitting} type="submit">Save</button>
    </form>;
};

export default UserInfoForm;