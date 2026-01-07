const enterScreen = document.getElementById("enter-screen");
const suspectScreen = document.getElementById("suspect-screen");
const audio = document.getElementById("bg-audio");

enterScreen.addEventListener("click", () => {
  // Start audio (browser-legal user gesture)
  audio.volume = 0.25;
  audio.play().catch(() => {});

  // Reveal content
  enterScreen.remove();
  suspectScreen.classList.remove("hidden");

  // Persist state
  localStorage.setItem("caseOpened", "true");
});

// Restore state on refresh
if (localStorage.getItem("caseOpened") === "true") {
  enterScreen?.remove();
  suspectScreen.classList.remove("hidden");
  audio.volume = 0.15;
  audio.play().catch(() => {});
}
