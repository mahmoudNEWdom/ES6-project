/* ------------------------------Save cookies--------------------------- */
function getcookie(){
    let cookie = document.cookie;
    let user = {};
    user = cookie.split("=")[1];
    return user;
}
let cookie = document.getElementById("cookie");
cookie.innerHTML = getcookie();
/* --------------------get local storage cart--------------- */
let cart = JSON.parse(localStorage.getItem("cart"));
/* ----------------handling dublicated items in local storage and push the to quantitie---------- */
let uniqueCart = []; // Array to hold unique products that not repeated
let quantities = {}; // Object to hold quantities of each product
/* ---------------------Remove duplicates and count quantities-------------------------------- */
cart.forEach((product) => {
    let key = product.name; // Use the product name as a unique identifier (you can change this if needed)
    if (quantities[key]) { //==> if product name exists add 1 to the quantity
        quantities[key]++;        
    } else {
        uniqueCart.push(product);
        quantities[key] = 1;
    }
    product.img = `../images/${product.name}.jpg`;  //setup img path
});
console.log(quantities);
console.log(uniqueCart);
/* -----------------------------number of products (red circle)----------------------------- */
let howmanyitems = document.getElementById("howmanyitems");
howmanyitems.innerHTML = cart.length;
/* -----------------------counter-------------------- */
function plus(index) {  // index ==> the index of the product in the uniqueCart array مميز لكل card item انا واقف عليها
    let countElement = document.getElementById(`count-${index}`);
    let totalElement = document.getElementById(`total-${index}`);
    let count = parseInt(countElement.innerHTML) + 1;
    countElement.innerHTML = count;

    total += uniqueCart[index].price; // price of the product 
    
    
    totalElement.innerHTML = uniqueCart[index].price * count;
    showTotalCount.textContent = `Total Price: $${total}`;

    // Increase howmanyitems by one
    howmanyitems.innerHTML = parseInt(howmanyitems.innerHTML) + 1;
}
function minus(index) {
    let countElement = document.getElementById(`count-${index}`);
    let totalElement = document.getElementById(`total-${index}`);
    let count = parseInt(countElement.innerHTML);
    if (count > 0) {
        count--;
        countElement.innerHTML = count;
        total -= uniqueCart[index].price;

        totalElement.innerHTML = uniqueCart[index].price * count;
        showTotalCount.textContent = `Total Price: $${total}`;
        // Decrease howmanyitems by one
        howmanyitems.innerHTML = parseInt(howmanyitems.innerHTML) - 1;
    }
}
/* -----------------------total price of all items---------------------- */
let totalElement = document.querySelector(".total-count-all");
let total = 0;
let div2 = document.createElement("div");
uniqueCart.forEach((product) => {
    total += product.price * quantities[product.name];
});

let showTotalCount = document.querySelector(".showTotalCount");
showTotalCount.appendChild(div2);
showTotalCount.textContent = `Total Price : $${total}`;

/* --------------------append & Display the products in the cart page----------------- */
let productList = document.querySelector(".product-list");
    uniqueCart.forEach((product, index) => {
        let name = product.name;
        let price = product.price;
        let img = product.img;
        let div = document.createElement("div");
        div.innerHTML = `
            <div class="product">
                <img src="${img}" class="card-img-top" alt="...">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">$${price}</p>
                <div class="btn-group">
                    <button class="plus" onclick="plus(${index})"><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <span id="count-${index}">${quantities[name]}</span>
                    <button class="minus" onclick="minus(${index})"><i class="fa fa-minus" aria-hidden="true"></i></button>
                    <p>Total: $<span id="total-${index}">${price * quantities[name]}</span></p>
                </div>
            </div>
        `;
        productList.appendChild(div);
    });

// /* ---------------------append checkout button------------------ ---------------------------*/
const checkoutDiv = document.createElement("div");
checkoutDiv.classList.add("checkout-div");
    checkoutDiv.innerHTML = `
        <button class="checkout-button" onclick="checkout()">check out</button>
        `;
    productList.appendChild(checkoutDiv);   
/* -----------------------------------Check out --------------------------------------------- */
function checkout() {
    location.replace("../Mainhtml/page5.html");
};
/* -----------------------------------logout --------------------------------------------- */
window.logout = function logout() {
    location.replace("../index.html");
};
/* -----------------------------------home --------------------------------------------- */
let home = document.querySelector(".home");
home.addEventListener("click", function () {
    location.replace("../Mainhtml/page2.html");
});
