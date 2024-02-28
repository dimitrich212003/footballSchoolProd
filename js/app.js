(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const burgerIcon = document.querySelector(".header__burger");
    const nav = document.querySelector(".header__nav");
    const logo = document.querySelector(".header__logo");
    const img = document.createElement("img");
    img.src = "./img/logoForBurger.png";
    img.className = "header__logo-img-active";
    burgerIcon.addEventListener("click", (() => {
        burgerIcon.classList.toggle("active");
        nav.classList.toggle("active");
        logo.classList.toggle("active");
        const link = logo.querySelector("a");
        document.body.classList.toggle("lock");
        if (nav.classList.contains("active")) link.insertBefore(img, link.firstChild); else link.removeChild(img);
    }));
    const actionSpan = document.querySelector(".main__training-programm-text-action-hover");
    const actionPopup = document.querySelector(".main__training-programm-text-action-hover-popup");
    actionSpan.addEventListener("mouseover", (() => {
        actionPopup.classList.add("showActionPopup");
    }));
    actionSpan.addEventListener("mouseout", (() => {
        actionPopup.classList.remove("showActionPopup");
    }));
    window["FLS"] = true;
    isWebp();
})();