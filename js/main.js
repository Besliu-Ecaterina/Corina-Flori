function transmite() {
    let text = document.getElementById("mesaj").value;
    window.open("mailto:florăriacorina@gmail.com?subject=Mesaj&body=" + text);
}

function mobileMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className += " mobile";
    } else {
        x.className = "nav";
    }
}