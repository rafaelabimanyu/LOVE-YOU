document.addEventListener("DOMContentLoaded", function() {
    const message = document.getElementById("message");
    const heart = document.getElementById("heart");
    const question = document.getElementById("question");
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");

    setTimeout(() => {
        message.style.animation = "fadeOut 2s forwards";
        setTimeout(() => {
            message.style.display = "none";
            heart.style.display = "block";
        }, 2000);
    }, 4000);

    setTimeout(() => {
        heart.style.animation = "fadeOutHeart 2s forwards";
        setTimeout(() => {
            heart.style.display = "none";
            question.style.display = "block";
        }, 2000);
    }, 8000);

    noButton.addEventListener("mouseover", moveButton);
    noButton.addEventListener("click", moveButton);

    yesButton.addEventListener("click", function() {
        window.location.href = "button.html"; // Ganti dengan halaman tujuan Anda
    });

    function moveButton() {
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 200 - 100;
        noButton.style.setProperty('--x', `${x}px`);
        noButton.style.setProperty('--y', `${y}px`);
        noButton.style.animation = "move 0.5s forwards";
    }
});
