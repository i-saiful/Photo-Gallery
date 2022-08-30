import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    imgList: [],
    isImgListLoading: false,
}

export const imageReducer = createSlice({
    name: 'imageReducer',
    initialState,
    reducers: {
        imageList: (state, action) => ({
            ...state,
            imgList: [...action.payload]
        }),
        imageLoding: (state, action) => ({
            ...state,
            isImgListLoading: action.payload
        })
    }
})

export const fetchImageList = (token, category) => dispatch => {
    dispatch(imageLoding(true))

    const api = 'https://photo-gallery-8f403-default-rtdb.asia-southeast1.firebasedatabase.app/imagesList.json?auth='
    let query = '';
    if (category) {
        query = '&orderBy="imageCategory"&equalTo="' + category + '"';
    } else {
        query = '&orderBy="imageCategory"'
    }

    fetch(api + token + query)
        .then(
            response => response.json()
        ).then(
            data => {
                const imagesList = []
                for (let imgId in data) {
                    imagesList.push({ ...data[imgId], imgId });
                }
                // console.log(imagesList);
                dispatch(imageList(imagesList))
                dispatch(imageLoding(false))
            }
        ).catch(error => {
            console.log(error)
            dispatch(imageLoding(false))
        }
        )
}

export const { imageList, imageLoding } = imageReducer.actions;
export default imageReducer.reducer;