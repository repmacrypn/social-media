import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfilePage, updateProfileStatus, getProfileStatus } from '../../redux/profileReducer';
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.param.userId;
        if (!userId) userId = this.props.authorizedUserId;

        this.props.getProfilePage(userId);
        this.props.getProfileStatus(userId);
    }

    render() {
        return <Profile
            profileStatus={this.props.profileStatus}
            updateProfileStatus={this.props.updateProfileStatus}
            profilePage={this.props.profilePage} />;
    }
}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const TakeParams = (props) => {
    return <AuthRedirectComponent {...props} param={useParams()} />
};

const mapStateToProps = (state) => {
    return {
        profilePage: state.profileReducer.profilePage,
        profileStatus: state.profileReducer.profileStatus,
        authorizedUserId: state.authReducer.id,
        isAuth: state.authReducer.isAuth,
    };
};

export default connect(mapStateToProps, { getProfilePage, updateProfileStatus, getProfileStatus })(TakeParams);