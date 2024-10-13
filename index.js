document.addEventListener('DOMContentLoaded', () => {
    let letters = document.querySelectorAll('.text');
    let index = 0;

    setInterval(() => {
        letters.forEach((letter, i) => {
            if (i === index) {
                letter.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`; // Brighter colors
            } else {
                letter.style.color = '#cccccc'; // Reset other letters to light gray
            }
        });
        index = (index + 1) % letters.length; // Loop through letters
    }, 200);
});
