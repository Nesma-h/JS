import products from "./data.js";

const id = Number(new URLSearchParams(location.search).get("id"));
let product = products.find(item => item.id == id)
let container = document.querySelector('.product');
if(product){
show(product);
}else{
    showErr();
}
console.log(product)
function show(element) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const exist = cart.find(item => item.id === element.id);
        container.innerHTML += `
        <div class='data'>
                <img src=${element.image} alt="">
                <div class="detail">
                <p class='cat' >${element.category}</p>
                    <p class='name'>${element.name}</p>
                    <p> ${element.description}</p>
                    <p class='price'> ${element.price} $ </p>
                    <p> In The Stock : <span> ${element.stock}</span></p>
                    
                </div>
                </div>
                <div>
                ${exist
                ? `<button onclick="DeleteFromCart(${element.id})">Delete From Cart</button>`
                : `<button onclick="cart(${element.id})">Add To Cart</button>`
            }
            
            </div>
        `;

    // console.log(container)
}
function showErr(){
    container.innerHTML =`
    <div class="detail">
    <p class='err' >Product NOT Found !!</p>
    <button class='errbutton' onclick="location.href='./index.html'"> Go Back </button>
    </div>
    `
}

