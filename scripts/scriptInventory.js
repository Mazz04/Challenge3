
for(let i=0;i<18;i++){
    const cards=`
    <article class="card card--1">
    <div class="card__img" id = "card_img"></div>
    <a href="#" class="card_link">
       <div class="card__img--hover"></div>
     </a>
    <div class="card__info">
      <span class="card__category"> (var categoria)</span>
      <h3 class="card__title">(var nombre)</h3>
      <span class="card__by">Price <a href="#" class="card__author" title="author">(var precio)</a></span>
    </div>
    </article>
    
    <style>
     .card__img, .card--1 .card__img--hover {
        background-image: url('https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    }
    </style>
    `
    document.getElementById("card").insertAdjacentHTML("beforeend", cards);
    var element =document.getElementById("card_img");
    element.classList.add(".card__img")
    }
    
    
    