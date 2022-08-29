import React, { Component } from 'react'
import Images from '../components/Images'
import { connect } from 'react-redux';
import { fetchImageList } from '../redux/imageReducer';

const mapDispatchToProps = dispatch => ({
    fetchImageList: (token) => dispatch(fetchImageList(token))
})

const mapStateToProps = state => ({
    token: state.auth.token,
    imageList: state.img.imgList
})

class Home extends Component {

    componentDidMount() {
        this.props.fetchImageList(this.props.token);
    }

    render() {
        return (
            <>
                <Images imageList={this.props.imageList} />
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)