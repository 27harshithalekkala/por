document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.circle').forEach(circle => {
        const percent = circle.getAttribute('data-percent');
        circle.style.setProperty('--percent', percent);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.text');
    const texts = ["Frontend Developer", "Web Developer", "Full Stack Developer"];
    let index = 0;
    let letterIndex = 0;
    let isDeleting = false;
    let currentText = texts[index];
    
    function type() {
        textElement.innerHTML = "";
        let displayText = isDeleting ? currentText.substring(0, letterIndex) : currentText.substring(0, letterIndex + 1);
        displayText.split("").forEach((char, i) => {
            const span = document.createElement("span");
            span.textContent = char;
            span.style.setProperty('--index', i);
            textElement.appendChild(span);
        });

        if (!isDeleting && letterIndex < currentText.length) {
            letterIndex++;
        } else if (isDeleting && letterIndex > 0) {
            letterIndex--;
        }

        if (letterIndex === currentText.length) {
            isDeleting = true;
        } else if (letterIndex === 0 && isDeleting) {
            isDeleting = false;
            index = (index + 1) % texts.length;
            currentText = texts[index];
        }

        setTimeout(type, isDeleting ? 50 : 100); // Increase speed for deleting
    }

    type();
});
