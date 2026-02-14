document.addEventListener("DOMContentLoaded", () => {

    const toggleBtn = document.getElementById("themeToggle");
    const main = document.querySelector(".main-contant");

    const headings = main.querySelectorAll("h2, h3");
    const paragraphs = main.querySelectorAll("p");
    const spans = main.querySelectorAll("span");

    // DEFAULT → DARK MODE
    main.classList.add("dark-mode");
    toggleBtn.innerText = "☀️";

    toggleBtn.addEventListener("click", () => {

        // LIGHT MODE apply
        if (main.classList.contains("dark-mode")) {

            main.classList.remove("dark-mode");
            toggleBtn.innerText = "🌙";

            // light mode colors
            headings.forEach(h => h.style.color = "#79a31e");
            paragraphs.forEach(p => p.style.color = "#9f6a96");
            spans.forEach(s => s.style.color = "#c7aa07");

        } 
        // DARK MODE wapas
        else {
            main.classList.add("dark-mode");
            toggleBtn.innerText = "☀️";

            // reset (dark mode CSS handle karega)
            headings.forEach(h => h.style.color = "");
            paragraphs.forEach(p => p.style.color = "");
            spans.forEach(s => s.style.color = "");
        }
    });

});
