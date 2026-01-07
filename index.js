const enterScreen = document.getElementById("enter-screen");
const suspectScreen = document.getElementById("suspect-screen");
const audio = document.getElementById("bg-audio");

/* Restore state after refresh */
if (localStorage.getItem("caseOpened") === "true") {
  enterScreen.remove();
  suspectScreen.classList.remove("hidden");
}

/* Entry interaction */
enterScreen.addEventListener("click", () => {
  localStorage.setItem("caseOpened", "true");

  audio.volume = 0.2;
  audio.play().catch(() => {});

  enterScreen.remove();
  suspectScreen.classList.remove("hidden");
});

/* Console flavor */
console.log("CASE FILE LOADED");
console.warn("Some records may be incomplete.");
