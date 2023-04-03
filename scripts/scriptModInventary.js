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
