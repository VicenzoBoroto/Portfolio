const menuItems = document.querySelectorAll('.menu a');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToPositionOnClick);
})

function getPositionByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToPositionOnClick(event) {
    event.preventDefault(); 
    const section = getPositionByHref(event.target) - 60;
    scrollToPosition(section)
}

function scrollToPosition(section) {
    window.scroll({
        top: section,
        behavior: "smooth",
    });
}