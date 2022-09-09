let submitBtn = document.querySelector(".submit-btn");
let thankYou = document.getElementById("thank-you");
let mainCard = document.getElementById("main-card");
let rating = document.getElementById("rating");
let rates = document.querySelectorAll(".btn");

submitBtn.addEventListener("click", submitClick)
function submitClick () {
    thankYou.classList.remove("hidden");
    mainCard.style.display = "none";

}

rates.forEach((rate) => {
    rate.addEventListener("click", () =>{
        rating.innerHTML = rate.innerHTML;
        console.log(rate.innerHTML)
    })
})