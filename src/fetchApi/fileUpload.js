const fileUpload = (info) => {
    // console.log(Math.round(info.fileSize / 1024));
    // console.log(info.file);
    fetch(`https://storage.googleapis.com/photo-gallery-8f403.appspot.com/${info.file}`, {
        method: "POST",
        Authorization: ' Bearer OAUTH2_TOKEN',
        "Content- Type": ' application / json',
        "metadata": { "NEW_KEY": "NEW_VALUE" }

    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    // https://storage.googleapis.com/[bucket_name]/[path_to_image]


}

export default fileUpload