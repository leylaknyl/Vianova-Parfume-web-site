
const detailContainer = document.getElementById("detailContainer");

const urlParams = new URLSearchParams(window.location.search);
const productIdFromUrl = urlParams.get("id");
const productIdFromStorage = localStorage.getItem("selectedProductId");

const selectedProductId = productIdFromUrl || productIdFromStorage;

const selectedProduct = products.find(product => String(product.id) === String(selectedProductId));

if (!selectedProduct) {
  detailContainer.innerHTML = `
    <div class="detail-error">
      <h2>Ürün bulunamadı</h2>
      <p>Lütfen ürünler sayfasına dönüp bir parfüm seçin.</p>
      <a href="products.html">Ürünlere Geri Dön</a>
    </div>
  `;
} else {
  displayProductDetail(selectedProduct);
}

function displayProductDetail(product) {
  detailContainer.innerHTML = `
    <div class="detail-container">
      <div class="detail-images">
        <img 
          src="${product.images[0]}" 
          alt="${product.name}" 
          class="main-detail-img" 
          id="mainDetailImage"
        >

        <div class="thumbnail-row">
          ${product.images.map(image => `
            <img 
              src="${image}" 
              alt="${product.name}" 
              onclick="changeImage('${image}')"
            >
          `).join("")}
        </div>
      </div>

      <div class="detail-info">
        <span class="category-tag">${product.category}</span>
        <h1>${product.name}</h1>
        <p class="detail-brand">${product.brand} | ${product.type} | ${product.size}</p>
        <p class="detail-scent">${translateScent(product.scent)}</p>
        <p class="detail-price">₺${product.price}</p>

        <p class="detail-description">${product.description}</p>

        <div class="notes-box">
          <h3>Koku Notaları</h3>

          <div class="note-item">
            <strong>Üst Notalar:</strong>
            <span>${product.topNotes}</span>
          </div>

          <div class="note-item">
            <strong>Orta Notalar:</strong>
            <span>${product.middleNotes}</span>
          </div>

          <div class="note-item">
            <strong>Alt Notalar:</strong>
            <span>${product.baseNotes}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="review-section compact-review">
      ${createDetailRatingHTML(product)}
      ${createCommentSectionHTML(product)}
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

function getUserRating(productId) {
  const savedRating = localStorage.getItem(`vianovaRating_${productId}`);
  return savedRating ? Number(savedRating) : null;
}

function createDetailRatingHTML(product) {
  const userRating = getUserRating(product.id);
  const shownRating = userRating || product.rating;
  const roundedRating = Math.round(shownRating);

  let starsHTML = "";

  for (let i = 1; i <= 5; i++) {
    starsHTML += `
      <button 
        type="button" 
        class="rating-star ${i <= roundedRating ? "active" : ""}" 
        data-rating="${i}">
        ★
      </button>
    `;
  }

  return `
    <div class="rating-section">
      <h3>Bu Parfümü Puanla</h3>
      <p class="comment-subtitle">Deneyimini yıldızlarla değerlendir.</p>

      <div class="rating-box">
        <div class="rating-stars">
          ${starsHTML}
        </div>
        <span class="rating-score">${shownRating.toFixed(1)} / 5</span>
      </div>
    </div>
  `;
}

function getProductComments(productId) {
  const savedComments = localStorage.getItem(`vianovaComments_${productId}`);
  return savedComments ? JSON.parse(savedComments) : [];
}

function saveProductComments(productId, comments) {
  localStorage.setItem(`vianovaComments_${productId}`, JSON.stringify(comments));
}

function createCommentSectionHTML(product) {
  const comments = getProductComments(product.id);

  const commentsHTML = comments.length === 0
    ? `<p class="comment-empty">Henüz yorum yapılmadı. İlk yorumu sen yap!</p>`
    : comments.map(comment => `
        <div class="comment-item">
          <p>${comment.text}</p>
        </div>
      `).join("");

  return `
    <div class="comment-section">
      <h3>Yorumlar</h3>
      <p class="comment-subtitle">Bu parfüm hakkındaki düşüncelerini paylaş.</p>

      <form id="commentForm" class="comment-form">
        <textarea id="commentText" placeholder="Yorumunuzu yazın..." required></textarea>
        <button type="submit" class="comment-submit-btn">Yorum Gönder</button>
      </form>

      <div id="commentsList" class="comments-list">
        ${commentsHTML}
      </div>
    </div>
  `;
}

function refreshRating(product) {
  const ratingSection = document.querySelector(".rating-section");

  if (ratingSection) {
    ratingSection.outerHTML = createDetailRatingHTML(product);
  }
}

function refreshComments(product) {
  const commentsList = document.getElementById("commentsList");
  const comments = getProductComments(product.id);

  if (!commentsList) return;

  if (comments.length === 0) {
    commentsList.innerHTML = `<p class="comment-empty">Henüz yorum yapılmadı. İlk yorumu sen yap!</p>`;
    return;
  }

  commentsList.innerHTML = comments.map(comment => `
    <div class="comment-item">
      <p>${comment.text}</p>
    </div>
  `).join("");
}

if (detailContainer && selectedProduct) {
  detailContainer.addEventListener("click", function (event) {
    const clickedStar = event.target.closest(".rating-star");

    if (clickedStar) {
      const rating = clickedStar.dataset.rating;
      localStorage.setItem(`vianovaRating_${selectedProduct.id}`, rating);
      refreshRating(selectedProduct);
    }
  });

  detailContainer.addEventListener("submit", function (event) {
    if (event.target.id === "commentForm") {
      event.preventDefault();

      const textInput = document.getElementById("commentText");
      const text = textInput.value.trim();

      if (text === "") return;

      const comments = getProductComments(selectedProduct.id);

      comments.push({
        text: text
      });

      saveProductComments(selectedProduct.id, comments);

      textInput.value = "";

      refreshComments(selectedProduct);
    }
  });
}