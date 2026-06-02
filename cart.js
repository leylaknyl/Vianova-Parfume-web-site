const mesaj = document.getElementById("mesaj");
const ekleBtn = document.getElementById("ekleBtn");
const sepetListesi = document.getElementById("sepetListesi");
const toplamFiyat = document.getElementById("toplamFiyat");
const sepetiTemizleBtn = document.getElementById("sepetiTemizleBtn");

let sepet =[
    {
        isim: "Chrome",
        cinsiyet: "Erkek",
        fiyat: 1585,
        adet: 1
    },
    {
        isim: "Off Line",
        cinsiyet: "Kadın",
        fiyat: 1650,
        adet: 1
    },
    {
        isim: "The Time",
        cinsiyet: "Kadın",
        fiyat: 1670,
        adet: 1
    },
    {
        isim: "Faver",
        cinsiyet: "Erkek",
        fiyat: 1560,
        adet: 1
    },
    {
        isim: "Radius",
        cinsiyet: "Kadın",
        fiyat: 1662,
        adet: 1
    },
    {
        isim: "Chaos",
        cinsiyet: "Erkek",
        fiyat: 1560,
        adet: 1
    }
];


sepetiTemizleBtn.addEventListener("click", function () {
    sepet = [];
    sepetiGoster();
});

function sepettenSil(index) {
    sepet.splice(index, 1);
    sepetiGoster();
}

function sepetiGoster() {
    sepetListesi.innerHTML = "";

    let toplam = 0;

    for (let i = 0; i < sepet.length; i++) {
        sepetListesi.innerHTML += `
            <li>
          ${sepet[i].isim} - ${sepet[i].cinsiyet}
            <br>
            Fiyat: ${sepet[i].fiyat} TL
            <br>
            Adet: ${sepet[i].adet}
            <button onclick="sepettenSil(${i})">Sil</button>
            </li>
        `;

        toplam += sepet[i].fiyat;
    }

    toplamFiyat.innerHTML = `Toplam: ${toplam} TL`;

    if (sepet.length === 0) {
        mesaj.innerHTML = "Sepetiniz boş.";
    } else {
        mesaj.innerHTML = `Sepette ${sepet.length} ürün var.`;
    }
}
sepetiGoster();