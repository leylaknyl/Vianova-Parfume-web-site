const products = [
  {
    id: 1,
    name: "Radius",
    brand: "Vianova",
    type: "EDP",
    size: "50ml",
    category: "Women",
    scent: "Oriental",
    price: 1662,
    images: [
      "images/radius1.jpg",
      "images/radius2.jpg",
      "images/radius3.jpg"
    ],
    topNotes: "Pear, Pink Pepper, Orange Blossom",
    middleNotes: "Coffee, Jasmine, Bitter Almond",
    baseNotes: "Vanilla, Patchouli, Cedarwood, Cashmere Wood, Musk, Amber",
    description: "Radius is a captivating oriental fragrance designed for women who leave a memorable trace wherever they go. It opens with the juicy brightness of pear, pink pepper, and orange blossom, then deepens into an elegant heart of coffee, jasmine, and bitter almond. Warm vanilla, amber, musk, and woody notes create a rich and sophisticated finish, making Radius a bold yet feminine scent for special moments."
  },
  {
    id: 2,
    name: "The Time",
    brand: "Vianova",
    type: "EDP",
    size: "50ml",
    category: "Women",
    scent: "Floral",
    price: 1670,
    images: [
      "images/thetime1.jpg",
      "images/thetime2.jpg",
      "images/thetime3.jpg"
    ],
    topNotes: "Passion Fruit, Peach, Pear, Raspberry, Blackcurrant, Sand Accord",
    middleNotes: "Lily of the Valley",
    baseNotes: "Musk, Sandalwood, Vanilla, Patchouli, Heliotrope",
    description: "The Time is a graceful floral fragrance inspired by unforgettable moments. Its fruity opening blends passion fruit, peach, pear, raspberry, and blackcurrant with a soft sand accord. A delicate lily of the valley heart meets a warm base of musk, sandalwood, vanilla, patchouli, and heliotrope, creating an elegant and feminine signature."
  },
  {
    id: 3,
    name: "Off Line",
    brand: "Vianova",
    type: "EDP",
    size: "50ml",
    category: "Women",
    scent: "Fruity",
    price: 1650,
    images: [
      "images/offline1.jpg",
      "images/offline2.jpg",
      "images/offline3.jpg"
    ],
    topNotes: "Strawberry, Raspberry, Sour Cherry, Blackberry, Blueberry, Blackcurrant",
    middleNotes: "Violet, Jasmine",
    baseNotes: "Musk, Amber, Oak",
    description: "Off Line is a playful and modern fruity fragrance created for women with a lively and confident style. It opens with a rich blend of red fruits, including strawberry, raspberry, sour cherry, blackberry, blueberry, and blackcurrant. Violet and jasmine add a soft floral touch, while musk, amber, and oak leave a warm and memorable trail."
  },
  {
    id: 4,
    name: "Chrome",
    brand: "Vianova",
    type: "EDP",
    size: "50ml",
    category: "Men",
    scent: "Spicy",
    price: 1585,
    images: [
      "images/chrome1.jpg",
      "images/chrome2.jpg",
      "images/chrome3.jpg"
    ],
    topNotes: "Cinnamon, Cardamom, Orange Blossom, Bergamot",
    middleNotes: "Bourbon Vanilla, Elemi Resin",
    baseNotes: "Praline, Musk, Ambroxan, Guaiac Wood, Tonka Bean",
    description: "Chrome is a bold spicy fragrance designed for men with a strong and sophisticated presence. Cinnamon, cardamom, orange blossom, and bergamot create a striking opening, while bourbon vanilla and elemi resin add depth and warmth. Praline, musk, ambroxan, guaiac wood, and tonka bean complete the scent with a rich masculine finish."
  },
  {
    id: 5,
    name: "Chaos",
    brand: "Vianova",
    type: "EDP",
    size: "50ml",
    category: "Men",
    scent: "Aromatic",
    price: 1560,
    images: [
      "images/chaos1.jpg",
      "images/chaos2.jpg",
      "images/chaos3.jpg"
    ],
    topNotes: "Bergamot, Lychee, Peach",
    middleNotes: "Peony, Jasmine, Orange Blossom",
    baseNotes: "Musk, Woody Notes, Oakmoss",
    description: "Chaos is an aromatic fragrance that combines freshness, elegance, and masculine energy. It begins with a bright blend of bergamot, lychee, and peach, followed by a smooth floral heart of peony, jasmine, and orange blossom. Musk, woody notes, and oakmoss create a clean yet powerful base, making Chaos ideal for everyday sophistication."
  },
  {
    id: 6,
    name: "Jawa",
    brand: "Vianova",
    type: "EDP",
    size: "50ml",
    category: "Men",
    scent: "Aromatic",
    price: 1560,
    images: [
      "images/jawa1.jpg",
      "images/jawa2.jpg",
      "images/jawa3.jpg"
    ],
    topNotes: "Cinnamon, Cardamom, Grapefruit",
    middleNotes: "Lavender",
    baseNotes: "Licorice, Sandalwood, Amber, Patchouli, Vetiver",
    description: "Jawa is a charismatic aromatic fragrance crafted for men who prefer a confident and distinctive scent. Cinnamon, cardamom, and grapefruit create a spicy and energetic opening, while lavender adds a clean and refined balance. Licorice, sandalwood, amber, patchouli, and vetiver complete the perfume with a deep and masculine finish."
  }
];

const productsContainer = document.getElementById("productsContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const scentFilter = document.getElementById("scentFilter");
const priceFilter = document.getElementById("priceFilter");

function displayProducts(productList) {
  productsContainer.innerHTML = "";

  if (productList.length === 0) {
    productsContainer.innerHTML = `<p class="no-products">No products found.</p>`;
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
          <button onclick="viewDetails(${product.id})">View Details</button>
          <button class="cart-btn" data-id="${product.id}">Add to Cart</button>
        </div>
      </div>
    `;

    productsContainer.appendChild(productCard);
  });
}

function filterProducts() {
  const searchValue = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;
  const selectedScent = scentFilter.value;
  const selectedPrice = priceFilter.value;

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchValue);

    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    const matchesScent =
      selectedScent === "all" || product.scent === selectedScent;

    let matchesPrice = true;

    if (selectedPrice === "low") {
      matchesPrice = product.price < 1600;
    } else if (selectedPrice === "mid") {
      matchesPrice = product.price >= 1600 && product.price <= 1650;
    } else if (selectedPrice === "high") {
      matchesPrice = product.price > 1650;
    }

    return matchesSearch && matchesCategory && matchesScent && matchesPrice;
  });

  displayProducts(filteredProducts);
}

function viewDetails(productId) {
  localStorage.setItem("selectedProductId", productId);
  window.location.href = "product-detail.html";
}

searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
scentFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);

displayProducts(products);