const openQuizBtn = document.getElementById("openQuizBtn");
const closeQuizBtn = document.getElementById("closeQuizBtn");
const quizModal = document.getElementById("quizModal");
const showResultBtn = document.getElementById("showResultBtn");
const quizResult = document.getElementById("quizResult");
const quizPopup = document.querySelector(".quiz-popup");

openQuizBtn.addEventListener("click", function () {

    document.querySelector(".quiz-popup").style.display = "none";

    quizModal.classList.add("active");

});

closeQuizBtn.addEventListener("click", function () {
    quizModal.classList.remove("active");
});

showResultBtn.addEventListener("click", function () {
    const cinsiyet = document.querySelector('input[name="cinsiyet"]:checked');
    const cevap1 = document.querySelector('input[name="soru1"]:checked');
    const cevap2 = document.querySelector('input[name="soru2"]:checked');
    const cevap3 = document.querySelector('input[name="soru3"]:checked');

    if (!cinsiyet || !cevap1 || !cevap2 || !cevap3) {
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

    if (cinsiyet.value === "Kadin") {
        if (aSayisi >= cSayisi) {
            quizResult.innerHTML =
                "<h3>Size önerilen parfümler:</h3>" +
                "<strong>The Time</strong><br>" +
                "<strong>Off Line</strong>";
        } else {
            quizResult.innerHTML =
                "<h3>Size önerilen parfüm:</h3>" +
                "<strong>Radius</strong>";
        }
    } else {
        if (bSayisi >= cSayisi) {
            quizResult.innerHTML =
                "<h3>Size önerilen parfümler:</h3>" +
                "<strong>Chaos</strong><br>" +
                "<strong>Jawa</strong>";
        } else {
            quizResult.innerHTML =
                "<h3>Size önerilen parfüm:</h3>" +
                "<strong>Chrome</strong>";
        }
    }
});
// Sayfa açıldıktan 5 saniye sonra göster
setTimeout(() => {

    quizPopup.style.display = "block";

    setTimeout(() => {
        quizPopup.style.display = "none";
    }, 30000);

}, 5000);