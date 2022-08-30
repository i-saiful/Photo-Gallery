import React, { Component } from 'react'
import Images from '../components/Images'
import { connect } from 'react-redux';
import { fetchImageList } from '../redux/imageReducer';

const mapDispatchToProps = dispatch => ({
  fetchImageList: (token, category) => dispatch(fetchImageList(token, category))
})

const mapStateToProps = state => ({
  token: state.auth.token,
  imageList: state.img.imgList
})

class Bicycle extends Component {

  componentDidMount() {
    this.props.fetchImageList(this.props.token, 'Bicycle');
  }

  render() {
    document.title = 'Bicycle'
    return (
      <div>
        <Images title='Bicycle' imageList={this.props.imageList} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bicycle)