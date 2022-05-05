function bigger() {
    document.getElementById("fancify-field").style.fontSize = "24pt";
}

function fancify(thisInput) {
    var field = document.getElementById("fancify-field");
    if(thisInput.checked) {
        document.getElementById("boring").checked = false;
        field.style.fontWeight = "bold";
        field.style.color = "blue";
        field.style.textDecoration = "underline";
    }
}

function boring(thisInput) {
    var field = document.getElementById("fancify-field");
    if(thisInput.checked) {
        document.getElementById("fancify").checked = false;
        field.style.fontWeight = "normal";
        field.style.color = "black";
        field.style.textDecoration = "none";
    }
}

function mooify() {
    var field = document.getElementById("fancify-field");
    field.value = field.value.split(".").join("-Moo.");
}