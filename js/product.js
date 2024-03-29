

let shapes = document.getElementsByName("shapes");
// console.log(shapes);

const sizeChoices = [
    ["特大", "大", "中", "小"],
    ["小"],
    ["直向"],
    ["小"],
];

const frameChoices = [
    ["胡桃", "原木", "柚木"],
    ["淺胡桃", "蕭光黑", "原木"],
    ["胡桃", "白瓷", "深胡桃"],
    ["白", "米白", "原木文青"],
];

const framePictures = [
    ["./images/相框遮罩/相框01.png", "./images/相框遮罩/相框02.png", "./images/相框遮罩/相框03.png"],
    ["./images/相框遮罩/圓02.png", "./images/相框遮罩/圓03.png", "./images/相框遮罩/圓04.png"],
    ["./images/相框遮罩/橢圓01.png", "./images/相框遮罩/橢圓02.png", "./images/相框遮罩/橢圓03.png"],
    ["./images/相框遮罩/心型01.png", "./images/相框遮罩/心型02.png", "./images/相框遮罩/心型03.png"],
];

const sizeChoicesSpecs = [
    ["297mm x 420mm($990)", "203mm x 254mm($801)", "127mm x 178mm($730)", "102mm x 152mm ($244)"],
    ["200mm x 200mm($670)"],
    ["305mm x 203mm($800)"],
    ["223mm x 178mm($750)"], 
]

let sizes = [];
let frames = [];

shapes.forEach((a, i) => {
    a.addEventListener("click", () => {
        document.getElementById("sizeList").innerHTML = "";
        selected(shapes, a);
        generateLi("sizeList", sizeChoices[i], sizes, i, false);
        generateLi("frameList", frameChoices[i], frames, i, true);
    });
});

function generateLi(ulID, dataArray, newArray, shapeIndex, frame) {
    // Clears array
    newArray.length = 0;

    // Removes original div
    document.getElementById(ulID).innerHTML = "";
    dataArray.forEach((a, i) => {
        let newEl = document.createElement("li");
        newArray.push(newEl);
        newEl.innerHTML = a;
        newEl.classList.add("selectionLi");
        if (frame) {
            newEl.addEventListener("click", () => {
                let newImage = framePictures[shapeIndex][i];
                console.log(newImage);
                let frameBox = document.getElementById("framePictureBox");
                frameBox.style.backgroundImage = `url(${newImage})`;
                frameBox.style.backgroundSize = `contain`;
            })
        } /* else {
            let tooltipSpan = document.createElement("span");
            tooltipSpan.classList.add("tooltiptext");
            tooltipSpan.innerText = sizeChoicesSpecs[shapeIndex][i]
            // console.log(newEl);
            newEl.classList.add("hasTooltip");
            newEl.appendChild(tooltipSpan);
        } */
        if (dataArray.length === 1) {
            selected(sizes, newEl);
        } else {
            newEl.addEventListener("click", () => {
                selected(newArray, newEl);
            });
        }
        document.getElementById(ulID).append(newEl);
    });
}

function selected(array, selected) {
    array.forEach((a) => {
        a != selected
            ? a.classList.remove("selected")
            : a.classList.add("selected");
    });
}

// where files are dropped + file selector is opened
// where images are previewed
let dropRegion = document.getElementById("image-preview"),
    previewRegion = document.getElementById("image-preview"),
    imageInserted = false;

// open file selector when clicked on the drop region
var clickInput = document.createElement("input");
clickInput.type = "file";
clickInput.accept = "image/*";
clickInput.multiple = false;

dropRegion.addEventListener("click", () => {
    if (!imageInserted) {
        clickInput.click();
    }
});

clickInput.addEventListener("input", () => {
    let files = clickInput.files;
    handleFiles(files);
});

function preventDefault(e) {
    e.preventDefault();
    e.stopPropagation();
}

dropRegion.addEventListener("dragenter", preventDefault, false);
dropRegion.addEventListener("dragleave", preventDefault, false);
dropRegion.addEventListener("dragover", preventDefault, false);
dropRegion.addEventListener("drop", preventDefault, false);

function handleDrop(e) {
    if (!imageInserted) {
        // console.log(imageInserted);

        var dt = e.dataTransfer,
            files = dt.files;

        if (files.length) {
            handleFiles(files);
        } else {
            // check for img
            var html = dt.getData("text/html"),
                match = html && /\bsrc="?([^"\s]+)"?\s*/.exec(html),
                url = match && match[1];

            if (url) {
                uploadImageFromURL(url);
                return;
            }
        }

        function uploadImageFromURL(url) {
            var img = new Image();
            var c = document.createElement("canvas");
            var ctx = c.getContext("2d");

            img.onload = function () {
                c.width = this.naturalWidth; // update canvas size to match image
                c.height = this.naturalHeight;
                ctx.drawImage(this, 0, 0); // draw in image
                c.toBlob(function (blob) {
                    // get content as PNG blob

                    // call our main function
                    handleFiles([blob]);
                }, "image/png");
            };
            img.onerror = function () {
                alert("Error in uploading");
            };
            img.crossOrigin = ""; // if from different origin
            img.src = url;
        }
    }
}

dropRegion.addEventListener("drop", handleDrop, false);

function handleFiles(files) {
    // for (var i = 0, len = files.length; i < len; i++) {
    //     if (validateImage(files[i])) previewAnduploadImage(files[i]);
    // }
    if (!imageInserted) {
        if (validateImage(files[0])) previewAnduploadImage(files[0]);
    }
}

function validateImage(image) {

    // check the type
    var validTypes = ["image/jpeg", "image/png", "image/gif"];
    if (validTypes.indexOf(image.type) === -1) {
        alert("Invalid File Type");
        return false;
    }

    // check the size
    var maxSizeInBytes = 10e6; // 10MB
    if (image.size > maxSizeInBytes) {
        alert("File too large");
        return false;
    }
    return true;
}

function previewAnduploadImage(image) {
    // container
    var imgView = document.createElement("div");
    imgView.id = "image-view";
    imgView.objectFit = "contain";
    imgView.style.height= "100%";
    imgView.style.width= "100%";
    // imgView.style.maxHeight = "200px"
    previewRegion.appendChild(imgView);

    // previewing image
    var img = document.createElement("img");
    img.id = "currentImage";
    img.style.objectFit = "cover";
    // img.style.display = "block";
    // img.style.maxWidth = "100%"
    // img.style.height = "auto";

    imgView.appendChild(img);

    // progress overlay
    var overlay = document.createElement("div");
    overlay.className = "overlay";
    imgView.appendChild(overlay);
    imageInserted = true;

    // read the image...
    var reader = new FileReader();
    reader.onload = function (e) {
        img.style.zIndex = "4";
        img.src = e.target.result;
    };
    reader.readAsDataURL(image);

    // dragfunction();
    $("#currentImage").draggable({ 
        containment: "#image-preview",
        cursor: 'pointer'
    });

    // $("#currentImage").draggable();
    // create FormData
    var formData = new FormData();
    formData.append("image", image);

    // upload the image
    // var uploadLocation = "https://api.imgbb.com/1/upload";
    // formData.append("key", "bb63bee9d9846c8d5b7947bcdb4b3573");

    // var ajax = new XMLHttpRequest();
    // ajax.open("POST", uploadLocation, true);

    /* ajax.onreadystatechange = function (e) {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                // done!
            } else {
                // error!
            }
        }
    }; */

    /* ajax.upload.onprogress = function (e) {
        // change progress
        // (reduce the width of overlay)

        var perc = (e.loaded / e.total) * 100 || 100,
            width = 100 - perc;

        overlay.style.width = width;
    };

    ajax.send(formData); */
}

function reset() {
    if (imageInserted) {
        imageInserted = false;
        document.querySelector("#image-view").remove();
    }
}

$(document).ready( () => {
    selected(shapes, shapes[0])
    generateLi("sizeList", sizeChoices[0], sizes, 0, false);
    generateLi("frameList", frameChoices[0], frames, 0, true);
    selected(sizes, sizes[0]);
    selected(frames, frames[0]);

    let newImage = framePictures[0][0];
    let frameBox = document.getElementById("framePictureBox");
    frameBox.style.backgroundImage = `url(${newImage})`;
})