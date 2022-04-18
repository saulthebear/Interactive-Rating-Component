const submit = document.querySelector("#submit-rating");

submit.addEventListener("click", handleSubmit);

function handleSubmit() {
  // Get selected rating
  const form = document.querySelector("#rating");
  const data = new FormData(form);
  const rating = data.get("rating");

  // Hide form and show thank you card
  const thankYou = document.querySelector("#thank-you");
  form.classList.toggle("hidden");
  thankYou.classList.toggle("hidden");

  // Display the selected rating
  const displayedRating = document.querySelector(".selected-rating span");
  displayedRating.innerText = rating;
}
