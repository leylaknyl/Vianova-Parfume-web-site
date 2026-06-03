const products = [
  {
    id: 1,
    name: "RADIUS",
    brand: "Vianova",
    type: "EDP",
    size: "50ml",
    category: "Kadın",
    scent: "Oriental",
    price: 1662,
    images: [
      "../images/radius1.jpg",
      "../images/radius2.jpg",
      "../images/radius3.jpg"
    ],
    topNotes: "Armut, Pembe Biber, Portakal Çiçeği",
middleNotes: "Kahve, Yasemin, Acı Badem",
baseNotes: "Vanilya, Paçuli, Sedir Ağacı, Kaşmir Ağacı, Misk, Amber",
description: "Radius, girdiği ortamda iz bırakmak isteyen kadınlar için tasarlanmış etkileyici bir oryantal kokudur. Armut, pembe biber ve portakal çiçeğinin canlı açılışı; kahve, yasemin ve acı bademin sofistike dokusuyla derinleşir. Vanilya, amber, misk ve odunsu notalarla tamamlanan bu parfüm, güçlü, feminen ve unutulmaz bir imza koku sunar."
  },
  {
    id: 2,
    name: "THE TIME",
    brand: "Vianova",
    type: "EDP",
    size: "50ml",
    category: "Kadın",
    scent: "Floral",
    price: 1670,
    images: [
      "../images/thetime1.jpg",
      "../images/thetime2.jpg",
      "../images/thetime3.jpg"
    ],
    topNotes: "Çarkıfelek, Şeftali, Armut, Ahududu, Siyah Frenk Üzümü, Kum Akoru",
middleNotes: "Müge",
baseNotes: "Misk, Sandal Ağacı, Vanilya, Paçuli, Heliotrop",
description: "The Time, unutulmaz anların zarafetinden ilham alan çiçeksi ve feminen bir kokudur. Meyvemsi açılışı çarkıfelek, şeftali, armut, ahududu ve siyah frenk üzümüyle canlı bir etki yaratır. Müge notasının narin dokusu; misk, sandal ağacı, vanilya ve paçuliyle birleşerek yumuşak, zarif ve kalıcı bir iz bırakır."
  },
  {
    id: 3,
    name: "OFF LINE",
    brand: "Vianova",
    type: "EDP",
    size: "50ml",
    category: "Kadın",
    scent: "Fruity",
    price: 1650,
    images: [
      "../images/offline1.jpg",
      "../images/offline2.jpg",
      "../images/offline3.jpg"
    ],
    topNotes: "Çilek, Ahududu, Vişne, Böğürtlen, Yaban Mersini, Siyah Frenk Üzümü",
middleNotes: "Menekşe, Yasemin",
baseNotes: "Misk, Amber, Meşe",
description: "Off Line, enerjik ve modern kadınlar için tasarlanmış canlı bir meyveli kokudur. Çilek, ahududu, vişne, böğürtlen ve yaban mersininin parlak açılışı neşeli ve dikkat çekici bir etki oluşturur. Menekşe ve yaseminin zarif dokusu, misk, amber ve meşe notalarıyla birleşerek sıcak ve akılda kalıcı bir final sunar."
  },
  {
    id: 4,
    name: "CHROME",
    brand: "Vianova",
    type: "EDP",
    size: "50ml",
    category: "Erkek",
    scent: "Spicy",
    price: 1585,
    images: [
      "../images/chrome1.jpg",
      "../images/chrome2.jpg",
      "../images/chrome3.jpg"
    ],
     topNotes: "Tarçın, Kakule, Portakal Çiçeği, Bergamot",
middleNotes: "Bourbon Vanilya, Elemi Reçinesi",
baseNotes: "Pralin, Misk, Ambroxan, Guaiac Ağacı, Tonka",
description: "Chrome, güçlü ve sofistike bir duruşa sahip erkekler için tasarlanmış baharatlı bir kokudur. Tarçın, kakule, portakal çiçeği ve bergamotla etkileyici bir açılış yapar. Bourbon vanilya ve elemi reçinesi kokuya sıcaklık katarken; pralin, misk, ambroxan, guaiac ağacı ve tonka notaları maskülen, derin ve kalıcı bir karakter oluşturur." },
  {
    id: 5,
    name: "CHAOS",
    brand: "Vianova",
    type: "EDP",
    size: "50ml",
    category: "Erkek",
    scent: "Aromatic",
    price: 1560,
    images: [
      "../images/chaos1.jpg",
      "../images/chaos2.jpg",
      "../images/chaos3.jpg"
    ],
   topNotes: "Bergamot, Liçi, Şeftali",
middleNotes: "Şakayık, Yasemin, Portakal Çiçeği",
baseNotes: "Misk, Odunsu Notalar, Meşe Yosunu",
description: "Chaos, ferahlık, zarafet ve maskülen enerjiyi bir araya getiren aromatik bir kokudur. Bergamot, liçi ve şeftalinin aydınlık açılışı kokuya canlı bir başlangıç verir. Şakayık, yasemin ve portakal çiçeğinin yumuşak kalbi; misk, odunsu notalar ve meşe yosunuyla dengelenerek temiz, güçlü ve günlük kullanıma uygun bir iz bırakır."
  },
  {
    id: 6,
    name: "JAWA",
    brand: "Vianova",
    type: "EDP",
    size: "50ml",
    category: "Erkek",
    scent: "Aromatic",
    price: 1560,
    images: [
      "../images/jawa1.jpg",
      "../images/jawa2.jpg",
      "../images/jawa3.jpg"
    ],
    topNotes: "Tarçın, Kakule, Greyfurt",
middleNotes: "Lavanta",
baseNotes: "Meyan Kökü, Sandal Ağacı, Amber, Paçuli, Vetiver",
description: "Jawa, kendinden emin ve karakteristik kokuları tercih eden erkekler için tasarlanmış aromatik bir parfümdür. Tarçın, kakule ve greyfurtun baharatlı ve enerjik açılışı lavantanın temiz dokusuyla dengelenir. Meyan kökü, sandal ağacı, amber, paçuli ve vetiver notaları ise kokuya derin, sıcak ve maskülen bir bitiş kazandırır."
  }
];

const productsContainer = document.getElementById("productsContainer");
const categoryFilter = document.getElementById("categoryFilter");
const scentFilter = document.getElementById("scentFilter");
const priceFilter = document.getElementById("priceFilter");

function displayProducts(productList) {
  productsContainer.innerHTML = "";

  if (productList.length === 0) {
    productsContainer.innerHTML = `<p class="no-products">Ürün bulunamadı.</p>`;
    return;
  }

  productList.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${product.images[0]}" alt="${product.name}" class="product-img">

      <div class="product-info">
        <span class="category-tag">${product.category}</span>
        <h3>${product.name}</h3>
        <p class="brand">${product.brand} | ${product.type} | ${product.size}</p>
        <p class="scent">${product.scent}</p>
        <p class="price">₺${product.price}</p>

        <div class="product-buttons">
  <button type="button" class="details-btn" data-id="${product.id}">Detayları Gör</button>
</div>

        <button onclick="viewDetails(${product.id})">Detayları Gör</button>

        <button class="cart-btn" data-id="${product.id}">
          Sepete Ekle
        </button>

        <button class="favorite-btn" onclick="favoriyeEkle(${product.id})">
          ♥
        </button>
      </div>

      </div>
    `;

    productsContainer.appendChild(productCard);
  });
}

function filterProducts() {
  const selectedCategory = categoryFilter.value.trim();
  const selectedScent = scentFilter.value.trim();
  const selectedPrice = priceFilter.value.trim();

  const filteredProducts = products.filter(product => {
    const productCategory = product.category.trim();
    const productScent = product.scent.trim();

    const matchesCategory =
      selectedCategory === "all" || productCategory === selectedCategory;

    const matchesScent =
      selectedScent === "all" || productScent === selectedScent;

    let matchesPrice = true;

    if (selectedPrice === "low") {
      matchesPrice = product.price < 1600;
    } else if (selectedPrice === "mid") {
      matchesPrice = product.price >= 1600 && product.price <= 1650;
    } else if (selectedPrice === "high") {
      matchesPrice = product.price > 1650;
    }

    return matchesCategory && matchesScent && matchesPrice;
  });

  displayProducts(filteredProducts);
}


if (productsContainer) {
  categoryFilter.addEventListener("change", filterProducts);
  scentFilter.addEventListener("change", filterProducts);
  priceFilter.addEventListener("change", filterProducts);

  displayProducts(products);

categoryFilter.addEventListener("change", filterProducts);
scentFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);

displayProducts(products);

function favoriyeEkle(productId) {
  const secilenUrun = products.find(product => product.id === productId);

  let favoriler = JSON.parse(localStorage.getItem("favoriler")) || [];

  const zatenVarMi = favoriler.some(product => product.id === productId);

  if (zatenVarMi) {
    alert("Bu ürün zaten favorilerinizde.");
    return;
  }

  favoriler.push(secilenUrun);

  localStorage.setItem("favoriler", JSON.stringify(favoriler));

  alert(secilenUrun.name + " favorilere eklendi.");

} }

function openProductDetail(productId) {
  localStorage.setItem("selectedProductId", productId);
  window.location.href = "product-detail.html";
}

if (productsContainer) {
  categoryFilter.addEventListener("change", filterProducts);
  scentFilter.addEventListener("change", filterProducts);
  priceFilter.addEventListener("change", filterProducts);

  productsContainer.addEventListener("click", function (event) {
    const detailButton = event.target.closest(".details-btn");

    if (detailButton) {
      const productId = detailButton.dataset.id;
      openProductDetail(productId);
    }
  });

  displayProducts(products);
}