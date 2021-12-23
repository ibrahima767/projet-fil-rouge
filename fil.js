const titreSpans = document.querySelectorAll('h1 span');
const l1 = document.querySelector('l1');
const l1 = document.querySelector('l2');
const header = document.querySelector('header');
const menu = document.querySelector('menu');


window.addEventListener('load', () => {
    const TL = gsap.timeline({ paused: true });

    TL
        .staggerFrom(titreSpans, 1, { top: -50, oppacity: 0, ease: "power2.out" }, 0.3)
        .staggerFrom(header, 1, { oppacity: 0, ease: "power2.out" }, 0.3)
        .staggerFrom(menu, 1, { top: -50, oppacity: 0, ease: "power2.out" }, 0.3)
        .from(l1, 1, { width: 0, ease: "power2.out" }, '-=2')
        .from(l1, 1, { width: 0, ease: "power2.out" }, '-=2')


    TL.play()
}