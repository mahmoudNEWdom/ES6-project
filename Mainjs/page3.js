/* ------------------------------Save cookies--------------------------- */
function getcookie() {
  let cookie = document.cookie;
  let user = {};
  user = cookie.split("=")[1];
  return user;
}
let cookie = document.getElementById("cookie");
cookie.innerHTML = getcookie();
/* ---------------------LOGOUT onclick ========> works with eevent listener----------------------------- */
window.logout = function logout() {
  location.replace("../index.html");
};
/* -----------------------select product i viewed from page2 (last product in local storage)--------------------------------- */
let productInfo = document.querySelector(".displayInfo");
let product = JSON.parse(localStorage.getItem("cart"));
/* --------------------setting  the img for viewed product------------- */
product.img = `../images/${product.name}.jpg`;
/* ---------------------display product------------------ */
function displayProducts() {
  productInfo.innerHTML = "";
  const lastProduct = product[product.length - 1]; // get the last product in the cart  
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");
  productDiv.innerHTML = `
        <img src="${lastProduct.img}" alt="${lastProduct.name}">
        <div class="info">
            <h3>${lastProduct.name}</h3>
            <p class="price">${lastProduct.price}$</p>
            <p class="description">${lastProduct.description}</p>
        </div>
        <button class="add-to-cart" id="addToCart" onclick="addToCart()">Add to cart</button>
    `;
  productInfo.appendChild(productDiv);
}
displayProducts();
/* ---------------------intial the local storage with empty array so thhe cart become 0 ----------------------- */
if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
}
/* ----------------------Add number of products to cart icon (the red circle)----------------- */
let howmanyitems = document.getElementById("howmanyitems");
let cart = JSON.parse(localStorage.getItem("cart"));
howmanyitems.innerHTML = cart.length -1; // handling increse in local storage due to viewed product

/* ---------------------add to cart button event listener ------------------ */
let addToCartButton = document.getElementById("addToCart");
addToCartButton.addEventListener("click", 
  function addToCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  howmanyitems.innerHTML = cart.length;
  localStorage.setItem("cart", JSON.stringify(cart));
  location.replace("../Mainhtml/page4.html", "_blank");
}
);
/* ----------pp--------------add to cart button on click ---------------pp------------ */
// window.addToCart = function addToCart() {
//   let cart = JSON.parse(localStorage.getItem("cart"));
//   howmanyitems.innerHTML = cart.length;
//   localStorage.setItem("cart", JSON.stringify(cart));
//   location.assign("../Mainhtml/page4.html", "_blank");
// };
/* ---------------------cart------------------ */
let cartend = document.getElementById("cartend");
cartend.addEventListener("click", function () {
  /* ----------------------------handle local storage ---------------- */
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.pop();
  localStorage.setItem("cart", JSON.stringify(cart));
  location.replace("../Mainhtml/page4.html");
});

/* ---------------------homee -------------------- */
let home = document.querySelector(".home");
home.addEventListener("click", function () {
  /* ----------------------------handle local storage ---------------- */
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.pop();
  localStorage.setItem("cart", JSON.stringify(cart));
  location.replace("../Mainhtml/page2.html");
});
