document.addEventListener("DOMContentLoaded", function () {
    const modeToggleBtn = document.getElementById("mode-toggle");
    const body = document.body;

    modeToggleBtn.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        // Update the mode in local storage
        localStorage.setItem("mode", body.classList.contains("dark-mode") ? "dark" : "light");
    });

    // Check the stored mode preference and set the initial mode
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
});
