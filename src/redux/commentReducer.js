import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    commentList: [],
    commentLoading: false
}

export const commentReducer = createSlice({
    name: 'commentReducer',
    initialState,
    reducers: {
        commentListUpdate: (state, action) => ({
            ...state,
            commentList: action.payload
        }),
        commentLoadingStatus: (state, action) => ({
            ...state,
            commentLoading: action.payload
        }),
        addComment: (state, action) => ({
            ...state,
            commentList: [...state.commentList, action.payload]
        })
    }
})

export const fetchComment = (token, imgId) => dispatch => {
    dispatch(commentLoadingStatus(true));

    const endpoint = 'https://photo-gallery-8f403-default-rtdb.asia-southeast1.firebasedatabase.app/commentsList.json?auth='
    const query = '&orderBy="imgId"&equalTo="' + imgId + '"'
    fetch(endpoint + token + query)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            const list = []
            for (let comment in data) {
                list.push(data[comment]);
            }
            dispatch(commentListUpdate(list))
            dispatch(commentLoadingStatus(false));
        })
        .catch(error => {
            console.log(error)
            dispatch(commentLoadingStatus(false));
        })
}

export const {
    commentListUpdate,
    commentLoadingStatus,
    addComment
} = commentReducer.actions;
export default commentReducer.reducer;