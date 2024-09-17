const categories = {
  default: {
    default: "-- All products --",
  },
  electronics: {
    default: "Electronics",
    smartphones: "Smartphones",
    laptops: "Laptops",
    tablets: "Tablets",
    headphones: "Headphones",
    smartwatches: "Smartwatches",
  },
  fashion: {
    default: "Fashion",
    menclothing: "Men's Clothing",
    womenclothing: "Women's Clothing",
    footwear: "Footwear",
    accessories: "Accessories",
  },
  homeandkitchen: {
    default: "Home & Kitchen",
    furniture: "Furniture",
    appliances: "Appliances",
    cookware: "Cookware",
    bedding: "Bedding",
  },
  beautyandhealth: {
    default: "Beauty & Health",
    skincare: "Skincare",
    makeup: "Makeup",
    haircare: "Haircare",
    healthandwellness: "Health and Wellness",
  },
  sportsandoutdoor: {
    default: "Sports & Outdoor",
    fitnessequipment: "Fitness Equipment",
    outdoorgear: "Outdoor Gear",
    bicycles: "Bicycles",
    watersports: "Water Sports",
  },
};

const products = [
  {
    id: 1,
    name: "iPhone 15",
    description:
      "The iPhone 15 features a sleek design, A16 Bionic chip, and improved camera technology. It offers stunning performance, 5G connectivity, and a high-resolution Super Retina XDR display.",
    category: ["electronics", "smartphones"],
    price: 1400,
    stock: true,
  },
  {
    id: 2,
    name: "MacBook Air",
    description:
      "The MacBook Air is a lightweight, high-performance laptop with Apple's M2 chip, offering incredible power efficiency and a Retina display that brings images and text to life.",
    category: ["electronics", "laptops"],
    price: 2700,
    stock: true,
  },
  {
    id: 3,
    name: "Dell XPS 13",
    description:
      "The Dell XPS 13 is a premium ultrabook with a stunning InfinityEdge display, long battery life, and powerful performance, making it perfect for professionals on the go.",
    category: ["electronics", "laptops"],
    price: 1400,
    stock: false,
  },
  {
    id: 4,
    name: "HP Spectre x360",
    description:
      "The HP Spectre x360 is a versatile 2-in-1 laptop with a gorgeous design, powerful Intel Core i7 processor, and long battery life, ideal for work and entertainment.",
    category: ["electronics", "laptops"],
    price: 900,
    stock: true,
  },
  {
    id: 5,
    name: "Samsung Galaxy S23",
    description:
      "The Samsung Galaxy S23 is packed with a dynamic AMOLED display, Snapdragon 8 Gen 2 processor, and an advanced camera system, offering top-notch performance and impressive visuals.",
    category: ["electronics", "smartphones"],
    price: 1100,
    stock: true,
  },
  {
    id: 6,
    name: "Google Pixel 8",
    description:
      "Google Pixel 8 offers a pure Android experience with an advanced Tensor G3 chip, exceptional AI-powered camera features, and smooth performance, ideal for tech enthusiasts.",
    category: ["electronics", "smartphones"],
    price: 790,
    stock: false,
  },
  {
    id: 7,
    name: "Sony WH-1000XM5",
    description:
      "The Sony WH-1000XM5 wireless headphones offer industry-leading noise cancellation, superior sound quality, and all-day comfort for immersive listening experiences.",
    category: ["electronics", "headphones"],
    price: 100,
    stock: true,
  },
  {
    id: 8,
    name: "Apple Watch Series 9",
    description:
      "The Apple Watch Series 9 includes enhanced fitness tracking, a faster S9 chip, and a sleek design, making it the perfect companion for health and wellness enthusiasts.",
    category: ["electronics", "smartwatches"],
    price: 120,
    stock: true,
  },
  {
    id: 9,
    name: "Samsung Galaxy Watch 6",
    description:
      "The Samsung Galaxy Watch 6 offers an array of fitness tracking features, ECG monitoring, and a vibrant AMOLED display, designed for an active lifestyle and seamless smartphone integration.",
    category: ["electronics", "smartwatches"],
    price: 100,
    stock: true,
  },
  {
    id: 10,
    name: "iPad Pro",
    description:
      "The iPad Pro features Apple's M2 chip, a Liquid Retina XDR display, and advanced pro-level performance, ideal for creative professionals and demanding tasks like video editing.",
    category: ["electronics", "tablets"],
    price: 1000,
    stock: true,
  },
  {
    id: 11,
    name: "Microsoft Surface Go",
    description:
      "The Microsoft Surface Go is a compact and affordable 2-in-1 device with a vibrant touchscreen display, built-in kickstand, and Windows 11, perfect for students and everyday tasks.",
    category: ["electronics", "tablets"],
    price: 900,
    stock: false,
  },
  {
    id: 12,
    name: "Samsung Galaxy Tab S8",
    description:
      "The Samsung Galaxy Tab S8 delivers powerful performance with its Snapdragon 8 Gen 1 processor, 120Hz AMOLED display, and S Pen integration, perfect for entertainment and productivity.",
    category: ["electronics", "tablets"],
    price: 825,
    stock: true,
  },
  {
    id: 13,
    name: "Ray-Ban Aviator Sunglasses",
    description:
      "Ray-Ban Aviators are iconic sunglasses known for their timeless design, lightweight metal frames, and polarized lenses that offer superior clarity and UV protection.",
    category: ["fashion", "accessories"],
    price: 150,
    stock: true,
  },
  {
    id: 14,
    name: "Nike Air Max 270",
    description:
      "The Nike Air Max 270 features a large Air unit for cushioning, a sleek design, and breathable materials, making it ideal for both casual wear and sports activities.",
    category: ["fashion", "footwear"],
    price: 160,
    stock: true,
  },
  {
    id: 15,
    name: "Levi's 501 Original Fit Jeans",
    description:
      "Levi's 501 Original Fit Jeans are a classic wardrobe staple, featuring durable denim construction, a timeless straight-leg design, and unmatched comfort for everyday wear.",
    category: ["fashion", "menclothing"],
    price: 70,
    stock: true,
  },
  {
    id: 16,
    name: "Gucci Marmont Matelassé Handbag",
    description:
      "The Gucci Marmont Matelassé Handbag is a luxurious designer accessory with chevron leather, gold-tone hardware, and a versatile chain strap, perfect for elevating any outfit.",
    category: ["fashion", "accessories"],
    price: 2300,
    stock: false,
  },
  {
    id: 17,
    name: "Adidas Ultraboost 22",
    description:
      "The Adidas Ultraboost 22 running shoes are designed for comfort and performance with responsive Boost cushioning, Primeknit upper for support, and a durable rubber outsole for excellent grip.",
    category: ["fashion", "footwear"],
    price: 180,
    stock: true,
  },
  {
    id: 18,
    name: "H&M Floral Print Dress",
    description:
      "This H&M floral print dress is lightweight and stylish, featuring a relaxed fit and a flowy silhouette, perfect for summer outings or casual wear.",
    category: ["fashion", "womenclothing"],
    price: 50,
    stock: true,
  },
  {
    id: 19,
    name: "Birkenstock Arizona Sandals",
    description:
      "The Birkenstock Arizona Sandals offer classic style and all-day comfort with their contoured cork footbed, adjustable straps, and durable EVA sole, making them perfect for warm-weather wear.",
    category: ["fashion", "footwear"],
    price: 100,
    stock: true,
  },
  {
    id: 20,
    name: "Dyson V11 Vacuum Cleaner",
    description:
      "The Dyson V11 is a powerful cordless vacuum cleaner with intelligent suction control, a high-torque cleaner head, and a long-lasting battery, ideal for deep cleaning any floor type.",
    category: ["homeandkitchen", "appliances"],
    price: 600,
    stock: true,
  },
  {
    id: 21,
    name: "Instant Pot Duo 7-in-1",
    description:
      "The Instant Pot Duo is a versatile 7-in-1 appliance that combines a pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker, and warmer in one compact device.",
    category: ["homeandkitchen", "cookware"],
    price: 100,
    stock: true,
  },
  {
    id: 22,
    name: "Le Creuset Dutch Oven",
    description:
      "The Le Creuset Dutch Oven is renowned for its superior heat retention and even cooking, featuring an enamel-coated cast iron body, perfect for making stews, soups, and roasts.",
    category: ["homeandkitchen", "cookware"],
    price: 350,
    stock: true,
  },
  {
    id: 23,
    name: "Casper Original Mattress",
    description:
      "The Casper Original Mattress offers a blend of soft foam and zoned support to provide pressure relief and spinal alignment, ensuring a comfortable night's sleep.",
    category: ["homeandkitchen", "bedding"],
    price: 1200,
    stock: true,
  },
  {
    id: 24,
    name: "Philips Sonicare DiamondClean Toothbrush",
    description:
      "The Philips Sonicare DiamondClean Toothbrush offers superior plaque removal and gum health with advanced sonic technology and multiple brushing modes for personalized oral care.",
    category: ["beautyandhealth", "healthandwellness"],
    price: 200,
    stock: true,
  },
  {
    id: 25,
    name: "Olaplex No.3 Hair Perfector",
    description:
      "Olaplex No.3 is a hair treatment that repairs damaged hair, strengthens bonds, and restores a healthy appearance, making it ideal for color-treated or chemically processed hair.",
    category: ["beautyandhealth", "haircare"],
    price: 28,
    stock: true,
  },
  {
    id: 26,
    name: "Fenty Beauty Pro Filt'r Foundation",
    description:
      "The Fenty Beauty Pro Filt'r Foundation offers a long-lasting, matte finish with buildable coverage, available in a wide range of shades to suit all skin tones.",
    category: ["beautyandhealth", "makeup"],
    price: 40,
    stock: true,
  },
  {
    id: 27,
    name: "CeraVe Moisturizing Cream",
    description:
      "CeraVe Moisturizing Cream provides long-lasting hydration with its blend of ceramides and hyaluronic acid, helping to restore and maintain the skin's natural protective barrier.",
    category: ["beautyandhealth", "skincare"],
    price: 20,
    stock: true,
  },
  {
    id: 28,
    name: "Peloton Bike",
    description:
      "The Peloton Bike offers an immersive indoor cycling experience with live and on-demand classes, a 22-inch HD touchscreen, and adjustable resistance for a full-body workout.",
    category: ["sportsandoutdoor", "fitnessequipment"],
    price: 1500,
    stock: true,
  },
  {
    id: 29,
    name: "The North Face Borealis Backpack",
    description:
      "The North Face Borealis Backpack is designed for everyday use and outdoor adventures, featuring a padded laptop compartment, FlexVent suspension system, and ample storage space.",
    category: ["sportsandoutdoor", "outdoorgear"],
    price: 100,
    stock: true,
  },
  {
    id: 30,
    name: "Coleman Sundome Tent",
    description:
      "The Coleman Sundome Tent is a reliable and easy-to-set-up camping tent, featuring WeatherTec waterproofing technology, durable materials, and room for up to 4 people.",
    category: ["sportsandoutdoor", "outdoorgear"],
    price: 90,
    stock: true,
  },
];

const addedProducts = [];

function displayProducts(productList) {
  const productContainer = document.querySelector(".productContainer");
  productContainer.innerHTML = "";

  if (productList.length != 0) {
    productList.forEach((product, index) => {
      const productCard = document.createElement("div");
      productCard.className = "productCard";
      productCard.id = `productCard${product.id};`;

      productCard.innerHTML = `
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>${categories[product.category[0]][product.category[1]]}</p>
                <div class='bottom'>
                    <p>$${product.price}</p>
                    ${
                      product.stock == true
                        ? '<button class="instock">in stock</button>'
                        : '<button class="outofstock">out of stock</button>'
                    }
                </div>
                <div class='qty' id='qty${product.id}'></div>
                <div class='cartBottom'>
                    <button onclick='displayOverlay(${
                      product.id
                    })'>View</button>
                    <div class='cartOperation'>
                        <p>Cart</p>
                        <button class='addProduct' ${
                          product.stock == true
                            ? `onclick='addProduct(${product.id})'`
                            : ""
                        }>+</button>
                        <button class='removeProduct' ${
                          product.stock == true
                            ? `onclick='removeProduct(${product.id})'`
                            : ""
                        }>-</button>
                    </div>
                </div>
            `;

      setTimeout(() => {
        productCard.classList.add("slide");
      }, 500 * index);
      productContainer.appendChild(productCard);
    });
  } else {
    const productNotFound = document.createElement("div");
    productNotFound.className = "productNotFound";
    productNotFound.innerHTML = "Product not found";

    productContainer.innerHTML = "";
    productContainer.appendChild(productNotFound);
  }
}

function displayCategories(categories) {
  const categoryBox = document.querySelector(".categories");
  categoryBox.innerHTML = "";
  categoryBox.onchange = () => {
    filteredCategory(categoryBox.value);
  };

  for (category in categories) {
    const cat = document.createElement("option");
    cat.value = category;
    cat.innerHTML = categories[category].default;
    categoryBox.appendChild(cat);
  }
}

function searchProduct() {
  const searchResult = document.querySelector(".search").value.toLowerCase();
  document.querySelector(".categories").value = "default";
  const filteredSearch = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchResult) ||
      product.description.toLowerCase().includes(searchResult) ||
      product.category[0].toLowerCase().includes(searchResult) ||
      product.category[1].toLowerCase().includes(searchResult) ||
      categories[product.category[0]][product.category[1]]
        .toLowerCase()
        .includes(searchResult)
    );
  });
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  displayProducts(filteredSearch);
}

function filteredCategory(cat) {
  const filteredCat = products.filter((product) => {
    document.querySelector(".search").value = "";
    if (cat === "default") {
      return product;
    } else {
      return product.category[0].includes(cat);
    }
  });
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  displayProducts(filteredCat);
}

window.addEventListener("scroll", () => {
  const stickyElement = document.querySelector(".header");
  const checkOut = document.querySelector(".checkOut");
  const height = stickyElement.offsetHeight;
  const rect = stickyElement.getBoundingClientRect();
  const viewPortHeight = window.innerHeight;
  const newHeight = viewPortHeight - rect.top - height;

  if (window.scrollY >= stickyElement.offsetTop) {
    stickyElement.classList.add("is-sticky");
    checkOut.classList.add("checkOutOverlay");
    checkOut.style.height = `${newHeight}px`;
    checkOut.style.top = `${rect.top + height}px`;
  } else {
    stickyElement.classList.remove("is-sticky");
    checkOut.classList.remove("checkOutOverlay");
    checkOut.style.height = `${newHeight}px`;
    checkOut.style.top = `${rect.top + height}px`;
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const stickyElement = document.querySelector(".header");
  const checkOut = document.querySelector(".checkOut");
  const height = stickyElement.offsetHeight;
  const rect = stickyElement.getBoundingClientRect();
  const viewPortHeight = window.innerHeight;
  const newHeight = viewPortHeight - rect.top - height;

  
  checkOut.style.height = `${newHeight}px`;
  checkOut.style.top = `${rect.top + height}px`;
});

function addProduct(id) {
  const addbuttons = document.querySelectorAll(".addProduct");

  addbuttons[id - 1].classList.add("scaledown");
  setTimeout(() => addbuttons[id - 1].classList.remove("scaledown"), 500);

  const product = { ...products[id - 1] };
  delete product.category;
  delete product.description;
  delete product.stock;
  product.qty = 1;
  const existingProduct = addedProducts.find((p) => p.id === product.id);

  if (existingProduct) {
    existingProduct.qty++;
  } else {
    addedProducts.push(product);
  }

  document.querySelector(".count").innerHTML = addedProducts.length;
  displayProductQty(id);
  displayCheckOut();
  const tableContainer = document.querySelector(".tableContainer");
  tableContainer.scrollTop = tableContainer.scrollHeight;
}

function removeProduct(id) {
  const removebuttons = document.querySelectorAll(".removeProduct");
  removebuttons[id - 1].classList.add("scaledown");
  setTimeout(() => removebuttons[id - 1].classList.remove("scaledown"), 500);

  const productIndex = addedProducts.findIndex((product) => product.id === id);

  if (productIndex !== -1) {
    const product = addedProducts[productIndex];

    if (product.qty > 1) {
      product.qty--;
    } else {
      addedProducts.splice(productIndex, 1);
    }
  }
  document.querySelector(".count").innerHTML = addedProducts.length;
  displayProductQty(id);
  displayCheckOut();
}

function productQty(id) {
  const existingProduct = addedProducts.find((p) => p.id === id);
  return existingProduct ? existingProduct.qty : 0;
}

function displayProductQty(id) {
  if (productQty(id) > 0) {
    document.getElementById(`qty${id}`).innerHTML = `${productQty(id)} added`;
  } else {
    document.getElementById(`qty${id}`).innerHTML = "";
  }
}

function displayOverlay(id) {
  const product = products[id - 1];
  console.log(products[id - 1]);

  const productOverlay = document.querySelector(".productOverlay");
  productOverlay.classList.add("productOverlayDisplay");

  const productCard = document.createElement("div");
  productCard.className = "productCard";

  productCard.innerHTML = `
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <p>${categories[product.category[0]][product.category[1]]}</p>
    <div class='bottom'>
        <p>$${product.price}</p>
        ${
          product.stock == true
            ? '<button class="instock">in stock</button>'
            : '<button class="outofstock">out of stock</button>'
        }
    </div>
    <div class='cartBottom'>
        <button>Buy Now</button>
    </div>
    `;
  productCard.classList.add("productPreview");
  document.querySelector(".overlayContainer").innerHTML = "";
  document.querySelector(".overlayContainer").append(productCard);
  console.log(productCard);
}

function closeOverlay() {
  document
    .querySelector(".productOverlay")
    .classList.remove("productOverlayDisplay");
}

function formatNumberWithCommas(number) {
  return number.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function displayCheckOut() {
  const checkOutDisplay = document.getElementById("checkOutBody");
  const checkOutTotal = document.getElementById("totalPrice");
  checkOutDisplay.innerHTML = "";

  let totalPrice = 0;

  addedProducts.forEach((product, index) => {
    const row = document.createElement("tr");

    const indexCell = document.createElement("td");
    indexCell.textContent = index + 1;

    const productNameCell = document.createElement("td");
    productNameCell.textContent = product.name;

    const qtyCell = document.createElement("td");
    qtyCell.textContent = product.qty;

    const priceCell = document.createElement("td");
    priceCell.textContent = `$${formatNumberWithCommas(product.price)}`;

    const totalPriceCell = document.createElement("td");
    let totalPriceValue = product.qty * product.price;
    totalPriceCell.textContent = `$${formatNumberWithCommas(totalPriceValue)}`;

    row.appendChild(indexCell);
    row.appendChild(productNameCell);
    row.appendChild(qtyCell);
    row.appendChild(priceCell);
    row.appendChild(totalPriceCell);

    checkOutDisplay.appendChild(row);
    totalPrice += totalPriceValue;
  });

  checkOutTotal.textContent = `$${formatNumberWithCommas(totalPrice)}`;
}

function checkOutProducts(){
  document.querySelector('.checkOut').classList.toggle('checkOutDisplay');
}

window.onload = () => {
  displayProducts(products);
  displayCategories(categories);
};
