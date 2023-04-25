import * as yup from 'yup';

export const basicLoginSchema = yup.object().shape({
    email: yup
        .string()
        .email('Please enter the valid email.')
        .required('Email required.'),
    password: yup
        .string()
        .min(3, 'Password is too short - should be 3 chars minimum.')
        .required('Password required.'),
    rememberMe: yup
        .boolean(),
});

export const basicAddPostSchema = yup.object().shape(
    {
        addPostField: yup
            .string()
            .max(50, 'Text is too long - should be 50 chars maximum.')
            .required('Required.')
    },
);

export const basicAddMessageSchema = yup.object().shape({
    addMessageField: yup
        .string()
        .max(50, 'Text is too long - should be 50 chars maximum.')
        .required('Required.')
});

export const basicProfileInfoChanger = yup.object().shape({
    fullName: yup
        .string()
        .max(15, 'Nickname is too long - should be 15 chars maximum.'),
    aboutMe: yup
        .string()
        .max(50, 'General info is too long - should be 50 chars maximum.'),
    lookingForAJob: yup
        .boolean(),
    lookingForAJobDescription: yup
        .string()
        .max(50, 'Text is too long - should be 50 chars maximum.'),
});

