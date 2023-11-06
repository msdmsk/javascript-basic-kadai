const text = document.getElementById("text");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    text.style.display = "none";
    text.textContent = "ボタンをクリックしました";
    text.style.display = "block";
});