const favoriMesaj = document.getElementById("favoriMesaj");
const favoriListesi = document.getElementById("favoriListesi");
const favorileriTemizleBtn = document.getElementById("favorileriTemizleBtn");

let favoriler = JSON.parse(localStorage.getItem("favoriler")) || [];

function favorileriGoster() {
  favoriListesi.innerHTML = "";

  if (favoriler.length === 0) {
    favoriMesaj.innerHTML = "Henüz favori parfümünüz bulunmuyor.";

    favorileriTemizleBtn.style.display = "none";

    return;
  }

  favorileriTemizleBtn.style.display = "block";

  favoriMesaj.innerHTML = `♥ Koleksiyonunuzda ${favoriler.length} favori parfüm bulunuyor`;

  for (let i = 0; i < favoriler.length; i++) {
    favoriListesi.innerHTML += `
<div class="favorite-card">

    <div class="favorite-image-box">

        <img src="${favoriler[i].images[0]}" alt="${favoriler[i].name}">

        <span class="favorite-badge">
            ♥
        </span>

    </div>

    <div class="favorite-info">

        <h3>${favoriler[i].name}</h3>

        <p>${favoriler[i].category} Parfüm</p>

        <p class="favorite-scent">
            ${favoriler[i].scent}
        </p>

        <span class="favorite-price">
            ₺${favoriler[i].price}
        </span>

        <button class="favorite-btn" onclick="favoridenSil(${i})">
    <i class="fa-solid fa-heart-crack"></i>
    Favorilerden Çıkar
</button>

    </div>

</div>
`;
  }
}

function favoridenSil(index) {
  favoriler.splice(index, 1);
  localStorage.setItem("favoriler", JSON.stringify(favoriler));
  favorileriGoster();
}

favorileriTemizleBtn.addEventListener("click", function () {
  favoriler = [];
  localStorage.setItem("favoriler", JSON.stringify(favoriler));
  favorileriGoster();
});

favorileriGoster();
