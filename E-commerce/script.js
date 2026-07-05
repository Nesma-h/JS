import products from "./data.js";
let search = document.querySelector('.search')
// let h3=document.querySelector('h3')
let container = document.querySelector('.products')
window.cart = cart;

show(products);
search.addEventListener('input', function () {
    let filterdproduct = products.filter(prod => prod.name.toLowerCase().includes(search.value.toLowerCase().trim()));
    console.log(filterdproduct);
    show(filterdproduct)
})
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
                    <p>Discription : <span>${element.description} </span></p>
                </div>
                </div>
                ${
            exist
                ? `<button onclick="DeleteFromCart(${element.id})">Delete From Cart</button>`
                : `<button onclick="cart(${element.id})">Add To Cart</button>`
        }
        </div>`;


    });

    console.log(container)
} function cart(id) {
    const product = products.find(item => item.id === id);

    let arr = JSON.parse(localStorage.getItem("cart")) || [];

    arr.unshift(product);

    localStorage.setItem("cart", JSON.stringify(arr));
}
