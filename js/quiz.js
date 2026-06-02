const openQuizBtn = document.getElementById("openQuizBtn");
const closeQuizBtn = document.getElementById("closeQuizBtn");
const quizModal = document.getElementById("quizModal");
const showResultBtn = document.getElementById("showResultBtn");
const quizResult = document.getElementById("quizResult");

openQuizBtn.addEventListener("click", function () {
    quizModal.style.display = "block";
});

closeQuizBtn.addEventListener("click", function () {
    quizModal.style.display = "none";
});

showResultBtn.addEventListener("click", function () {
    const cevap1 = document.querySelector('input[name="soru1"]:checked');
    const cevap2 = document.querySelector('input[name="soru2"]:checked');
    const cevap3 = document.querySelector('input[name="soru3"]:checked');

    if (!cevap1 || !cevap2 || !cevap3) {
        alert("Lütfen tüm soruları cevaplayınız.");
        return;
    }

    let aSayisi = 0;
    let bSayisi = 0;
    let cSayisi = 0;

    const cevaplar = [cevap1.value, cevap2.value, cevap3.value];

    for (let i = 0; i < cevaplar.length; i++) {
        if (cevaplar[i] === "A") {
            aSayisi++;
        } else if (cevaplar[i] === "B") {
            bSayisi++;
        } else {
            cSayisi++;
        }
    }

    if (aSayisi >= bSayisi && aSayisi >= cSayisi) {
        quizResult.innerHTML = `
            <h3>Çiçeksi Meyvemsi Tatlı</h3>
            <p>Size önerilen parfümler:</p>
            <strong>The Time</strong><br>
            <strong>Off Line</strong>
        `;
    } else if (bSayisi >= aSayisi && bSayisi >= cSayisi) {
        quizResult.innerHTML = `
            <h3>Odunsu Baharatlı Güçlü</h3>
            <p>Size önerilen parfümler:</p>
            <strong>Chaos</strong><br>
            <strong>Jawa</strong>
        `;
    } else {
        quizResult.innerHTML = `
            <h3>Amber Oryantal Sıcak</h3>
            <p>Size önerilen parfümler:</p>
            <strong>Chrome</strong><br>
            <strong>Radius</strong>
        `;
    }
});