const menuItems = document.querySelectorAll('.menu a');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToId);
})

function scrollToId(event) {
    event.preventDefault(); 
    const element = event.target;
    const id = element.getAttribute('href');
    const section = document.querySelector(id).offsetTop;
    window.scroll({
        top: section - 60,
        behavior: "smooth",
    });
}