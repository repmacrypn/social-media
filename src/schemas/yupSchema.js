import * as yup from 'yup';

const passwordRules = /(?=.*[0-9])/;

export const basicLoginSchema = yup.object().shape({
    email: yup
        .string()
        .email('Please enter the valid email.')
        .required('Email required.'),
    password: yup
        .string()
        .min(5, 'Password is too short - should be 5 chars minimum.')
        .matches(passwordRules, { message: 'Please create a stronger password.' })
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

