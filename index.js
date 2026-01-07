const enterScreen = document.getElementById("enter-screen");
const suspectsScreen = document.getElementById("suspects-screen");
const enterBtn = document.getElementById("enter-btn");
const music = document.getElementById("bg-audio");

// If returning from interview, skip ENTER screen
if (sessionStorage.getItem("fromInterview") === "true") {
  sessionStorage.removeItem("fromInterview");

  enterScreen.classList.add("hidden");
  suspectsScreen.classList.remove("hidden");

  music.volume = 0.45;
  music.play().catch(() => {});
}

// Normal ENTER CASE flow
enterBtn.addEventListener("click", () => {
  enterScreen.classList.add("hidden");
  suspectsScreen.classList.remove("hidden");

  music.volume = 0.45;
  music.play().catch(() => {});
});

// Prevent back-button abuse inside app
history.pushState(null, "", location.href);
window.addEventListener("popstate", () => {
  history.pushState(null, "", location.href);
});
