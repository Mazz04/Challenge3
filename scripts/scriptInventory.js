const products = [
  {id: 1120, name: 'Mozzarella cheese', price: '$2.35',stock: '32', image:'https://images.pexels.com/photos/4109946/pexels-photo-4109946.jpeg?auto=compress&cs=tinysrgb&w=300'}, 
  {id: 2125, name: 'Milk', price: '$3.12',stock: '16', image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=300'},
  {id: 3323, name: 'Fried potatoes', price: '$1.66',stock: '10', url:'https://images.pexels.com/photos/6941039/pexels-photo-6941039.jpeg?auto=compress&cs=tinysrgb&w=300'},
  {id: 4456, name: 'Beer', price: '$4.22',stock: '56', image:'https://images.pexels.com/photos/1672304/pexels-photo-1672304.jpeg?auto=compress&cs=tinysrgb&w=300'},
  {id: 4444, name: 'Coke', price: '$3.33',stock: '23', image:'https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg?auto=compress&cs=tinysrgb&w=300'},
  {id: 5693, name: 'Cookie', price: '$1.99',stock: '16', image:'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=300'},
  {id: 1815, name: 'Sausage', price: '2.00',stock: '25', image:'https://images.pexels.com/photos/929137/pexels-photo-929137.jpeg?auto=compress&cs=tinysrgb&w=300'},
];

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
          <span class="card__by">Stock <a href="#" class="card__author" title="author">${productsArray[i].stock}</a><br> Price <a href="#" class="card__author" title="author">${productsArray[i].price}</a></span>
        </div>
      </article>

      <style>
        #card_img_${productsArray[i].id}, 
        #card_img_${productsArray[i].id}, .card__img--hover {
          background-image: url('${productsArray[i].image}');
      </style>
    `;
    cardsContainer.insertAdjacentHTML("beforeend", cards);
  }
}

renderCards(products);

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

const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", handleSearch);
    
    