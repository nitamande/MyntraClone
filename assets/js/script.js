let itemContainer=document.querySelector('#item-container');


/*let item=[
  {
    id:'001',
  image:'./assets/img/t-shirt.jpg',
  company:'Puma',
  title:'Puma Cotton Printed T-Shirt',
  dis_price:'549',
  price:'1099',
  discount:'50%'
},
]*/

let innerHTML=''; 
item.forEach(item=>{
   innerHTML +=`
<div class="col-lg-2 col-md-4 mb-4">
<div class="card  rounded-0 border-0">
    <img src="${item. image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h6 class="card-title fw-bold mb-0">${item.company}</h6>
        <p class="card-text fs-14 fw-400 mb-0">${item.title}</p>
        <div>
            <span class="fw-bold">Rs. ${item.dis_price}</span> &nbsp;
            <del class="fs-14 fw-400">Rs. ${item.price}</del> &nbsp;
            <span class="text-orange fs-14 fw-400">(${item.discount})Off)</span>

        </div>
        <div class="w-100 mt-2">
        <button class="w-100 btn btn-success   type="submit" onclick="addToCart(${item.id})">Add to Card </button>
        </div>
    </div>
</div>
</div>
`
  })
  itemContainer.innerHTML = innerHTML;



  //Add to cart section start//
  let cartItem = [];
  
  function addToCart(itemId) {
    cartItem.push(itemId)
    cartIcon()
  }
  function cartIcon(){
    let cartNumber=document.getElementById('cart-number');
    cartNumber.innerText=cartItem.length;
    
  }