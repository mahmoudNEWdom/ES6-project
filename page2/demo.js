/* ---------------------COOKIE--------------------------- */
// onload = function(){
//     localStorage.removeItem("cart");
// };
// onload();

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
/* ---------------------slider--------------------------- */
let img = document.querySelector("img");
// img.setAttribute("src","./images/1.jpg");
// let i = (img.getAttribute("src").split("/")[2].split(".")[0]);
// console.log(i);
setInterval(function(){
    let i = Number(img.getAttribute("src").split("/")[2].split(".")[0]);
    
    i++;
    if(i>4){
        i=1;
    }
    img.setAttribute("src","./images/"+i+".jpg");
    // console.log(i);
},10000);

window.next = function(){
    let i = Number(img.getAttribute("src").split("/")[2].split(".")[0]);
    console.log(i);

    i++;
    if(i>6){
        i=1;
    }
    img.setAttribute("src","./images/"+i+".jpg");
}
window.previous= function(){
    let i = Number(img.getAttribute("src").split("/")[2].split(".")[0]);
    i--;
    if(i<1){
        i=6;
    }
    img.setAttribute("src","./images/"+i+".jpg");
}

/* ---------------------LOGOUT----------------------------- */
window.logout=function logout(){
    location.replace("../index.html");
}
/* -------------------------------------------------------- */
let products =[
    {
        category:"phone",
        name:"SamsungS23Ultra",
        price:900,
        description:"samsung 23 Ultra 128GB 5G",
        img:"./images/SamsungS23Ultra.jpg"
    },
    {
        category:"phone",
        name:"Iphone",
        price:1000,
        description:"Iphone 12 128GB 5G", 
        img:"./images/Iphone.jpg"
    },
    {
        category: "phone",
        name: "googlepixel",
        price: 800,
        description: "Google Pixel 7 Pro 256GB",
        img: "./images/googlepixel.jpg"
    },
    {
        category: "phone",
        name: "OnePlus",
        price: 750,
        description: "OnePlus 11 5G 256GB",
        img: "./images/OnePlus.jpg"
    },
    {
        category:"clothing",
        name:"jacket",
        price:20,
        description:"T-shirt 100% cotton size M",
        img:"./images/jacket.jpg"
    },
    {
        category:"clothing",
        name:"Jeans",
        price:50,
        description:"Jeans size 32",
        img:"./images/Jeans.jpg"
    },
    {
        category: "clothing",
        name: "Sweater",
        price: 30,
        description: "Sweater 100% wool size L",
        img: "./images/Sweater.jpg"
    },
    {
        category: "clothing",
        name: "Cap",
        price: 10,
        description: "Baseball cap, adjustable size",
        img: "./images/Cap.jpg"
    },
    {
        category: "clothing",
        name: "Hoodie",
        price: 40,
        description: "Unisex hoodie, fleece-lined, size L",
        img: "./images/Hoodie.jpg"
    },
    {
        category: "clothing",
        name: "Dress",
        price: 60,
        description: "Women's summer dress, floral pattern, size S",
        img: "./images/Dress.jpg"
    },
    {
        category: "clothing",
        name: "Shorts",
        price: 25,
        description: "Men's casual shorts, 100% cotton, size M",
        img: "./images/Shorts.jpg"
    },
    {
        category:"laptop",
        name:"Macbookpro",
        price:1500,
        description:"Macbook pro 16 inch 1TB",
        img:"./images/Macbookpro.jpg"
    },
    {
        category: "laptop",
        name: "HPEnvy",
        price: 1100,
        description: "HP Envy 13 inch 512GB SSD",
        img: "./images/HPEnvy.jpg"
    },
    {
        category: "laptop",
        name: "LenovoThinkPad",
        price: 1000,
        description: "Lenovo ThinkPad X1 Carbon 14 inch 512GB SSD",
        img: "./images/LenovoThinkPad.jpg"
    },
    {
        category:"laptop",
        name:"DellXPS",
        price:1200,
        description:"Dell XPS 15 inch 512GB",
        img:"./images/DellXPS.jpg"
    }
]
/*======================================================== */
let phone = document.getElementById("phone");
let clothing = document.getElementById("Clothing");
let laptop = document.getElementById("laptop");
let All = document.getElementById("all");
// console.log(clothing);
let productList = document.querySelector(".product-list");

displayProducts("All");

function displayProducts(category) {
    productList.innerHTML ="";
    products.forEach((product) => {
        if (category === "All" || product.category === category) {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <div class="info">
                    <h3>${product.name}</h3>
                    <p class="price">${product.price}$</p>
                </div>
                <div class="actions">
                    <button href="#" class="btn"><i class="fa fa-eye view" aria-hidden="true"></i></button>
                    <button href="#" class=" add-to-cart"><i class="fa fa-plus" aria-hidden="true"></i></button>
                </div>
            `;
            productList.appendChild(productDiv);
        }
    });
}
    /* ---------------------view product && save local storage----------------------- */
    let viewers = document.querySelectorAll(".btn");
console.log(viewers);

viewers.forEach((viewer, index) => {
    viewer.addEventListener("click", function() {
        // localStorage.removeItem("cart");
        let product = products[index];
        console.log(product);

        // Retrieve existing cart data from localStorage
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Push the new product to the cart
        cart.push(product);
        // Save the updated cart back to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Redirect to the next page
        location.replace("../page3/page3.html");
    });
});

//     let viewers = document.querySelectorAll(".btn");
//     console.log(viewers);
//     viewers.forEach((viewer, index) => {
//         viewer.addEventListener("click", function() {

//             let product = products[index];
//             console.log(product);
//             localStorage.setItem("cart", JSON.stringify(product));
//             location.replace("../page3/page3.html");
//         });
//     });
// }

/* ---------------------go to page3----------------------- */
// let going = document.querySelectorAll(".go");
// console.log(going);
// going.forEach((go, index) => {
//     go.addEventListener("click", function() {
//         let product = products[index];
//         console.log(product);
//         localStorage.setItem("product", JSON.stringify(product));
//         window.open("../page4/page4.html");
//     });
// });
/* --------------------------------------------------------------------------------------------------------------------------------- */
let howmanyitems = document.getElementById("howmanyitems");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let add_to_cart = document.querySelectorAll(".add-to-cart");
add_to_cart.forEach((add_to_cart, index) => {
    add_to_cart.addEventListener("click", function() {
        let product = products[index];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
howmanyitems.innerHTML = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length : 0;

    });
});

/* --------------------------------------------------------------- */
// let add_to_cart = document.querySelectorAll(".add-to-cart");
// add_to_cart.forEach((cart, index) => {
//     cart.addEventListener("click", function() {
//         let product = products[index];
//         console.log(product);
//         localStorage.setItem("product", JSON.stringify(product));
//     });
// });


/* -------------------------------------------------------------------------------------------------------------------------------- */
phone.addEventListener("click", function() {
    displayProducts("phone");
});

clothing.addEventListener("click", function() {
    displayProducts("clothing");
});

laptop.addEventListener("click", function() {
    displayProducts("laptop");
});

All.addEventListener("click", function() {
    displayProducts("All");
});

/* ----------------------------------------------------------- >>>>>>>>>>>>>>>>>>>>>>> عدل علي الايقون */ 
let cartend = document.getElementById("cartend");
cartend.addEventListener("click", function(){
    window.open("../page4/page4.html");
/* -----------------------------------append--------------------------------------- */
displayProducts("All");
function displayProducts(category) {
    productList.innerHTML ="";
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.forEach((product, index) => {
        if (category === "All" || product.category === category) {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <div class="info">
                    <h3>${product.name}</h3>
                    <p class="price">${product.price}$</p>
                </div>
                <div class="actions">
                    <button href="#" class=" add-to-cart"><i class="fa fa-check" aria-hidden="true"></i></button>
                </div>
            `;
            productList.appendChild(productDiv);
        }
    });
/* --------------------------------------------------------------------------------- */
}})
/* ---------------------howmanyitems--------------------------- */

/* ---------------------add to cart--------------------------- */
// let cart = [];
// let add = document.querySelectorAll(".add");
// add.forEach((add, index) => {
//     add.addEventListener("click", function() {
//         let product = products[index];
//         cart.push(product);
//         localStorage.setItem("cart", JSON.stringify(cart));
//     });
// });
/* --------------------------------مشروع اضافه و طرح المنتج--------------------------- */
// window.plus=function plus(index){
//     let countElement = document.getElementById(`count-${index}`);
//     let count = parseInt(countElement.innerHTML) + 1;
//     countElement.innerHTML = count;
// }

// window.minus=function minus(index){
//     let countElement = document.getElementById(`count-${index}`);
//     let count = parseInt(countElement.innerHTML);
//     if(count > 0){
//         count--;
//         countElement.innerHTML = count;
//     }
// }
// {/* <button class="plus" onclick="plus(${index})"><i class="fa fa-plus" aria-hidden="true"></i></button>
// <span id="count-${index}">0</span>
// <button class="minus" onclick="minus(${index})"><i class="fa fa-minus" aria-hidden="true"></i></button> */}