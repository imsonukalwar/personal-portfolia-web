document.addEventListener("DOMContentLoaded", () => {

    const toggleBtn = document.getElementById("themeToggle");
    const main = document.querySelector(".main-contant");

    const headings = main.querySelectorAll("h2, h3");
    const paragraphs = main.querySelectorAll("p");
    const spans = main.querySelectorAll("span");

    // DEFAULT → DARK MODE
    main.classList.add("dark-mode");
    toggleBtn.innerText = "☀️ Light Mode";

    toggleBtn.addEventListener("click", () => {

        // LIGHT MODE apply
        if (main.classList.contains("dark-mode")) {

            main.classList.remove("dark-mode");
            toggleBtn.innerText = "🌙 Dark Mode";

            // light mode colors
            headings.forEach(h => h.style.color = "#111");
            paragraphs.forEach(p => p.style.color = "#333");
            spans.forEach(s => s.style.color = "#000");

        } 
        // DARK MODE wapas
        else {
            main.classList.add("dark-mode");
            toggleBtn.innerText = "☀️ Light Mode";

            // reset (dark mode CSS handle karega)
            headings.forEach(h => h.style.color = "");
            paragraphs.forEach(p => p.style.color = "");
            spans.forEach(s => s.style.color = "");
        }
    });

});
