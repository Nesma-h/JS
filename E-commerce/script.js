import products from "./data.js";
let search = document.querySelector('.search')
// let h3=document.querySelector('h3')
let container = document.querySelector('.products')
let CartContainer = document.querySelector('.CartProduct')
let cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
window.cart = cart;
window.DeleteFromCart = DeleteFromCart;

if (container) {
    show(products);

    search.addEventListener('input', function () {
        let filterdproduct = products.filter(prod =>
            prod.name.toLowerCase().includes(search.value.toLowerCase().trim())
        );

        show(filterdproduct);
    });
}
if (CartContainer) {
    showinCart(cartProducts);
}
function show(arr) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    container.innerHTML = `<h3>${arr.length} Products Found</h3>`;
    arr.forEach(element => {
        const exist = cart.find(item => item.id === element.id);
        container.innerHTML += `<div class="Fproduct">
                <div class="product">
                <img src=${element.image} alt="">
                <div class="detail">
                    <p>Name : <span>${element.name} </span></p>
                    <p>Category : <span> ${element.category}</span></p>
                    <p>Price : <span> ${element.price}</span></p>
                </div>
                </div>
                <div>
                ${exist
                ? `<button onclick="DeleteFromCart(${element.id})">Delete From Cart</button>`
                : `<button onclick="cart(${element.id})">Add To Cart</button>`
            }
            <button onclick="location.href='detail.html?id=${element.id}'"> View Details </button>
            </div>
        </div>`;


    });

    // console.log(container)
} function cart(id) {
    const product = products.find(item => item.id === id);

    let arr = JSON.parse(localStorage.getItem("cart")) || [];

    arr.unshift(product);
    localStorage.setItem("cart", JSON.stringify(arr));
    show(products);
    search.value = ''
} function DeleteFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"))
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    show(products);
    search.value = ''
}
function showinCart(arr) {
    CartContainer.innerHTML = `<h3>${arr.length} Products Found In Your Cart</h3>`;
    arr.forEach(element => {
        CartContainer.innerHTML += `<div class="Fproduct">
                <div class="product">
                <img src=${element.image} alt="">
                <div class="detail">
                    <p>Name : <span>${element.name} </span></p>
                    <p>Category : <span> ${element.category}</span></p>
                    <p>Price : <span> ${element.price}</span></p>
                    <p>Discription : <span>${element.description} </span></p>
                </div>
                </div>
                <button onclick="DeleteFromCart(${element.id})">Delete From Cart</button>
        </div>`;
    });
}
