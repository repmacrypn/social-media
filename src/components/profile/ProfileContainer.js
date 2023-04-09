import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfilePage, updateProfileStatus, getProfileStatus, saveProfilePhoto } from '../../redux/profileReducer';
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    refreshProfilePage = () => {
        let userId = this.props.param.userId;
        if (!userId) userId = this.props.authorizedUserId;

        this.props.getProfilePage(userId);
        this.props.getProfileStatus(userId);
    }

    componentDidMount() {
        this.refreshProfilePage();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.param.userId !== this.props.param.userId) {
            this.refreshProfilePage();
        }
    }

    render() {
        return <Profile
            saveProfilePhoto={this.props.saveProfilePhoto}
            isOwner={!this.props.param.userId}
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

export default connect(mapStateToProps, { getProfilePage, updateProfileStatus, getProfileStatus, saveProfilePhoto })(TakeParams);