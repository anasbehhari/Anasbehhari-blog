let Search = document.querySelector(".search-popup");
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
document.documentElement.classList.add("js");
window.onload = function () {
  setTimeout(function () {
    document.body.classList.add("loaded");
  }, 5000);
};
let search = document.querySelector(".search-icon");
let closeSearch = document.getElementById("search-close");
search.onclick = () => {
  Search.classList.toggle("visible");
};
closeSearch.onclick = () => {
  Search.classList.toggle("visible");
};

window.onkeyup = (event) => {
  if (event.keyCode === 27 && Search.classList.contains("visible")) {
    Search.classList.toggle("visible");
  }
};

let navLinks = document.querySelectorAll(".header-right li:not(.submenu-parent)");
let input = document.getElementById("mobile-menu-toggle");
navLinks.forEach((navLink) => {
  navLink.onclick = () => {
    if (input.checked) {
      setTimeout(() => (input.checked = false), 1000);
    }
  };
});

const TagList = document.querySelectorAll(".tag-list a");

setTimeout(() => {
  TagList.forEach((el) => {
    el.onclick = () => {
      setTimeout(()=> Search.classList.remove("visible"),1000)
    };
  });
}, 1000);
