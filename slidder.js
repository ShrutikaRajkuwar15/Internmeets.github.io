let sliders = document.querySelectorAll('.slider');  // Select all elements with the class 'slider'

sliders.forEach(slider => {
    let images = slider.getElementsByTagName('img');
    let totalImages = images.length;
    let currentIndex = 0;
    let interval;

    function slideImages() {
        currentIndex++;

        // Apply the transition to slide the images
        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = `translateX(-${currentIndex * 110}px)`;

        // When the slider has moved past the last image, reset it
        if (currentIndex === totalImages - 9) { // 4 to keep 5 images visible
            setTimeout(() => {
                // Reset to start position but keep the visual order
                slider.style.transition = 'none';
                slider.style.transform = 'translateX(0)';

                // Move the first image to the end of the slider
                slider.appendChild(images[0]);

                // Reset index to maintain the loop
                currentIndex = 0;
            }, 500); // Match this with the transition duration
        }
    }

    // Start the sliding
    function startSlider() {
        interval = setInterval(slideImages, 2000);
    }

    // Stop the sliding
    function stopSlider() {
        clearInterval(interval);
    }

    // Event listeners for hover
    slider.addEventListener('mouseenter', stopSlider);
    slider.addEventListener('mouseleave', startSlider);

    // Initialize the slider
    startSlider();
});

// Slider for student placement
// script.js


// Pause on hover
sliderWrapper.addEventListener('mouseover', () => clearInterval(autoPlay));
sliderWrapper.addEventListener('mouseout', () => {
    autoPlay = setInterval(autoSlide, 2000);
});

initializeSlider();
