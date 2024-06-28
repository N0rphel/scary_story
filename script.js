const element = document.querySelector('body')
const light = document.getElementById('light')
const ring = document.getElementById('ring')

element.addEventListener('mousemove', (e) => {
    console.log(`${e.clientX}, ${e.clientY}`)

    const x = e.clientX - light.offsetWidth / 2;
    const y = e.clientY - light.offsetHeight / 2;

    light.style.left = `${x}px`;
    light.style.top = `${y}px`;

    ring.style.left = `${x}px`;
    ring.style.top = `${y}px`;
})

function navigateTo(url) {
    window.location.href = url;
}
