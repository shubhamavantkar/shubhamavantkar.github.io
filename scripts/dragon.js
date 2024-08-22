document.addEventListener("DOMContentLoaded", function() {
    const dragon = document.querySelector('.flying-dragon');
    
    let position = -200; // Starting position off-screen
    const screenWidth = 1700; // Get the width of the screen

    function fly() {
        if (position < screenWidth) {
            position += 2; // Move the dragon 5 pixels to the right
            dragon.style.left = position + 'px';
            requestAnimationFrame(fly); // Keep animating
        } else {
            position = -200; // Reset position to start again
            fly(); // Restart the animation
        }
    }

    
    fly(); // Start the animation
});
