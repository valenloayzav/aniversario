document.addEventListener("DOMContentLoaded", function () {
    const welcomeScreen = document.getElementById("welcomeScreen");
    const mainContent = document.getElementById("mainContent");
    const startButton = document.getElementById("startButton");
    const music = document.getElementById("backgroundMusic");

    startButton.addEventListener("click", function () {
        music.play().then(() => {
            welcomeScreen.style.display = "none";
            mainContent.style.display = "block";
        }).catch(error => {
            console.error("No se pudo reproducir la música automáticamente:", error);
        });
    });
});