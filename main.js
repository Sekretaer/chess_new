const btn = document.querySelector(".js-btn");
btn.addEventListener("click", function(){
    const tour = document.querySelector(".last");
    tour.classList.toggle("invisible")
    btn.classList.toggle("rotated")
})
