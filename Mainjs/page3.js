/* ---------------------COOKIE--------------------------- */
function getcookie(){
    let cookie = document.cookie;
    // console.log(cookie);
    let obj = {};
    obj = cookie.split(";");
    // console.log(obj); 
    let user = obj[0].split("=")[1];
    // console.log(user);
    return user
    ;
}
let cookie = document.getElementById("cookie");
cookie.innerHTML = getcookie();
/* ---------------------LOGOUT----------------------------- */
window.logout=function logout(){
    location.replace("../index.html");
}
/* -------------------------------------------------------- */
let productInfo = document.querySelector(".displayInfo");
// console.log(productInfo);

// console.log(localStorage.getItem("product"));
let product = JSON.parse(localStorage.getItem("cart"));
console.log(product);
let lastIndex = product.length - 1;
product[lastIndex].img = `../images/${product[lastIndex].name}.jpg`;
// console.log(product[lastIndex]);

function displayProducts() {
    productInfo.innerHTML = "";
    const lastProduct = product[product.length - 1];
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    
    productDiv.innerHTML = `
        <img src="${lastProduct.img}" alt="${lastProduct.name}">
        <div class="info">
            <h3>${lastProduct.name}</h3>
            <p class="price">${lastProduct.price}$</p>
            <p class="description">${lastProduct.description}</p>
        </div>
        <button class="add-to-cart" id="addToCart" onclick="addToCart(${lastProduct.id})">Add to cart</button>
    `;
    productInfo.appendChild(productDiv);
}
displayProducts();
/* ---------------------add to cart------------------ */
let howmanyitems = document.getElementById("howmanyitems");
window.addToCart = function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart);
    product[0].img = `../images/${product[0].name}.jpg`;

    const selectedProduct = product.find(p => p.id === productId);
    if (selectedProduct) {
        const exists = cart.some(p => p.id === productId);
        if (!exists) {
            cart.push(selectedProduct);
            localStorage.setItem("cart", JSON.stringify(cart));
howmanyitems.innerHTML = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length : 0;

        }
        window.open("../Mainhtml/page4.html", "_blank");
    }
};
/* ---------------------cart------------------ */
let cartend = document.getElementById("cartend");
cartend.addEventListener("click", function(){
    location.replace("../Mainhtml/page4.html");
})


/* ---------------------homee -------------------- */
let home = document.querySelector(".home");
home.addEventListener("click", function(){
    location.replace("../Mainhtml/page2.html");
})