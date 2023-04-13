const menu = document.querySelector('.nav-icon-dash')
const openOverlay = document.querySelector('.include-overlay')
const closeOverlay = document.querySelector('.icon-close-overlay')
const main = document.body
const searchMobile = document.querySelector('.search-mobile')
const cancel = document.querySelector('.cancel-search')
const toggleTitle = document.querySelector('.hide-show-item-children')
const showTitle = document.querySelector('.footer-item-children')
const toggleTitle2 = document.querySelector('.hide-show-item-children-2')
const showTitle2 = document.querySelector('.footer-item-children-2')
const showMobile = document.querySelector('.search')

menu.addEventListener('click', () => {
    openOverlay.classList.toggle("nav-overlay-open")
    main.style.overflow = "auto"
    main.classList.toggle("pre-noscroll")
})

closeOverlay.addEventListener('click', () => {
    openOverlay.onclick = (e) => {
        e.stopPropagation();
    }
    openOverlay.classList.toggle("nav-overlay-open")
    main.style.overflow = "scroll"
    main.classList.toggle("pre-noscroll")
})    


toggleTitle.addEventListener("click", () => {
    toggleTitle.classList.toggle("fa-plus");
    toggleTitle.classList.toggle("icon-add-mobile");
    toggleTitle.classList.toggle("fa-minus");
    toggleTitle.classList.toggle("icon-minus-mobile");
    showTitle.classList.toggle("show-item-children");
})

toggleTitle2.addEventListener("click", () => {
    toggleTitle2.classList.toggle("fa-plus");
    toggleTitle2.classList.toggle("icon-add-mobile");
    toggleTitle2.classList.toggle("fa-minus");
    toggleTitle2.classList.toggle("icon-minus-mobile");
    showTitle2.classList.toggle("show-item-children-2");
})


            showMobile.addEventListener("click", (e) => { 
                e.preventDefault();
                searchMobile.style.display = "inherit";
            });
            cancel.addEventListener("click", () => {
                searchMobile.style.display = "none"
            })





