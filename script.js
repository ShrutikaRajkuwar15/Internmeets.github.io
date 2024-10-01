// To add shadow effect on header web page
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) { // You can adjust this value
        header.classList.add('header-section-shadow');
    } else {
        header.classList.remove('header-section-shadow');
    }
});

// AOS.refresh();
AOS.init();

// Hover button javascript to display paragraph on hover
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelectorAll(".ButtonMsg");
    const paragraphs = document.querySelectorAll(".hidden-Paragraph");

    button.forEach((button, index) => {
        const paragraph = paragraphs[index];
    

    button.addEventListener("mouseover", function() {
        paragraph.style.display = "block";
    });

    button.addEventListener("mouseout", function() {
        paragraph.style.display = "none";
    });
});
});
// Hover button javascript end

// To create text infinite typing animation
  let lines = [];
const typingSpeed = 100; // Adjust typing speed here (milliseconds)
const pauseBetweenLines = 1000; // Pause between lines (milliseconds)
let lineIndex = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    // Get the lines from the hidden HTML container
    const linesContainer = document.getElementById("lines-container");
    lines = Array.from(linesContainer.getElementsByTagName("h6")).map(h6 => h6.textContent);

    typeLine();
});

function typeLine() {
    const textElement = document.getElementById("typing-text");

    if (charIndex < lines[lineIndex].length) {
        textElement.innerHTML += lines[lineIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeLine, typingSpeed);
    } else {
        charIndex = 0;
        lineIndex++;
        if (lineIndex >= lines.length) {
            lineIndex = 0; // Reset lineIndex to loop infinitely
        }
        setTimeout(() => {
            textElement.innerHTML = ''; // Clear the current text
            typeLine();
        }, pauseBetweenLines);
    }
}


