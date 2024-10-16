document.addEventListener('DOMContentLoaded', () => {
    let letters = document.querySelectorAll('.text');
    let index = 0;

    setInterval(() => {
        letters.forEach((letter, i) => {
            if (i === index) {
                letter.style.transform = 'translateY(-10px)';
                letter.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
            } else {
                letter.style.transform = 'translateY(0)';
                letter.style.color = '#cccccc';
            }
        });
        index = (index + 1) % letters.length; // Loop through letters
    }, 200);
});
