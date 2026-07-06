import products from "./data.js";

const id = Number(new URLSearchParams(location.search).get("id"));
let product = products.find(item => item.id == id)
let container = document.querySelector('.product');
show(product);
console.log(product)
function show(element) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const exist = cart.find(item => item.id === element.id);
        container.innerHTML += `
        <div class='data'>
                <img src=${element.image} alt="">
                <div class="detail">
                    <p>Name : <span>${element.name} </span></p>
                    <p>Category : <span> ${element.category}</span></p>
                    <p>Price : <span> ${element.price}</span></p>
                    <p>Stock : <span> ${element.stock}</span></p>
                    <p>Description : <span> ${element.description}</span></p>
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

