const jaKnap = document.getElementById("jaKnap");
const nejKnap = document.getElementById("nejKnap");
const resultat = document.getElementById("resultat");

jaKnap.addEventListener("click", () => {
  resultat.textContent = "Jeg vidste det...";
  nejKnap.style.display = "none";
});

nejKnap.addEventListener("mouseover", (e) => {
  const x = Math.random() * (window.innerWidth - nejKnap.offsetWidth);
  const y = Math.random() * (window.innerHeight - nejKnap.offsetHeight);

  nejKnap.style.position = "fixed";
  nejKnap.style.left = `${x}px`;
  nejKnap.style.top = `${y}px`;
});
