const fileUpload = (upFile) => {
    const {
        uploadedBy, imageUrl, imageTitle,
        imageCategory, feedback, date, token
    } = upFile;

    const fileInfo = {
        uploadedBy, imageUrl, imageTitle,
        imageCategory, feedback, date
    }

    let endPoint = 'https://photo-gallery-8f403-default-rtdb.asia-southeast1.firebasedatabase.app/imagesList.json?auth=';
    fetch(endPoint + token, {
        method: "POST",
        body: JSON.stringify(fileInfo)
    }).then(
        response => response.json()
    ).then(
        data => console.log('Upload success')
    ).catch(
        error => {
            console.log(error)
        }
    )
}

export default fileUpload