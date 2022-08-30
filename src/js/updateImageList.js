function updateImageList(imageList, image) {
    if(image) {
        const {
            date,
            feedback,
            imageCategory,
            imageTitle,
            imageUrl,
            imgId,
            uploadedBy
        } = image
        return [...imageList, {
            date,
            feedback,
            imageCategory,
            imageTitle,
            imageUrl,
            imgId,
            uploadedBy
}]
        // console.log('image =? ', image);
        // console.log('list =? ', imageList);
    }
    return imageList
}

export default updateImageList;