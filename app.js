const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", function () {
  // Create hearts container and teddy bear
  document.body.innerHTML = `
    <div id="hearts"></div>
    <div class="teddy-bear">
      <img src="nextpageval.png" alt="Teddy bear">
    </div>
  `;

  // Create and position heart shapes

  for (let i = 0; i < 500; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart-shape");
    document.body.appendChild(heart);

    // Set random initial position
    heart.style.left = `${Math.random() * window.innerWidth}px`;
    heart.style.top = `${Math.random() * window.innerHeight}px`;

    // Set initial opacity for smooth fade-in
    heart.style.opacity = 0;

    // Animate heart fall and fade-out
    heart.animate(
      [
        { opacity: 0, transform: "translateY(0px)" },
        { opacity: 1, transform: `translateY(${window.innerHeight}px)` },
        { opacity: 0, transform: `translateY(${window.innerHeight}px)` },
      ],
      {
        duration: Math.random() * 3000 + 2000, // Random fall duration
        easing: "ease-in-out",
        iterations: Infinity,
        fill: "forwards",
      }
    ).onfinish = () => heart.remove();

    document.getElementById("hearts").appendChild(heart);
  }
});

noBtn.addEventListener("mouseover", function () {
  this.textContent = "Still yes ";
  this.style.backgroundColor = "#f1c40f";
});

noBtn.addEventListener("mouseout", function () {
  this.textContent = "NOPE!";
  this.style.backgroundColor = "#e74c3c";
});
