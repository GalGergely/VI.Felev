const navBar = document.querySelector('nav');

//1. feladat:
navBar.addEventListener('click', event => {
    if(event.target.matches('a[href^="#"]')) {
        event.preventDefault();
        const idSelector = event.target.hash;
        const anchorTarget = document.querySelector(idSelector);
        anchorTarget.scrollIntoView({behavior: 'smooth'});
    }
});

function throttle(fn, time) {
    let timeoutId;
    return (...args) => {
        if(timeoutId){
            return;
        }
        fn(...args);
        timeoutId = setTimeout(() => {
            timeoutId = null;
        }, time)
    }
}


//2. feladat
document.addEventListener('scroll', throttle(() => {
    const scrollPxs = window.scrollY;
    if(scrollPxs > 200) {
        navBar.classList.add('navbar-scrolled');
    } else {
        navBar.classList.remove('navbar-scrolled');
    }
}, 30));

//3. feladat

const animationObserver = new IntersectionObserver(entries => {
    entries
    .filter(entry => entry.isIntersecting)
    .forEach(entry => {
        const element = entry.target;
        element.classList.add('animate__animated');
        element.classList.add('animate__' + element.getAttribute('data-scroll-animation'));
    });
});

document.querySelectorAll('[data-scroll]').forEach(element => {
    animationObserver.observe(element);
});

//4. feladat

document.addEventListener('scroll', throttle(() => {
    const scrolled = window.scrollY;
    const viewPortHeight = document.body.clientHeight;
    const scrollHeight = document.body.scrollHeight;
    const maxScroll = scrollHeight - viewPortHeight;
    const scrolledPercentage = scrolled / maxScroll * 100;
    document.querySelector('.loading').style.width = `${scrolledPercentage}%`
}, 30))
