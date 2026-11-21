const startColor = { r: 177, g: 144, b: 82 };  // Gold
const endColor = { r: 30, g: 64, b: 175 };      // Blue

function lerp(start, end, progress) {
    return Math.round(start + (end - start) * progress);
}

function updateColors() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    let progress = docHeight > 0 ? scrollTop / docHeight : 0;
    progress = Math.min(Math.max(progress, 0), 1);

    const r = lerp(startColor.r, endColor.r, progress);
    const g = lerp(startColor.g, endColor.g, progress);
    const b = lerp(startColor.b, endColor.b, progress);

    const bg = `rgb(${r}, ${g}, ${b})`;

    document.documentElement.style.setProperty('--scroll-bg', bg);
}

window.addEventListener("scroll", updateColors);
window.addEventListener("load", updateColors);