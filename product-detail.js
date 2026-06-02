const detailContainer = document.getElementById("detailContainer");
const selectedProductId = localStorage.getItem("selectedProductId");

const selectedProduct = products.find(product => product.id == selectedProductId);

if (!selectedProduct) {
  detailContainer.innerHTML = `
    <div class="detail-error">
      <h2>Ürün bulunamadı</h2>
      <p>Lütfen ürünler sayfasına dönüp bir parfüm seçin.</p>
      <a href="products.html">Ürünlere Geri Dön</a>
    </div>
  `;
} else {
  detailContainer.innerHTML = `
    <div class="detail-images">
      <img src="${selectedProduct.images[0]}" alt="${selectedProduct.name}" class="main-detail-img" id="mainDetailImage">

      <div class="thumbnail-row">
        <img src="${selectedProduct.images[0]}" alt="${selectedProduct.name}" onclick="changeImage('${selectedProduct.images[0]}')">
        <img src="${selectedProduct.images[1]}" alt="${selectedProduct.name}" onclick="changeImage('${selectedProduct.images[1]}')">
        <img src="${selectedProduct.images[2]}" alt="${selectedProduct.name}" onclick="changeImage('${selectedProduct.images[2]}')">
      </div>
    </div>

    <div class="detail-info">
      <span class="category-tag">${translateCategory(selectedProduct.category)}</span>
      <h1>${selectedProduct.name}</h1>

      <p class="detail-brand">${selectedProduct.brand} | ${selectedProduct.type} | ${selectedProduct.size}</p>
      <p class="detail-scent">${translateScent(selectedProduct.scent)}</p>
      <p class="detail-price">₺${selectedProduct.price}</p>

      <p class="detail-description">${selectedProduct.description}</p>

      <div class="notes-box">
        <h3>Koku Notaları</h3>

        <div class="note-item">
          <strong>Üst Notalar:</strong>
          <span>${selectedProduct.topNotes}</span>
        </div>

        <div class="note-item">
          <strong>Orta Notalar:</strong>
          <span>${selectedProduct.middleNotes}</span>
        </div>

        <div class="note-item">
          <strong>Alt Notalar:</strong>
          <span>${selectedProduct.baseNotes}</span>
        </div>
      </div>
    </div>
  `;
}

function changeImage(imagePath) {
  const mainImage = document.getElementById("mainDetailImage");
  mainImage.src = imagePath;
}

function translateScent(scent) {
  if (scent === "Oriental") return "Oryantal";
  if (scent === "Floral") return "Çiçeksi";
  if (scent === "Fruity") return "Meyveli";
  if (scent === "Spicy") return "Baharatlı";
  if (scent === "Aromatic") return "Aromatik";
  return scent;
}


function translateCategory(category) {
  if (category === "Women") return "Kadın";
  if (category === "Men") return "Erkek";
  return category;
}