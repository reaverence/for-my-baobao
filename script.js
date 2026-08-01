const screens = [...document.querySelectorAll(".gift-screen")];
const openingScreen = document.querySelector("#openingScreen");
const burstScreen = document.querySelector("#burstScreen");
const stickerScreen = document.querySelector("#stickerScreen");
const finalScreen = document.querySelector("#finalScreen");
const burstLetter = document.querySelector("#burstLetter");
const burstLetterOpen = document.querySelector("#burstLetterOpen");
const burstLetterContent = document.querySelector("#burstLetterContent");
const song = document.querySelector("#loveSong");
const songNote = document.querySelector("#songNote");

const burstPieces = [
  ["images/flowers stickers/flower-sticker-rose-sprig-clean.png", "-43vw", "-31vh", "clamp(560px, 110vw, 1500px)", ".86", "-29deg", ".02s"],
  ["images/flowers stickers/flower-sticker-autumn-cluster-clean.png", "-34vw", "-8vh", "clamp(540px, 100vw, 1400px)", ".82", "-18deg", ".1s"],
  ["images/flowers stickers/flower-sticker-botanical-clean.png", "-27vw", "25vh", "clamp(580px, 116vw, 1550px)", ".8", "-23deg", ".04s"],
  ["images/flowers stickers/flower-sticker-frame-clean.png", "-17vw", "-39vh", "clamp(600px, 122vw, 1620px)", ".88", "-6deg", ".14s"],
  ["images/flowers stickers/flower-sticker-peach-clean.png", "-8vw", "35vh", "clamp(530px, 98vw, 1360px)", ".84", "-8deg", ".08s"],
  ["images/flowers stickers/flower-sticker-dried-clean.png", "5vw", "-37vh", "clamp(580px, 115vw, 1540px)", ".81", "7deg", ".11s"],
  ["images/flowers stickers/flower-sticker-rose-sprig-clean.png", "15vw", "33vh", "clamp(560px, 106vw, 1480px)", ".9", "8deg", ".03s"],
  ["images/flowers stickers/flower-sticker-autumn-cluster-clean.png", "26vw", "-27vh", "clamp(550px, 102vw, 1420px)", ".84", "18deg", ".16s"],
  ["images/flowers stickers/flower-sticker-botanical-clean.png", "35vw", "4vh", "clamp(590px, 116vw, 1560px)", ".8", "22deg", ".07s"],
  ["images/flowers stickers/flower-sticker-frame-clean.png", "44vw", "30vh", "clamp(600px, 122vw, 1620px)", ".86", "27deg", ".13s"],
  ["images/flowers stickers/flower-sticker-peach-clean.png", "-45vw", "5vh", "clamp(540px, 100vw, 1380px)", ".88", "-31deg", ".2s"],
  ["images/flowers stickers/flower-sticker-dried-clean.png", "43vw", "-35vh", "clamp(570px, 112vw, 1500px)", ".82", "31deg", ".06s"],
  ["images/flowers stickers/flower-sticker-rose-sprig-clean.png", "-20vw", "43vh", "clamp(550px, 105vw, 1450px)", ".9", "-12deg", ".18s"],
  ["images/flowers stickers/flower-sticker-autumn-cluster-clean.png", "23vw", "43vh", "clamp(570px, 110vw, 1500px)", ".83", "15deg", ".1s"],
  ["images/flowers stickers/flower-sticker-botanical-clean.png", "0vw", "3vh", "clamp(620px, 124vw, 1660px)", ".7", "-4deg", ".12s"],
  ["images/flowers stickers/flower-sticker-frame-clean.png", "-4vw", "-2vh", "clamp(640px, 130vw, 1700px)", ".68", "9deg", ".2s"],
];

const favoriteBurstPieces = [
  ["images/favorites/cinnamoroll-sticker-01.png", "-37vw", "-28vh", "clamp(360px, 60vw, 720px)", "1", "-22deg", ".05s"],
  ["images/favorites/cinnamoroll-sticker-02.png", "31vw", "-31vh", "clamp(420px, 70vw, 840px)", ".95", "18deg", ".12s"],
  ["images/favorites/cinnamoroll-sticker-03.png", "-42vw", "8vh", "clamp(380px, 62vw, 760px)", "1", "-29deg", ".18s"],
  ["images/favorites/boba-sticker-clean.png", "38vw", "7vh", "clamp(420px, 70vw, 860px)", "1", "23deg", ".08s"],
  ["images/chocolates/chocolate-sticker-clean.png", "-32vw", "36vh", "clamp(380px, 62vw, 760px)", ".95", "-15deg", ".2s"],
  ["images/favorites/bag-sticker-clean.png", "32vw", "35vh", "clamp(400px, 65vw, 800px)", ".98", "17deg", ".14s"],
  ["images/favorites/cinnamoroll-sticker-01.png", "-6vw", "-42vh", "clamp(360px, 60vw, 720px)", ".9", "-8deg", ".23s"],
  ["images/favorites/cinnamoroll-sticker-03.png", "9vw", "43vh", "clamp(390px, 64vw, 780px)", ".9", "11deg", ".26s"],
  ["images/chocolates/chocolate-sticker-clean.png", "-8vw", "31vh", "clamp(400px, 65vw, 800px)", ".84", "-6deg", ".3s"],
  ["images/favorites/boba-sticker-clean.png", "12vw", "-34vh", "clamp(410px, 68vw, 830px)", ".9", "12deg", ".27s"],
  ["images/favorites/bag-sticker-clean.png", "-21vw", "-34vh", "clamp(380px, 62vw, 760px)", ".82", "-20deg", ".32s"],
  ["images/favorites/cinnamoroll-sticker-02.png", "5vw", "5vh", "clamp(440px, 72vw, 880px)", ".76", "4deg", ".34s"],
  ["images/favorites/favorite-cutout-churros.png", "-49vw", "-24vh", "clamp(420px, 72vw, 900px)", ".9", "-21deg", ".16s"],
  ["images/favorites/favorite-cutout-penguin.png", "47vw", "-24vh", "clamp(420px, 70vw, 860px)", ".86", "19deg", ".24s"],
  ["images/favorites/favorite-cutout-ice-cream.png", "-49vw", "25vh", "clamp(450px, 75vw, 920px)", ".86", "-18deg", ".28s"],
  ["images/favorites/favorite-cutout-watermelon-drink.png", "49vw", "23vh", "clamp(400px, 65vw, 800px)", ".9", "24deg", ".2s"],
  ["images/favorites/favorite-cutout-coffee.png", "-43vw", "-2vh", "clamp(420px, 68vw, 820px)", ".75", "-13deg", ".31s"],
  ["images/favorites/favorite-cutout-boba-photo.png", "44vw", "4vh", "clamp(420px, 68vw, 840px)", ".86", "17deg", ".29s"],
  ["images/favorites/favorite-cutout-sushi-rolls.png", "-47vw", "44vh", "clamp(440px, 74vw, 900px)", ".83", "-19deg", ".36s"],
  ["images/favorites/favorite-cutout-salmon-sushi.png", "47vw", "42vh", "clamp(440px, 74vw, 900px)", ".8", "14deg", ".39s"],
  ["images/favorites/favorite-cutout-dog-01.png", "-15vw", "-43vh", "clamp(430px, 70vw, 850px)", ".8", "-9deg", ".35s"],
  ["images/favorites/favorite-cutout-dog-02.png", "18vw", "-45vh", "clamp(430px, 70vw, 850px)", ".76", "12deg", ".42s"],
];

function buildBurst() {
  const field = document.querySelector("#burstField");
  burstPieces.forEach(([src, dx, dy, size, scale, rotation, delay]) => {
    const piece = document.createElement("span");
    const image = document.createElement("img");
    piece.className = "burst-flower";
    piece.style.setProperty("--dx", dx);
    piece.style.setProperty("--dy", dy);
    piece.style.setProperty("--size", size);
    piece.style.setProperty("--scale", scale);
    piece.style.setProperty("--rot", rotation);
    piece.style.setProperty("--delay", delay);
    image.src = src;
    image.alt = "";
    piece.append(image);
    field.append(piece);
  });
}

function buildFavoriteBurst() {
  const field = document.querySelector("#favoriteField");
  favoriteBurstPieces.forEach(([src, dx, dy, size, scale, rotation, delay]) => {
    const piece = document.createElement("span");
    const image = document.createElement("img");
    piece.className = "favorite-piece";
    piece.style.setProperty("--dx", dx);
    piece.style.setProperty("--dy", dy);
    piece.style.setProperty("--size", size);
    piece.style.setProperty("--scale", scale);
    piece.style.setProperty("--rot", rotation);
    piece.style.setProperty("--delay", delay);
    image.src = src;
    image.alt = "";
    piece.append(image);
    field.append(piece);
  });
}

function showScreen(nextScreen) {
  screens.forEach((screen) => {
    const isNext = screen === nextScreen;
    screen.classList.toggle("is-active", isNext);
    screen.setAttribute("aria-hidden", String(!isNext));
  });
}

function startSong() {
  song.play().then(() => {
    songNote.textContent = "our song is playing ♫";
  }).catch(() => {
    songNote.textContent = "tap the bouquet again if the song does not start.";
  });
}

function unwrap() {
  if (!openingScreen.classList.contains("is-active")) return;
  startSong();
  showScreen(burstScreen);
}

buildBurst();
buildFavoriteBurst();
document.querySelector("#unwrapButton").addEventListener("click", unwrap);
document.querySelector("#burstContinue").addEventListener("click", () => showScreen(stickerScreen));
burstLetterOpen.addEventListener("click", () => {
  burstLetter.classList.add("is-open");
  burstLetterContent.setAttribute("aria-hidden", "false");
  document.querySelector("#burstContinue").hidden = false;
});
document.querySelectorAll("[data-next]").forEach((button) => {
  button.addEventListener("click", () => showScreen(document.querySelector(`#${button.dataset.next}`)));
});

const stickerCards = [...document.querySelectorAll(".mood-bouquet")];
const stickerNote = document.querySelector("#stickerNote");
const stickerContinue = document.querySelector("#stickerContinue");
const pickedStickers = new Set();

stickerCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    if (card.classList.contains("is-open")) return;
    card.classList.add("is-open");
    card.classList.add("is-picked");
    card.setAttribute("aria-expanded", "true");
    card.querySelector(".mood-message")?.setAttribute("aria-hidden", "false");
    pickedStickers.add(index);
    stickerNote.textContent = card.dataset.stickerNote;

    if (pickedStickers.size === stickerCards.length) {
      stickerNote.textContent = "all three bouquets are open. you are very, very loved.";
      stickerContinue.disabled = false;
      stickerContinue.classList.remove("gift-button--disabled");
    }
  });
});

stickerContinue.addEventListener("click", () => {
  if (!stickerContinue.disabled) showScreen(finalScreen);
});

document.querySelector("#replayButton").addEventListener("click", () => {
  song.pause();
  song.currentTime = 0;
  songNote.textContent = "";
  pickedStickers.clear();
  stickerCards.forEach((card) => {
    card.classList.remove("is-picked", "is-open");
    card.setAttribute("aria-expanded", "false");
    card.querySelector(".mood-message")?.setAttribute("aria-hidden", "true");
  });
  stickerNote.textContent = "open each bouquet for a little note";
  stickerContinue.disabled = true;
  stickerContinue.classList.add("gift-button--disabled");
  burstLetter.classList.remove("is-open");
  burstLetterContent.setAttribute("aria-hidden", "true");
  document.querySelector("#burstContinue").hidden = true;
  showScreen(openingScreen);
});

song.addEventListener("error", () => {
  if (openingScreen.classList.contains("is-active")) return;
  songNote.textContent = "tap the bouquet again if the song does not start.";
});
