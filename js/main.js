let duration = 8;
let isReversed = false;

let tween = gsap.to("#img", {
    rotation: 360,
    duration: duration,
    ease: "none",
    repeat: -1
});

const btnSpeedUp = document.getElementById("btn-speed-up");
const btnSpeedDown = document.getElementById("btn-speed-down");
const btnPause = document.getElementById("btn-pause");
const btnReverse = document.getElementById("btn-reverse");

if (btnSpeedUp) {
    btnSpeedUp.addEventListener("click", () => {
        tween.timeScale(tween.timeScale() * 1.5);
    });
}

if (btnSpeedDown) {
    btnSpeedDown.addEventListener("click", () => {
        tween.timeScale(Math.max(0.2, tween.timeScale() * 0.7));
    });
}

if (btnPause) {
    btnPause.addEventListener("click", () => {
        if (tween.paused()) {
            tween.play();
            btnPause.innerHTML = "⏸️ Pausar";
        } else {
            tween.pause();
            btnPause.innerHTML = "▶️ Retomar";
        }
    });
}

if (btnReverse) {
    btnReverse.addEventListener("click", () => {
        isReversed = !isReversed;
        tween.reversed(isReversed);
    });
}