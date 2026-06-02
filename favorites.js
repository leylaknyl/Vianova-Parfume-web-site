const favoriMesaj = document.getElementById("favoriMesaj");
const favoriListesi = document.getElementById("favoriListesi");
const favorileriTemizleBtn = document.getElementById("favorileriTemizleBtn");

let favoriler = [
    {
        isim: "The Time",
        cinsiyet: "Kadın",
        fiyat: 1670,
        kategori: "Çiçeksi • Meyvemsi • Tatlı"
    },
    {
        isim: "Chaos",
        cinsiyet: "Erkek",
        fiyat: 1560,
        kategori: "Odunsu • Baharatlı • Güçlü"
    },
    {
        isim: "Chrome",
        cinsiyet: "Unisex",
        fiyat: 1585,
        kategori: "Amber • Oryantal • Sıcak"
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
                <h3>${favoriler[i].isim}</h3>
                <p>Cinsiyet: ${favoriler[i].cinsiyet}</p>
                <p>Kategori: ${favoriler[i].kategori}</p>
                <p>Fiyat: ${favoriler[i].fiyat} TL</p>

                <button onclick="favoridenSil(${i})">
                    Favoriden Çıkar
                </button>

                <hr>
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