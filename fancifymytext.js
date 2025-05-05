function alertalert() {
    alert("Hello, world!");
    document.getElementById("text-to-change").style.fontSize = "24pt";
}

function styleChanger() {
    var textChange = document.getElementById("text-to-change");
    if (document.getElementById("fancy").checked) {
        textChange.style.fontWeight = "bold";
        textChange.style.color = "blue";
        textChange.style.textDecoration = "underline";
        alert("style now fancy");
    } else {
        textChange.style.fontWeight = "normal";
        textChange.style.color = "black";
        textChange.style.textDecoration = "none";
        alert("style now boring");
    }
}

function mooText() {
    var textChange = document.getElementById("text-to-change");
    textChange.value = textChange.value.toUpperCase();
    
}