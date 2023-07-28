// nav-bar
const navToggle = document.querySelector('#navToggle')
const links = document.querySelector('.links')


navToggle.addEventListener("click",function () {
    if (navToggle.classList.contains('fa-bars')) {
        navToggle.classList.replace('fa-bars','fa-times');
        links.style.right=0
    }else{
        navToggle.classList.replace('fa-times','fa-bars');
        links.style.right='-50%'
    }


})


