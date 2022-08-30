const commentUpload = (info) => {
    const {
        comment,
        feedback,
        imgId,
        token,
        userName
    } = info;

    // feedback update => firebase
    let endPoint = `https://photo-gallery-8f403-default-rtdb.asia-southeast1.firebasedatabase.app/imagesList/${imgId}.json?auth=`;
    fetch(endPoint + token, {
        method: "PATCH",
        body: JSON.stringify({ feedback: feedback + 1 })
    })

    // add comment => firebase commentsList 
    endPoint = `https://photo-gallery-8f403-default-rtdb.asia-southeast1.firebasedatabase.app/commentsList.json?auth=`;
    fetch(endPoint + token, {
        method: "POST",
        body: JSON.stringify({ comment, userName, imgId, date: new Date() })
    })
}

export default commentUpload