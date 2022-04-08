//Smooth Scroll para links internos//

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

//Animação de surgir ao scrollar a página//

const target = document.querySelectorAll("[data-anime]");
const animeClass = "animate";

function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.75);
    target.forEach(function(element) {
        if(windowTop > element.offsetTop){
            element.classList.add(animeClass);
        }else{
            element.classList.remove(animeClass);
        }
    })
}

if(target.length){
    window.addEventListener("scroll", function(){
        animeScroll();
    })
}