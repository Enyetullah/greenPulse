const canvas = document.getElementById("badgeCanvas");
const ctx = canvas.getContext("2d");
const imageInput = document.getElementById("imageUpload");
let uploadedImage = new Image();

// Paths to your health status images
const statusImages = {
    Healthy: "../images/healthy crop.png",
    "Needs Attention": "../images/normal crop.png",
    Diseased: "../images/diseased crop.png"
};

imageInput.addEventListener("change", function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        uploadedImage.src = e.target.result;
        uploadedImage.onload = function() {
            drawSticker(); // Call drawSticker to display the uploaded image
        };
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

function generateSticker() {
    drawSticker(); // Call the function to draw the sticker
}

function drawSticker() {
    const healthStatus = document.getElementById("healthStatus").value;

    // Clear the canvas before drawing new elements
    ctx.clearRect(0, 0, canvas.width, canvas.height); 

    // Draw the uploaded image if it exists
    if (uploadedImage.src) {
        ctx.drawImage(uploadedImage, 0, 0, canvas.width, canvas.height); // Draw uploaded image
    }

    // Load the corresponding health status image
    const statusImage = new Image();
    statusImage.src = statusImages[healthStatus];
    statusImage.onload = function() {
        ctx.drawImage(statusImage, 10, 10, 100, 100); // Draw health status image
    };

    // Draw the health status text on the canvas
    ctx.font = "20px Arial";
    ctx.fillStyle = "white"; // Change text color for better visibility
    ctx.fillText(healthStatus, 10, 150); // Draw the health status text
}

function downloadBadge() {
    const link = document.createElement("a");
    link.download = "sticker.png";
    link.href = canvas.toDataURL();
    link.click();
}
