import React from "react";
import { login } from "../../redux/authReducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { LoginForm } from "./loginForm/LoginForm";

const LoginPage = ({ isAuth, login }) => {
    if (isAuth) {
        return <Navigate to='/profile' />;
    }

    return <div>
        <LoginForm login={login} />
    </div>;
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
    };
};

export default connect(mapStateToProps, { login })(LoginPage);