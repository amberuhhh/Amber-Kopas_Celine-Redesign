//HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

//BOTTOM HAMBURGER MENU
const dropDown = document.querySelector(".dropdown");
const navMenuPages = document.querySelector(".nav-menu-pages");

dropDown.addEventListener("click", mobileMenu2);

function mobileMenu2() {
  dropDown.classList.toggle("active");
    navMenuPages.classList.toggle("active");
}

// const navLink = document.querySelectorAll(".nav-link");
// navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu2() {
    dropDown.classList.remove("active");
    navMenuPages.classList.remove("active");
}








//GRAB FROM CONTENTFUL
console.log("Hello World!");
var client = contentful.createClient({
  space: 'jhroq6kjrsy4',
  accessToken: 'z05I6zWTRyoI5LJIlwwrhUEVSBHgEKoWpeljnS75yrc',
});


// DAILY PICKS
var placeForContent = document.getElementById('cart-item-wrapper');
console.log("Cart items!!!");

client.getEntries({content_type: 'celineRedesign', limit:3,}).then(function (entries) {
  console.log("entries:");
  console.log(entries);

  entries.items.forEach(function (entry) {
    console.log("Daily Category:");
    console.log(entry);

      //if statement checks that this field exists  
      var dailyPicks = document.createElement ('div');
      var dailyImagePicks = document.createElement ('aside');
      // dailyPicks.classList.add("cart-item")

        // how to show just shirts - category as property of product
      if (entry.fields.categories = "daily") {

      var productMainImage = document.createElement('img');
      productMainImage.src = entry.fields.productMainImage.fields.file.url;
      productMainImage.href = 'product.html?id=' + entry.sys.id;
      dailyImagePicks.appendChild(productMainImage);

      var productName = document.createElement('h5');
      productName.innerHTML = entry.fields.productName;
      dailyPicks.appendChild(productName);

      var productBasicInfo = document.createElement('p');
      productBasicInfo.innerHTML = entry.fields.productBasicInfo;
      dailyPicks.appendChild(productBasicInfo);

      var productPrice = document.createElement('h6');
      productPrice.innerHTML = entry.fields.productPrice;
      dailyPicks.appendChild(productPrice);

      var linkToProduct = document.createElement('a');
      linkToProduct.innerHTML = entry.fields.button;
      linkToProduct.href = 'product.html?id=' + entry.sys.id;
      dailyPicks.appendChild(linkToProduct);

      console.log(entry.fields.productName);
      } 
      placeForContent.appendChild(dailyImagePicks);
      placeForContent.appendChild(dailyPicks);
  });
});






// // DAILY PICKS
//   var placeForContent = document.getElementById('cart-item-wrapper');
//   console.log("YOO THINGS???");

//   client.getEntries({content_type: 'celineRedesign', limit:3,}).then(function (entries) {
//     console.log("entries:");
//     console.log(entries);

//     entries.items.forEach(function (entry) {
//       console.log("Daily Category:");
//       console.log(entry);

//         //if statement checks that this field exists  
//         var dailyPicks = document.createElement ('div');
//         dailyPicks.classList.add("dailycards")

//           // how to show just shirts - category as property of product
//         if (entry.fields.categories = "daily") {

//         var productMainImage = document.createElement('img');
//         productMainImage.src = entry.fields.productMainImage.fields.file.url;
//         dailyPicks.appendChild(productMainImage);

//         var productName = document.createElement('h4');
//         productName.innerHTML = entry.fields.productName;
//         dailyPicks.appendChild(productName);

//         var productBasicInfo = document.createElement('p');
//         productBasicInfo.innerHTML = entry.fields.productBasicInfo;
//         dailyPicks.appendChild(productBasicInfo);

//         var productPrice = document.createElement('h6');
//         productPrice.innerHTML = entry.fields.productPrice;
//         dailyPicks.appendChild(productPrice);

//         var linkToProduct = document.createElement('a');
//         linkToProduct.innerHTML = entry.fields.button;
//         linkToProduct.href = 'product.html?id=' + entry.sys.id;
//         dailyPicks.appendChild(linkToProduct);
//         console.log(entry.fields.productName);
//         } 
//         placeForContent.appendChild(dailyPicks);
//     });
//   });


  // backup
// var placeForContent = document.getElementById('daily-picks');

//   // gets all the entries as a json
//   client.getEntries().then(function (entries) {
//     console.log("entries:");
//     console.log(entries);
//     // loops through the json to look at one entry at a time
//     entries.items.forEach(function (entry) {
//         console.log("entry:");
//         console.log(entry);
                       
//       // if statement checks that this field exists  
//       var daily = document.createElement ('div');
//       daily.classList.add("dailycards")

//           if (entry.fields.productName) {

//           var productMainImage = document.createElement('img');
//           productMainImage.src = entry.fields.productMainImage.fields.file.url;
//           daily.appendChild(productMainImage);

//           var productName = document.createElement('h4');
//           productName.innerHTML = entry.fields.productName;
//           daily.appendChild(productName);

//           var productBasicInfo = document.createElement('p');
//           productBasicInfo.innerHTML = entry.fields.productBasicInfo;
//           daily.appendChild(productBasicInfo);

//           var productPrice = document.createElement('h6');
//           productPrice.innerHTML = entry.fields.productPrice;
//           daily.appendChild(productPrice);

//           var linkToProduct = document.createElement('a');
//           linkToProduct.innerHTML = entry.fields.button;
//           linkToProduct.href = 'product.html?id=' + entry.sys.id;
//           daily.appendChild(linkToProduct);

//           console.log(entry.fields.productName);
//           } 
//         }
//         placeForContent.appendChild(daily);
//   } );