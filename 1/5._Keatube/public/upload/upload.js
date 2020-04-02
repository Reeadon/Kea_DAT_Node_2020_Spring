let fileValid = false;

function validateForm() {
    const title = document.forms.videoupload.title.value;
    const description = document.forms.videoupload.description.value;
    
    if (title < 8 || title > 64) {
        return false;
    }

    if (description > 2048) {
        return false;
    }

    return true && fileValid;
}

function handleFileUpload(files) {
    const file = files[0];
    
    const mimeTypeArray = file.type.split("/");

    if (mimeTypeArray[0] !== "video") {
        fileValid = false;
        return;
    }

    const fileSize = file.size;

    if (fileSize > xxxx) {
        fileValid = false;
        return;
    }

}

