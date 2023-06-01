const navBar = document.querySelector('nav');

navBar.addEventListener('click', event => {
    if(event.target.matches('a[href^="#"]')) {
        event.preventDefault();
        const idSelector = event.target.hash;
        const anchorTarget = document.querySelector(idSelector);
        anchorTarget.scrollIntoView({behavior: 'smooth'});
    }
});

//2.Feladat
function throttle(fn, time) {
    let timeoutId;
    return(...args) => {
        if (timeoutId) {
            return
        }
        fn(...args);
        timeoutId = setTimeout(() => {
            timuoutId = null;
        }, time);
    };
}

document.addEventListener('scroll', throttle(() => {
    console.log('scroll');
    const scrolledPxs = window.scrollY;
    if(scrolledPxs > 200) {
        navBar.classList.add('navbar-scrolled');
    } else {
        navBar.classList.remove('navbar-scrolled');
    }
}, 30));

//3.Feladat
const animationObserver = new IntersectionObserver(entry => {
    entry.filter(entry => entry.isIntersecting).forEach(entry => {
        const element = entry.target;
        element.classList.add('animate__animated');
        element.classList.add('animate__' + element.getAttribute('data-scroll-animation'));
    });
});

document.querySelectorAll('[data-scroll]').forEach( elem => {
    animationObserver.observe(elem);
});