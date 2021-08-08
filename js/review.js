reviewForm = document.querySelector(".review");
revieInput = reviewForm.querySelector("input");

function reviewSubmit(event) {
    event.preventDefault();
}

reviewForm.addEventListener("submit", reviewSubmit);