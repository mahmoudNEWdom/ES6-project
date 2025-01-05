/* ------------------------------Save cookies--------------------------- */
function getcookie() {
  let cookie = document.cookie;
  let user = {};
  user = cookie.split("=")[1];
  return user;
}
let cookie = document.getElementById("cookie");
cookie.innerHTML = getcookie();
/* ============================================== */
window.logout = function logout() {
  location.replace("../index.html");
};
/* ============================================== */
let home = document.querySelector(".home");
home.addEventListener("click", function () {
  location.replace("../Mainhtml/page2.html");
});
/* -------------------empty the local storage--------------------- */
localStorage.removeItem("cart");
/* -------------------empty the cart--------------------- */
let cartend = document.getElementById("cartend");
cartend.addEventListener("click", function () {
  location.replace("../Mainhtml/page4.html");
});
