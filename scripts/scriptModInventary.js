import Product from "./products.class.js";
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});
signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
const createItemForm = document.getElementById("create-item-form");
function addProductToJSON(name, img, stock, price) {
  const newProduct = {
    name: name,
    img: img,
    stock: stock,
    price: price
  };
  const currentProducts = JSON.parse(localStorage.getItem("products")) || [];
  currentProducts.push(newProduct);
  localStorage.setItem("products", JSON.stringify(currentProducts));
}
async function addProduct(event) {
  event.preventDefault();
  const name = document.getElementById("create-name").value;
  const img = document.getElementById("create-img").value;
  const stock = document.getElementById("create-stock").value;
  const price = document.getElementById("create-price").value;
  if (!name || !img || !stock || !price) {
    alert("Por favor, complete todos los campos.");
    return;
  }
  addProductToJSON(name, img, stock, price);
  const response = await fetch("../data/invetary.json");
  const products = await response.json();
  const newId = generateId(products);
  const newProductWithId = new Product(newId, name, price, stock, img);
  products.push(newProductWithId);
  await saveProducts(products);
  renderCards(products);
  createItemForm.reset();
}
function generateId(products) {
  let newId;
  do {
    newId = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
  } while (products.some((product) => product.id === newId));
  return newId;
}
async function saveProducts(products) {
  await fetch("../data/invetary.json", {
    method: "PUT",
    body: JSON.stringify(products),
  });
} 
createItemForm.addEventListener("submit", addProduct); 
async function loadProducts() {
  const response = await fetch("../data/invetary.json");
  const products = await response.json();
//  renderCards(products);
}
loadProducts();
const priceInput = document.getElementById("create-price");
signInButton.addEventListener("click", function(event) {
  event.preventDefault();
  addProduct(event);
});
function renderCards(productsArray) {
  const cardsContainer = document.getElementById("card");
  cardsContainer.innerHTML = "";
  const cards = productsArray.map((product) => `
    <article class="card card--1">
      <div class="card__img" id="card_img_${product.id}"></div>
      <a href="#" class="card_link">
        <div class="card__img--hover" id="card__img--hover_${product.id}"></div>
      </a>
      <div class="card__info">
        <span class="card__category">Id: ${product.id}</span>
        <h3 class="card__title">${product.name}</h3>
        <span class="card__by">Stock <a href="#" class="card__author" title="author">${product.stock}</a><br> Price <a href="#" class="card__author" title="author">${product.price}</a></span>
      </div>
    </article>
    <style> 
      #card_img_${product.id}, #card__img--hover_${product.id} {
        background-image: url('${product.image}');
        min-width: 175px;
      }
      #cardSize{
        min-width: 200px;
      }
    </style>
  `);
  cardsContainer.insertAdjacentHTML("beforeend", cards.join(""));
}
createItemForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const idInputValue = idInput.value;
  const nameInputValue = nameInput.value;
  const imgUrlInputValue = imgUrlInput.value;
  const stockInputValue = stockInput.value;
  const priceInputValue = priceInput.value;
  if (!/^\d+(\.\d{1,2})?$/.test(priceInputValue)) {
    alert("Por favor ingrese un valor numérico para Price con hasta dos decimales.");
    return;
  }
  const newProduct = new Product(
    idInputValue,
    nameInputValue,
    `$${priceInputValue}`,
    stockInputValue,
    imgUrlInputValue
  );
  products.push(newProduct);
  idInput.value = "";
  nameInput.value = "";
  imgUrlInput.value = "";
  stockInput.value = "";
  priceInput.value = "";
  renderCards(products);
});

const deleteItemButton = document.getElementById("signUp");

deleteItemButton.addEventListener("click", () => {
  const products = JSON.parse(localStorage.getItem("products"));
  const searchTerm = prompt("Enter the name or ID of the product you want to delete:");
  
  if (!searchTerm) {
    return;
  }
  
  const productIndex = products.findIndex(product => product.id === searchTerm || product.name === searchTerm);
  
  if (productIndex === -1) {
    alert(`Product '${searchTerm}' not found`);
    return;
  }
  
  const productToDelete = products[productIndex];
  
  if (!confirm(`Are you sure you want to delete product '${productToDelete.name}'?`)) {
    return;
  }
  
  products.splice(productIndex, 1);
  localStorage.setItem("products", JSON.stringify(products));
  
  const productCard = document.getElementById(`product-${productToDelete.id}`);
  
  if (productCard) {
    productCard.parentNode.removeChild(productCard);
  }
});
