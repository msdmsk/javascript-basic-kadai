const text = document.getElementById("text");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    setTimeout(() => {
        text.style.display = "none";
        text.textContent = "ボタンをクリックしました";
        text.style.display = "block";
    }, 2000);
});