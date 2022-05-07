function $(qry) {return document.querySelector(qry)};

var lastTimeout = null;
var clicks = 0;

const checkbox = $("#useful");
checkbox.setAttribute("disabled", "");
checkbox.checked = false;
checkbox.addEventListener("click", () => {
    clicks++;
    if(checkbox.getAttribute("disabled")){return;}
    if(clicks > 2) {
        checkbox.classList.add("stop");
    }

    checkbox.classList.remove("buzz");
    checkbox.setAttribute("disabled", "");
    if(lastTimeout) {
        clearTimeout(lastTimeout);
    }
    lastTimeout = setTimeout(
        () => {
            checkbox.classList.add("buzz");
            checkbox.removeAttribute("disabled");
            lastTimeout = null;
            checkbox.checked = false
        }
    , 1000);
})

setTimeout(() => {
    checkbox.classList.remove("fadein");
    checkbox.removeAttribute("disabled");
}, 3000)