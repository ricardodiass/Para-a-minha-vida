// ===== Mensagem principal =====
const textoCompleto = "Talvez você não perceba, mas todo dia eu tento fazer o mesmo: te fazer sentir-se bem, segura, incrível e verdadeiramente amada. Eu não sei se sempre acerto, mas esses serão para sempre meus desejos com você.";

const elMensagem = document.getElementById('mensagem');
const elCursor = document.getElementById('cursor');

function digitarMensagem(texto, elemento, velocidade = 45) {
  let i = 0;
  elCursor.classList.add('ativo');
  function passo() {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++;
      setTimeout(passo, velocidade);
    } else {
      // some com o cursor depois de terminar
      setTimeout(() => elCursor.classList.remove('ativo'), 1500);
    }
  }
  passo();
}

window.addEventListener('load', () => {
  setTimeout(() => digitarMensagem(textoCompleto, elMensagem), 500);
});

// ===== Corações flutuantes de fundo =====
const heartsContainer = document.getElementById('hearts-container');
const emojisCoracao = ['💗', '💕', '💖', '❤️', '💞'];

function criarCoracao() {
  const heart = document.createElement('div');
  heart.classList.add('heart-float');
  heart.textContent = emojisCoracao[Math.floor(Math.random() * emojisCoracao.length)];

  const posicaoX = Math.random() * 100; // %
  const duracao = 6 + Math.random() * 6; // 6s a 12s
  const tamanho = 14 + Math.random() * 18; // px
  const drift = (Math.random() * 100 - 50) + 'px';

  heart.style.left = posicaoX + '%';
  heart.style.fontSize = tamanho + 'px';
  heart.style.animationDuration = duracao + 's';
  heart.style.setProperty('--drift', drift);

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), duracao * 1000);
}

setInterval(criarCoracao, 700);
// cria alguns já no início
for (let i = 0; i < 5; i++) {
  setTimeout(criarCoracao, i * 300);
}

// ===== Player de música =====

const audio = document.getElementById('musica');

const btnMusica = document.getElementById('btnMusica');

const iconeMusica = document.getElementById('iconeMusica');

const notasContainer = document.getElementById('notas');

// ===== Controle de volume =====

const volumeMusica = document.getElementById('volumeMusica');

const iconeVolume = document.getElementById('iconeVolume');

const porcentagemVolume = document.getElementById('porcentagemVolume');

// Volume inicial: 20%
audio.volume = 0.2;

let tocando = false;

// ===== Botão tocar/pausar =====

btnMusica.addEventListener('click', () => {

  if (!tocando) {

    audio.play().catch(() => {

      alert('Coloque o arquivo da música na mesma pasta do site para a música tocar 🎵');

    });

    iconeMusica.textContent = '⏸️';

    btnMusica.lastChild.textContent = ' Pausar música';

    tocando = true;

    criarNotas();

  } else {

    audio.pause();

    iconeMusica.textContent = '▶️';

    btnMusica.lastChild.textContent = ' Tocar música';

    tocando = false;

  }

});

// ===== Controle de volume =====

volumeMusica.addEventListener('input', () => {

  const volume = parseFloat(volumeMusica.value);

  audio.volume = volume;

  porcentagemVolume.textContent = Math.round(volume * 100) + '%';

  // Altera o ícone conforme o volume
  if (volume === 0) {

    iconeVolume.textContent = '🔇';

  } else if (volume < 0.5) {

    iconeVolume.textContent = '🔉';

  } else {

    iconeVolume.textContent = '🔊';

  }

});

// ===== Notas musicais =====

function criarNotas() {

  if (!tocando) return;

  const nota = document.createElement('span');

  nota.classList.add('nota-flutuante');

  nota.textContent = ['🎵', '🎶'][Math.floor(Math.random() * 2)];

  nota.style.left = (40 + Math.random() * 20) + '%';

  nota.style.setProperty('--nx', (Math.random() * 40 - 20) + 'px');

  notasContainer.appendChild(nota);

  setTimeout(() => nota.remove(), 2000);

  setTimeout(criarNotas, 500);

}


// ===== Toque de carinho na foto =====
const foto = document.getElementById('nossaFoto');
foto.addEventListener('click', () => {
  for (let i = 0; i < 8; i++) {
    setTimeout(criarCoracao, i * 60);
  }
});