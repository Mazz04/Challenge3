import Product from "./products.class.js";
const products = [
  new Product(1120, 'Mozzarella cheese', '$2.35', 32, 'https://images.pexels.com/photos/4109946/pexels-photo-4109946.jpeg?auto=compress&cs=tinysrgb&w=300'), 
  new Product(2125, 'Milk', '$3.12', 16, 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=300'),
  new Product(3323, 'Fried potatoes', '$1.66', 10, 'https://images.pexels.com/photos/6941039/pexels-photo-6941039.jpeg?auto=compress&cs=tinysrgb&w=300'),
  new Product(4456, 'Beer', '$4.22', 56, 'https://images.pexels.com/photos/1672304/pexels-photo-1672304.jpeg?auto=compress&cs=tinysrgb&w=300'),
  new Product(4444, 'Coke', '$3.33', 23, 'https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg?auto=compress&cs=tinysrgb&w=300'),
  new Product(5693, 'Cookie', '$1.99', 16, 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=300'),
  new Product(1815, 'Sausage', '2.00', 25, 'https://images.pexels.com/photos/929137/pexels-photo-929137.jpeg?auto=compress&cs=tinysrgb&w=300'),
];
function renderCards(productsArray) {
  const cardsContainer = document.getElementById("card");
  cardsContainer.innerHTML = "";
  const cards = productsArray.map((product) => `
    <article class="card card--1" id="cardSize">
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
renderCards(products);
function handleSearch() {
  const searchInput = document.getElementById("search-input");
  const searchValue = searchInput.value.trim().toLowerCase();
  const filteredProducts = searchValue === "" ? products : products.filter(product => {
    return product.name.toLowerCase().includes(searchValue) || product.id.toString().includes(searchValue);
  });
  renderCards(filteredProducts);
}

const searchBtn = document.getElementById("search-btn");
if (searchBtn) {
  searchBtn.addEventListener("click", handleSearch);
}


