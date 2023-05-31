import React from "react";
import { login } from "../../redux/authReducer.ts";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { LoginForm } from "./loginForm/LoginForm";

const LoginPage = ({ isAuth, login, captchaURL }) => {
    if (isAuth) {
        return <Navigate to='/profile' />;
    }

    return <LoginForm captchaURL={captchaURL} login={login} />
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
        captchaURL: state.authReducer.captchaURL,
    };
};

export default connect(mapStateToProps, { login })(LoginPage);