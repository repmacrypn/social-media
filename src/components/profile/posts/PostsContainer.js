import { connect } from 'react-redux';
import { addPost } from '../../../redux/profileReducer';
import Posts from './Posts';

const mapStateToProps = (state) => {
    return {
        posts: state.profileReducer.posts,
    };
};

export default connect(mapStateToProps, { addPost })(Posts);