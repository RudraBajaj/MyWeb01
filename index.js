document.addEventListener('DOMContentLoaded', () => {
    const letters = document.querySelectorAll('.text'); // Select all individual letters
    let index = 0;

    setInterval(() => {
        letters.forEach((letter, i) => {
            if (i === index) {
                letter.style.transform = 'translateY(-10px)';
                letter.style.transition = 'transform 0.3s, color 0.3s'; // Smooth transitions
                letter.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`; // Random color
            } else {
                letter.style.transform = 'translateY(0)';
                letter.style.color = '#cccccc'; // Reset color
            }
        });

        // Loop back to the start once all letters are animated
        index = (index + 1) % letters.length;
    }, 200);
});