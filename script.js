const loginButton = document.getElementById("login-button");

loginButton.addEventListener("mouseover", () => {
  loginButton.style.backgroundColor = "#27ae60";
});

loginButton.addEventListener("mouseout", () => {
  loginButton.style.backgroundColor = "#2ecc71";
});

loginButton.addEventListener("click", () => {
  loginButton.disabled = true;
  loginButton.style.opacity = "0.7";
  loginButton