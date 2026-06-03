/* =========================
   SEPET SİSTEMİ
========================= */

const mesaj = document.getElementById("mesaj");
const sepetListesi = document.getElementById("sepetListesi");
const toplamFiyat = document.getElementById("toplamFiyat");
const sepetiTemizleBtn = document.getElementById("sepetiTemizleBtn");

let sepet = JSON.parse(localStorage.getItem("sepet")) || [];

function sepetiGoster() {
  sepetListesi.innerHTML = "";

  if (sepet.length === 0) {
    mesaj.innerHTML = "Sepetiniz boş.";
    toplamFiyat.innerHTML = "Toplam: 0 TL";
    sepetiTemizleBtn.style.display = "none";
    return;
  }

  sepetiTemizleBtn.style.display = "block";

  mesaj.innerHTML = `Sepette ${sepet.length} farklı ürün var.`;

  let toplam = 0;
  let eskiToplam = 0;
  let kadinUrunleri = [];
  let erkekUrunleri = [];
  
  for (let i = 0; i < sepet.length; i++) {
    eskiToplam += sepet[i].price * sepet[i].adet;
    for (let j = 0; j < sepet[i].adet; j++) {
      if (sepet[i].category === "Kadın") {
        kadinUrunleri.push(sepet[i].price);
      } else if (sepet[i].category === "Erkek") {
        erkekUrunleri.push(sepet[i].price);
  }
}

    sepetListesi.innerHTML += `
  <li class="cart-item">

    <img 
      src="${sepet[i].images[0]}" 
      alt="${sepet[i].name}" 
      class="cart-product-img"
    >

    <div class="cart-info">
      <h3>${sepet[i].name}</h3>

      <p>Cinsiyet: ${sepet[i].category}</p>
      <p>Koku: ${sepet[i].scent}</p>
      <p>Fiyat: ${sepet[i].price} TL</p>
      <p>Adet: ${sepet[i].adet}</p>

      <div class="cart-actions">
        <button onclick="adetAzalt(${i})">-</button>
        <button onclick="adetArtir(${i})">+</button>
        <button onclick="sepettenSil(${i})">
          Ürünü Sil
        </button>
      </div>
    </div>

  </li>
`;
  }

  kadinUrunleri.sort((a, b) => a - b);
erkekUrunleri.sort((a, b) => a - b);

let kadinToplam = 0;
let erkekToplam = 0;

for (let i = 0; i < kadinUrunleri.length; i++) {
  if (i === 1) {
    kadinToplam += kadinUrunleri[i] * 0.9;
  } else {
    kadinToplam += kadinUrunleri[i];
  }
}

for (let i = 0; i < erkekUrunleri.length; i++) {
  if (i % 2 === 0) {
    erkekToplam += erkekUrunleri[i];
  }
}

toplam = kadinToplam + erkekToplam;

  toplamFiyat.innerHTML = `
  <span class="old-total">Eski Toplam: ${eskiToplam} TL</span>
  <span class="campaign-text">Kampanya uygulandı</span>
  <span class="new-total">İndirimli Toplam: ${toplam} TL</span>
`;
}
function adetArtir(index) {
  sepet[index].adet += 1;

  localStorage.setItem("sepet", JSON.stringify(sepet));

  sepetiGoster();
}

function adetAzalt(index) {
  if (sepet[index].adet > 1) {
    sepet[index].adet -= 1;
  } else {
    sepet.splice(index, 1);
  }

  localStorage.setItem("sepet", JSON.stringify(sepet));

  sepetiGoster();
}

function sepettenSil(index) {
  sepet.splice(index, 1);

  localStorage.setItem("sepet", JSON.stringify(sepet));

  sepetiGoster();
}

sepetiTemizleBtn.addEventListener("click", function () {
  sepet = [];

  localStorage.setItem("sepet", JSON.stringify(sepet));
});
sepetiGoster();
