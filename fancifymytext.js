function alertalert() {
    alert("Hello, world!");
    document.getElementById("text-to-change").style.fontSize = "24pt";
}

function styleChanger() {
    if (document.getElementById("fancy").checked) {
        document.getElementById("text-to-change").style.fontWeight = "bold";
        document.getElementById("text-to-change").style.color = "blue";
        document.getElementById("text-to-change").style.textDecoration = "underline";
        alert("style now fancy");
    } else {
        document.getElementById("text-to-change").style.fontWeight = "normal";
        document.getElementById("text-to-change").style.color = "black";
        document.getElementById("text-to-change").style.textDecoration = "none";
        alert("style now boring");
    }
    }