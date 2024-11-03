document.addEventListener("DOMContentLoaded", function() {
    // Always show the animation on page load
    const animationContainer = document.getElementById("introAnimation");
    animationContainer.style.display = "block";

    // Get the video element
    const video = document.getElementById("heartbeatAnimation");
    video.muted = true; // Mute the video for autoplay compatibility

    // Set the playback speed (e.g., 0.5 for half speed)
    video.playbackRate = 0.75; // Adjust this value to slow down the playback speed

    // Redirect to index page once the animation ends
    video.onended = function() {
        // Hide the animation
        animationContainer.style.display = "none";

        // Redirect to index page
        window.location.href = "html/home.html"; // Redirect to your index page

        // After a slight delay to allow the page to load
        setTimeout(() => {
            // Add fade-in class to body
            document.body.classList.add('fade-in');
        }, 50);
    };

});
