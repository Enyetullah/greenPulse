document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const animationPlayed = urlParams.get('animationPlayed');

    if (animationPlayed === 'true') {
        // Add fade-in class to the body if animation has played
        document.body.classList.add('fade-in');
    } else {
        // If the user navigates back without the parameter, ensure the body is visible immediately
        document.body.style.opacity = "1";
    }
});