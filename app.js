const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
    h1.style.color = "blue";
}

function handleMouseEnter() {
    h1.innerText = "mouse is here!";
}

function handleMouseLeave() {
    h1.innerText = "mouse is gone...";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("all good");
}


h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);