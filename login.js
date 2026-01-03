function checkLogin() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const errorBox = document.getElementById("error");

  errorBox.textContent = "";

  if (!user || !pass) {
    errorBox.textContent = "Please enter your credentials.";
    return;
  }

  const correctUser = "ugoyal";
  const correctPass = "#rxgpz";

  if (user === correctUser && pass === correctPass) {
    sessionStorage.setItem("session_unlocked", "true");
    window.location.href = "boot.html";
  } else if (pass === "140278") {
    errorBox.textContent = "System requires encrypted input. Check the source headers.";
  } else {
    errorBox.textContent = "Incorrect username or password.";
  }
}
