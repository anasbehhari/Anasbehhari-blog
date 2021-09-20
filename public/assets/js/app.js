if (typeof Storage !== "undefined") {
    setSysPrefColor();
    const theme = localStorage.getItem("selected-theme");
    if (theme == "light") {
        setColorScheme("light");
    } else if (theme == "dark") {
        setColorScheme("dark");
    }
}
function setSysPrefColor() {
    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        setColorScheme("dark");
    }
    window.matchMedia("(prefers-color-scheme: dark)").addListener((e) => {
        if (e.matches) {
            setColorScheme("dark");
        } else {
            setColorScheme("light");
        }
    });
}
function setColorScheme(scheme) {
    if (scheme == "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.removeAttribute("data-theme");
    }
}
document.documentElement.classList.add('js');
window.onload = function () {
    setTimeout(function () {
        document.body.classList.add('loaded');
    }, 5000);
}
let search = document.querySelector(".nav-icon span");
let closeSearch = document.getElementById("search-close")
search.onClick = () => {
    document.querySelector(".search-popup").classList.toggle("visible")
}
closeSearch.onClick = () => {
    document.querySelector(".search-popup").classList.toggle("visible")
}

window.onkeyup = event => {
    if (event.keyCode === 27 && document.querySelector(".search-popup").classList.contains("visible")) {
        document.querySelector(".search-popup").classList.toggle("visible")
    }
}