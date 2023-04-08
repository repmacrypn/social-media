import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { createNewMessage } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        messagesState: state.dialogsReducer.messagesWrapper,
        usersState: state.dialogsReducer.usersWrapper,
    };
};

export default compose(
    connect(mapStateToProps, { createNewMessage }),
    withAuthRedirect,
)(Dialogs);