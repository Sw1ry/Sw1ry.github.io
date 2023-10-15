const loginButton = document.getElementById("login-button");

loginButton.addEventListener("mouseover", () => {
  loginButton.style.backgroundColor = "#27ae60";
});

loginButton.addEventListener("mouseout", () => {
  loginButton.style.backgroundColor = "#2ecc71";
});

loginButton.addEventListener("click", () => {
  loginButton.disabled = false;
  loginButton.style.opacity = "0.7";
  loginButton
});

window.onload = function() {
  var audio = new Audio("/extra/Undertale OST 023 - Shop.mp3");
  audio.play();
}
