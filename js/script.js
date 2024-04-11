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





//GRAB FROM CONTENTFUL
console.log("Hello World!");

var client = contentful.createClient({
    space: 'jhroq6kjrsy4',
    accessToken: 'z05I6zWTRyoI5LJIlwwrhUEVSBHgEKoWpeljnS75yrc',
  });


//DAILY PICKS
  var placeForContent = document.getElementById('daily-picks');
  console.log("Daily Picks!!!");

  client.getEntries({content_type: 'celineRedesign', limit:3,}).then(function (entries) {
    console.log("entries:");
    console.log(entries);

    entries.items.forEach(function (entry) {
      console.log("Daily Category");

        //if statement checks that this field exists  
        var dailyPicks = document.createElement ('div');
        dailyPicks.classList.add("dailycards")
          // how to show just shirts - category as property of product
        if (entry.fields.categories = "daily") {

        var productMainImage = document.createElement('img');
        productMainImage.src = entry.fields.productMainImage.fields.file.url;
        dailyPicks.appendChild(productMainImage);

        var productName = document.createElement('h4');
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
        console.log("Is this working???");
        console.log(entry.fields.productName);
        } 
        placeForContent.appendChild(dailyPicks);
    });
  });



// WOMEN
  var placeForContentWomen = document.getElementById('women');
  console.log("Women");

  client.getEntries({content_type: 'celineRedesign', limit:1,}).then(function (entries) {
    console.log("entries:");
    console.log(entries);

    entries.items.forEach(function (entry) {
      console.log("Women category");

        //if statement checks that this field exists  
        var women = document.createElement ('div');
        women.classList.add("dailycards")
          // how to show just shirts - category as property of product
        if (entry.fields.categories === "women") {

        var productMainImage = document.createElement('img');
        productMainImage.src = entry.fields.productMainImage.fields.file.url;
        women.appendChild(productMainImage);

        var productName = document.createElement('h4');
        productName.innerHTML = entry.fields.productName;
        women.appendChild(productName);

        var productBasicInfo = document.createElement('p');
        productBasicInfo.innerHTML = entry.fields.productBasicInfo;
        women.appendChild(productBasicInfo);

        var productPrice = document.createElement('h6');
        productPrice.innerHTML = entry.fields.productPrice;
        women.appendChild(productPrice);

        var linkToProduct = document.createElement('a');
        linkToProduct.innerHTML = entry.fields.button;
        linkToProduct.href = 'product.html?id=' + entry.sys.id;
        women.appendChild(linkToProduct);

        console.log(entry.fields.productName);
        } 
        placeForContentWomen.appendChild(women);
    });
  });


  // MEN
  var placeForContentMen = document.getElementById('men');
  console.log("Men");

  client.getEntries({content_type: 'celineRedesign', limit:1,}).then(function (entries) {
    console.log("entries:");
    console.log(entries);

    entries.items.forEach(function (entry) {
      console.log("Men category");

        //if statement checks that this field exists  
        var men = document.createElement ('div');
        men.classList.add("dailycards")
          // how to show just shirts - category as property of product
        if (entry.fields.categories === "men") {

        var productMainImage = document.createElement('img');
        productMainImage.src = entry.fields.productMainImage.fields.file.url;
        men.appendChild(productMainImage);

        var productName = document.createElement('h4');
        productName.innerHTML = entry.fields.productName;
        men.appendChild(productName);

        var productBasicInfo = document.createElement('p');
        productBasicInfo.innerHTML = entry.fields.productBasicInfo;
        men.appendChild(productBasicInfo);

        var productPrice = document.createElement('h6');
        productPrice.innerHTML = entry.fields.productPrice;
        men.appendChild(productPrice);

        var linkToProduct = document.createElement('a');
        linkToProduct.innerHTML = entry.fields.button;
        linkToProduct.href = 'product.html?id=' + entry.sys.id;
        men.appendChild(linkToProduct);

        console.log(entry.fields.productName);
        } 
        placeForContentMen.appendChild(men);
    });
  });


  // FRAGRANCES
  var placeForContentFrag = document.getElementById('fragrances');
  console.log("Fragrances");

  client.getEntries({content_type: 'celineRedesign', limit:1,}).then(function (entries) {
    console.log("entries:");
    console.log(entries);

    entries.items.forEach(function (entry) {
      console.log("Fragrances category");

        //if statement checks that this field exists  
        var frag = document.createElement ('div');
        frag.classList.add("dailycards")
          // how to show just shirts - category as property of product
        if (entry.fields.categories == "Fragrances") {

        var productMainImage = document.createElement('img');
        productMainImage.src = entry.fields.productMainImage.fields.file.url;
        frag.appendChild(productMainImage);

        var productName = document.createElement('h4');
        productName.innerHTML = entry.fields.productName;
        frag.appendChild(productName);

        var productBasicInfo = document.createElement('p');
        productBasicInfo.innerHTML = entry.fields.productBasicInfo;
        frag.appendChild(productBasicInfo);

        var productPrice = document.createElement('h6');
        productPrice.innerHTML = entry.fields.productPrice;
        frag.appendChild(productPrice);

        var linkToProduct = document.createElement('a');
        linkToProduct.innerHTML = entry.fields.button;
        linkToProduct.href = 'product.html?id=' + entry.sys.id;
        frag.appendChild(linkToProduct);

        console.log(entry.fields.productName);
        } 
        placeForContentFrag.appendChild(frag);
    });
  });



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