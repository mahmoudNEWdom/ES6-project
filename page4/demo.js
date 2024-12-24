/* --------------------get local storage cart--------------- */
let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart); // array of objects

// Track unique products and quantities
let uniqueCart = [];
let quantities = {};

// Remove duplicates and count quantities
cart.forEach((product) => {
    let key = product.name; // Use the product name as a unique identifier (you can change this if needed)
    if (quantities[key]) {
        quantities[key]++;
    } else {
        product.img = `../page2/images/${product.name}.jpg`;
        uniqueCart.push(product);
        quantities[key] = 1;
    }
});

// console.log("Unique Products:", uniqueCart);
// console.log("Quantities:", quantities);

/* -----------------------counter-------------------- */
let howmanyitems = document.getElementById("howmanyitems");
howmanyitems.innerHTML = cart.length;

function plus(index) {
    let countElement = document.getElementById(`count-${index}`);
    let totalElement = document.getElementById(`total-${index}`);
    let count = parseInt(countElement.innerHTML) + 1;
    countElement.innerHTML = count;

    total += uniqueCart[index].price;
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


/* -----------------------total---------------------- */
let totalElement = document.querySelector(".total-count-all");
let total = 0;
let div2 = document.createElement("div");

uniqueCart.forEach((product) => {
    total += product.price * quantities[product.name];
});

let showTotalCount = document.querySelector(".showTotalCount");
showTotalCount.appendChild(div2);
showTotalCount.textContent = `Total Price: $${total}`;


/* -----------------------------------add to cart--------------------------------------------- */
window.goodbye = function goodbye() {
    location.replace("../page5/page5.html");
};

/* --------------------append items to HTML----------------- */
let productList = document.querySelector(".product-list");
window.onload = function () {
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
};
// Add a styled button below the total
let checkoutDiv = document.createElement("div");
let checkout = document.createElement("button");
checkout.textContent = "checkout";
checkout.classList.add("checkout-button"); // Add a class for styling
checkoutDiv.classList.add("checkout-div"); // Add a class for styling
checkoutDiv.appendChild(checkout);
productList.appendChild(checkoutDiv);

checkout.addEventListener("click", function () {
    location.replace("../page5/page5.html");
});
window.logout = function logout() {
    location.replace("../index.html");
};

let home = document.querySelector(".home");
home.addEventListener("click", function () {
    location.replace("../page2/page2.html");
});
