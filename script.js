const startBtn = document.getElementById("start");
const config = document.getElementById("config");
const led = document.getElementById("led");
const scroll = document.getElementById("scroll");

startBtn.addEventListener("click", () => {
  const texto = document.getElementById("texto").value;
  const modo = document.getElementById("modo").value;
  const color = document.getElementById("color").value;
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const velocidad = parseInt(document.getElementById("velocidad").value);

  scroll.textContent = texto;
  scroll.style.animationDuration = velocidad + "s";

  if (modo === "mono") {
    scroll.style.color = color;
    scroll.style.backgroundImage = "";
    scroll.style.webkitBackgroundClip = "";
  } else {
    // Generar colores aleatorios
    let colores = [];
    for (let i = 0; i < cantidad; i++) {
      colores.push("#" + Math.floor(Math.random()*16777215).toString(16));
    }
    scroll.style.backgroundImage = `linear-gradient(to right, ${colores.join(",")})`;
    scroll.style.webkitBackgroundClip = "text";
    scroll.style.color = "transparent";
  }

  config.style.display = "none";
  led.style.display = "block";
});