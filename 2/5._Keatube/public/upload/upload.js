function validateForm() {

    // todo validate on these things:
    // file extension
    // file size

    return true;
}

function handleFileUpload(file) {
    const file = file[0];
    const fileSize = file.size;
    const mimeArray = file.type.split("/");
    const fileType = mimeArray[0];
}
