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
  const correctPass = "140278";

  if (user === correctUser && pass === correctPass) {
    sessionStorage.setItem("session_unlocked", "true");
    window.location.href = "boot.html";
  } else {
    errorBox.textContent = "Incorrect username or password.";
  }
}
