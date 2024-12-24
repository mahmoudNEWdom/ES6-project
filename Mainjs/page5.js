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
/* ============================================== */
window.logout=function logout(){
    location.replace("../index.html");
}
/* ============================================== */
let home = document.querySelector(".home");
home.addEventListener("click", function () {
  location.replace("../Mainhtml/page2.html");
});
