import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComment } from '../redux/commentReducer';
import CommentPreview from './CommentPreview';
import Spinner from './Spinner';


const mapDispatchToProps = dispatch => ({
    fetchComment: (token, imgId) => dispatch(fetchComment(token, imgId))
})

const mapStateToProps = state => ({
    token: state.auth.token,
    comments: state.comment.commentList,
    loading: state.comment.commentLoading
})

class CommentList extends Component {

    componentDidMount() {
        // console.log(this.props);
        this.props.fetchComment(this.props.token, this.props.imgId);
    }

    render() {
        const commentPreview = this.props.comments.map(
            (comment, index) =>
                <CommentPreview key={index} comment={comment} />
        )
        console.log(this.props.loading);
        if (this.props.loading) {
            return(
                <div className='d-flex align-items-center justify-content-center'
                 style={{ height: '60vh' }}>
                <Spinner />
                </div>
            )
        } else {

            return (
                <>
                    {commentPreview}
                </>
            )
        }

        // console.log(this.props.comments);
        // this.props.comments.map(comment => console.log(comment))
        // const { comments } = this.props.comments
        // if (comments) {
        //     comments.map(comment => console.log(comment))
        //     console.log('fhfgh');
        // }
        // return (
        //     <>
        //         <CommentPreview />
        //     </>
        // )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)