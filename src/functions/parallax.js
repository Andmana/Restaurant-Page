export function initParallax() {
    document.addEventListener("mousemove", parallaxEffect);
}

function parallaxEffect(event) {
    document.querySelectorAll(".parallax-wrap img").forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;

        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}
