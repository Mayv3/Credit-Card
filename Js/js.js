const btn = document.querySelector("button");
const card = document.querySelector(".card")
console.log(btn)

btn.addEventListener("click", () =>{
    card.classList.toggle("active")
})
