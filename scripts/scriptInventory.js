const products = [
  {id: 1120, name: 'Mozzarella cheese', price: '$2.35'},
  {id: 2125, name: 'Milk', price: '$3.12'},
  {id: 3323, name: 'Fried potatoes', price: '$1.66'},
  {id: 4456, name: 'Beer', price: '$4.22'},
  {id: 5693, name: 'Coke', price: '$3.33'}
];

for(let i=0;i<products.length;i++){
  const cards=`
  <article class="card card--1">
    <div class="card__img" id="card_img_${products[i].id}"></div>
    <a href="#" class="card_link">
      <div class="card__img--hover"></div>
    </a>
    <div class="card__info">
      <span class="card__category">${products[i].id}</span>
      <h3 class="card__title">${products[i].name}</h3>
      <span class="card__by">Price <a href="#" class="card__author" title="author">${products[i].price}</a></span>
    </div>
  </article>

  <style>
    .card_img_${products[i].id}, 
    .card_img_${products[i].id}, .card__img--hover {
      background-image: url('https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    }
  </style>
  `;
  document.getElementById("card").insertAdjacentHTML("beforeend", cards);
}
    
    
    