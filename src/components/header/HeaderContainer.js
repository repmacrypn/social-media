import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/authReducer.ts";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.authReducer.id,
        login: state.authReducer.login,
        email: state.authReducer.email,
        isAuth: state.authReducer.isAuth,
    };
};

export default connect(mapStateToProps, { logout })(HeaderContainer);