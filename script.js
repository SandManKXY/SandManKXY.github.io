const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const barra = document.getElementById("barra");

const titulo = document.getElementById("titulo");
const artista = document.getElementById("artista");
const capa = document.getElementById("capa");

const musicas = [
  {
    titulo: "From Zero",
    artista: "Linkin Park",
    src: "musicas/musica1.mp3",
    capa: "capas/capa1.jpg"
  },
  {
    titulo: "The Emptiness Machine",
    artista: "Linkin Park",
    src: "musica/TEM.mp3",
    capa: "capas/capa2.jpg"
  },
  {
    titulo: "Cut the Bridge",
    artista: "Linkin Park",
    src: "musica/musica2.mp3",
    capa: "capas/capa2.jpg"
  },
  {
    titulo: "Heavy is the Crown",
    artista: "Linkin Park",
    src: "musica/musica2.mp3",
    capa: "capas/capa2.jpg"
  },
  {
    titulo: "Over Eatch Other",
    artista: "Linkin Park",
    src: "musicas/musica2.mp3",
    capa: "capas/capa2.jpg"
  },
  {
    titulo: "Casualty",
    artista: "Linkin Park",
    src: "musicas/musica2.mp3",
    capa: "capas/capa2.jpg"
  },
  {
    titulo: "Overflow",
    artista: "Linkin Park",
    src: "musicas/musica2.mp3",
    capa: "capas/capa2.jpg"
  },
  {
    titulo: "Two Faced",
    artista: "Linkin Park",
    src: "musicas/musica2.mp3",
    capa: "capas/capa2.jpg"
  },
  {
    titulo: "Stained",
    artista: "Linkin Park",
    src: "musicas/musica2.mp3",
    capa: "capas/capa2.jpg"
  },
  {
    titulo: "IGYEIH",
    artista: "Linkin Park",
    src: "musicas/musica2.mp3",
    capa: "capas/capa2.jpg"
  },
  {
    titulo: "Good Things Go",
    artista: "Linkin Park",
    src: "musicas/musica2.mp3",
    capa: "capas/capa2.jpg"
  },
  
];

let index = 0;

function carregarMusica(musica) {
  titulo.textContent = musica.titulo;
  artista.textContent = musica.artista;
  capa.src = musica.capa;
  audio.src = musica.src;
}

playBtn.onclick = () => {
  audio.play();
};

pauseBtn.onclick = () => {
  audio.pause();
};

document.getElementById("voltar").onclick = () => {
  index = (index - 1 + musicas.length) % musicas.length;
  carregarMusica(musicas[index]);
  audio.play();
};

document.getElementById("proxima").onclick = () => {
  index = (index + 1) % musicas.length;
  carregarMusica(musicas[index]);
  audio.play();
};

// Atualiza a barra
audio.ontimeupdate = () => {
  barra.value = (audio.currentTime / audio.duration) * 100 || 0;
};

// Mover na música com a barra
barra.oninput = () => {
  audio.currentTime = (barra.value / 100) * audio.duration;
};

// Trocar automaticamente para próxima música
audio.onended = () => {
  index = (index + 1) % musicas.length;
  carregarMusica(musicas[index]);
  audio.play();
};

// Inicializa
carregarMusica(musicas[index]);