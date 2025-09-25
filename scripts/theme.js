export function initThemeToggle() {
    const toggleBtn = document.getElementById("toggle-theme");
    const themeIcon = toggleBtn.querySelector("img");
    const themeText = toggleBtn.querySelector("span");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeIcon.src = "./assets/icons/light-mode.svg";
        themeText.textContent = "Switch to Light Mode";
    } else {
        themeIcon.src = "./assets/icons/dark-mode.svg";
        themeText.textContent = "Switch to Dark Mode";
    }

    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeIcon.src = "./assets/icons/light-mode.svg";
            themeText.textContent = "Switch to Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            themeIcon.src = "./assets/icons/dark-mode.svg";
            themeText.textContent = "Switch to Dark Mode";
        }
    });
}
