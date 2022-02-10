//write the code here!
window.onload = () => {
    const fleshes = document.querySelectorAll('.flesh');
    setInterval(() => {
        for (const flesh of fleshes) {
            flesh.classList.toggle('red')
        }
    }), 1000
}