function choosePath(option) {
  // Option B "Man-in-the-Middle" is the one that sees the trick (the mirror).
  // This leads to the real desktop (login.html).
  // Option A "HTTPS" is the "believable but false branch".

  if (option === 'B') {
    // Correct path: Dr. Goyal's Desktop
    // Add a slight delay for dramatic effect
    document.body.style.transition = "opacity 1s ease";
    document.body.style.opacity = "0";
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1000);
  } else {
    // Wrong path: False branch
    document.body.style.transition = "opacity 1s ease";
    document.body.style.opacity = "0";
    setTimeout(() => {
      window.location.href = "stage1.html";
    }, 1000);
  }
}
