const products = [
  {id: 1120, name: 'Mozzarella cheese', price: '$2.35'},
  {id: 2125, name: 'Milk', price: '$3.12'},
  {id: 3323, name: 'Fried potatoes', price: '$1.66'},
  {id: 4456, name: 'Beer', price: '$4.22'},
  {id: 5693, name: 'Coke', price: '$3.33'},
  {id: 4444, name: 'Coca-cola', price: '$1.99'},
  {id: 1815, name: 'Sausage', price: '2.00'}
];

// Function to render cards
function renderCards(productsArray) {
  const cardsContainer = document.getElementById("card");
  cardsContainer.innerHTML = "";

  for(let i = 0; i < productsArray.length; i++) {
    const cards = `
      <article class="card card--1">
        <div class="card__img" id="card_img_${productsArray[i].id}"></div>
        <a href="#" class="card_link">
          <div class="card__img--hover"></div>
        </a>
        <div class="card__info">
          <span class="card__category">Id: ${productsArray[i].id}</span>
          <h3 class="card__title">${productsArray[i].name}</h3>
          <span class="card__by">Price <a href="#" class="card__author" title="author">${productsArray[i].price}</a></span>
        </div>
      </article>

      <style>
        .card_img_${productsArray[i].id}, 
        .card_img_${productsArray[i].id}, .card__img--hover {
          background-image: url('https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
        }
      </style>
    `;
    cardsContainer.insertAdjacentHTML("beforeend", cards);
  }
}

// Render initial cards
renderCards(products);

// Function to handle search
function handleSearch() {
  const searchInput = document.getElementById("search-input");
  const searchValue = searchInput.value.trim().toLowerCase();

  if(searchValue === "") {
    renderCards(products);
    return;
  }

  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(searchValue) || product.id.toString().includes(searchValue);
  });

  renderCards(filteredProducts);
}

// Event listener for search button
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", handleSearch);
    
    