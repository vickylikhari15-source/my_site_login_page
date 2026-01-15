const loginBtn = document.getElementById("loginBtn");
const msg = document.getElementById("msg");

loginBtn.addEventListener("click", () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    msg.style.color = "#ff9c9c";
    msg.innerText = "Please enter email and password";
    return;
  }

  if (password.length < 6) {
    msg.style.color = "#ff9c9c";
    msg.innerText = "Password must be at least 6 characters";
    return;
  }

  msg.style.color = "#9cffc7";
  msg.innerText = "Login successful ✨ (Frontend demo)";
});
const mouseBg = document.querySelector(".mouse-bg");

let targetX = 50;
let targetY = 50;
let currentX = 50;
let currentY = 50;

document.addEventListener("mousemove", (e) => {
  targetX = (e.clientX / window.innerWidth) * 100;
  targetY = (e.clientY / window.innerHeight) * 100;
});

function smoothMove() {
  currentX += (targetX - currentX) * 0.08;
  currentY += (targetY - currentY) * 0.08;

  mouseBg.style.setProperty("--x", `${currentX}%`);
  mouseBg.style.setProperty("--y", `${currentY}%`);

  requestAnimationFrame(smoothMove);
}

smoothMove();
