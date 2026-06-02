const favoriMesaj = document.getElementById("favoriMesaj");
const favoriListesi = document.getElementById("favoriListesi");
const favorileriTemizleBtn = document.getElementById("favorileriTemizleBtn");

let favoriler = [
    {
        isim: "Chrome",
        cinsiyet: "Erkek",
        fiyat: 1585
    },
    {
        isim: "Radius",
        cinsiyet: "Kadın",
        fiyat: 1662
    },
    {
        isim: "Chaos",
        cinsiyet: "Erkek",
        fiyat: 1560
    }
];

favorileriTemizleBtn.addEventListener("click", function () {
    favoriler = [];
    favorileriGoster();
});

function favoridenSil(index) {
    favoriler.splice(index, 1);
    favorileriGoster();
}

function favorileriGoster() {
    favoriListesi.innerHTML = "";

    for (let i = 0; i < favoriler.length; i++) {
        favoriListesi.innerHTML += `
            <li>
                ${favoriler[i].isim} - ${favoriler[i].cinsiyet} - ${favoriler[i].fiyat} TL
                <button onclick="favoridenSil(${i})">Favoriden Çıkar</button>
            </li>
        `;
    }

    if (favoriler.length === 0) {
        favoriMesaj.innerHTML = "Favori ürününüz yok.";
    } else {
        favoriMesaj.innerHTML = `${favoriler.length} favori ürününüz var.`;
    }
}

favorileriGoster();