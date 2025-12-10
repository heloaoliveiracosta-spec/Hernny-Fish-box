function showPage(id) {
  const paginas = document.querySelectorAll('.pagina');
  paginas.forEach(p => p.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

// --- MINIGAME PESCA SIMPLES ---
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let peixeX = Math.random() * 350;
let peixeY = Math.random() * 250;

function drawPeixe() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = '#ffdd57';
  ctx.beginPath();
  ctx.arc(peixeX+15, peixeY+15, 15, 0, 2*Math.PI);
  ctx.fill();
}

canvas.addEventListener('click', () => {
  const chance = Math.random();
  if(chance > 0.5) {
    alert('Você pescou o peixe! 🎣');
    peixeX = Math.random() * 350;
    peixeY = Math.random() * 250;
    drawPeixe();
  } else {
    alert('Errou! Tente de novo!');
  }
});

function resetGame() {
  peixeX = Math.random() * 350;
  peixeY = Math.random() * 250;
  drawPeixe();
}

drawPeixe();
