// ── Confetti ──────────────────────────────────────────────
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", () => {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
});

const colors = ["#ff4da6","#ff80bf","#ffb3d9","#ffe0f0","#ff1493","#ff69b4","#fff0f5"];
const pieces = Array.from({ length: 120 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height - canvas.height,
  w: Math.random() * 10 + 5,
  h: Math.random() * 6 + 4,
  color: colors[Math.floor(Math.random() * colors.length)],
  speed: Math.random() * 2 + 1,
  angle: Math.random() * 360,
  spin:  Math.random() * 4 - 2,
  drift: Math.random() * 2 - 1,
}));

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  pieces.forEach(p => {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.angle * Math.PI) / 180);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    ctx.restore();

    p.y     += p.speed;
    p.x     += p.drift;
    p.angle += p.spin;

    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawConfetti);
}
drawConfetti();

// ── Tiup Lilin ────────────────────────────────────────────
const wishes = [
  "🎉 Semoga semua impianmu terwujud!",
  "🌟 Sehat selalu dan bahagia!",
  "🎂 Panjang umur dan murah rezeki!",
  "💖 Semoga hidupmu penuh cinta!",
  "🚀 Raih semua bintangmu!",
];

let wishIndex = 0;

function blowCandles() {
  const candles = document.querySelectorAll(".candle");
  candles.forEach(c => {
    c.style.opacity = "0";
    c.style.transition = "opacity 0.4s";
  });

  const wishEl = document.getElementById("wishText");
  wishEl.textContent = wishes[wishIndex % wishes.length];
  wishIndex++;

  // Ledakan confetti ekstra
  pieces.forEach(p => {
    p.y = Math.random() * canvas.height * 0.5;
    p.speed = Math.random() * 5 + 3;
  });

  // Nyalakan kembali lilin setelah 2 detik
  setTimeout(() => {
    candles.forEach(c => {
      c.style.opacity = "1";
    });
  }, 2000);
}
