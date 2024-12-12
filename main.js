const tiltZoomElement = document.querySelector(".illustrator");
tiltZoomElement.addEventListener("mousemove", (e) => {
  const { width, height, left, top } = tiltZoomElement.getBoundingClientRect();
  const x = e.clientX - left;
  const y = e.clientY - top;
  const rotateX = (y / height - 0.5) * 15; // Tilt effect along the X-axis
  const rotateY = (x / width - 0.5) * -15; // Tilt effect along the Y-axis
  tiltZoomElement.style.transform = `scale(1.1) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Reset the tilt and zoom effect when the mouse leaves
tiltZoomElement.addEventListener("mouseleave", () => {
  tiltZoomElement.style.transform = "scale(1) rotateX(0) rotateY(0)";
});

document.addEventListener("DOMContentLoaded", function (horizontalScroll) {
  // Set up a simple horizontal scroll effect for the scrolling text
  const scrollingContainer = document.querySelector(".illustrator");
  let scrollPosition = scrollingContainer.offsetWidth; // Start the text just off the screen to the right

  function animateScrollinContainer() {
    // Move the text to the left by 2 pixels every frame
    scrollPosition -= 2;

    // Reset the position when it moves completely off the screen
    if (scrollPosition < -scrollingContainer.offsetWidth) {
      scrollPosition = scrollingContainer.parentElement.offsetWidth;
    }

    // Apply the updated position
    scrollingContainer.style.transform = `translateX(${scrollPosition}px)`;

    // Request the next frame
    requestAnimationFrame(animateScrollinContainer);
  }

  // Start the animation
  animateScrollinContainer();
});
