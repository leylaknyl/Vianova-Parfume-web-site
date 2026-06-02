const favoriMesaj = document.getElementById("favoriMesaj");
const favoriListesi = document.getElementById("favoriListesi");
const favorileriTemizleBtn = document.getElementById("favorileriTemizleBtn");

let favoriler = JSON.parse(localStorage.getItem("favoriler")) || [];

function favorileriGoster() {
  favoriListesi.innerHTML = "";

  if (favoriler.length === 0) {
    favoriMesaj.innerHTML = "Favori ürününüz yok.";
    return;
  }

  favoriMesaj.innerHTML = favoriler.length + " favori ürününüz var.";

  for (let i = 0; i < favoriler.length; i++) {
    favoriListesi.innerHTML += `
      <li>
        <h3>${favoriler[i].name}</h3>
        <p>${favoriler[i].category}</p>
        <p>${favoriler[i].scent}</p>
        <p>₺${favoriler[i].price}</p>

        <button onclick="favoridenSil(${i})">
          Favoriden Çıkar
        </button>

        <hr>
      </li>
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