//HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// const navLink = document.querySelectorAll(".nav-link");
// navLink.forEach(n => n.addEventListener("click", closeMenu));

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
  var placeForContent = document.getElementById('daily-picks');
  console.log("Daily Picks!!!");

  client.getEntries({content_type: 'celineRedesign', limit:3,}).then(function (entries) {
    console.log("entries:");
    console.log(entries);

    entries.items.forEach(function (entry) {
      console.log("Daily Category:");
      console.log(entry);

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
        var womenPicks = document.createElement ('div');
        womenPicks.classList.add("dailycards")
          // how to show just shirts - category as property of product
        if (entry.fields.categories = "women") {

        var productMainImage = document.createElement('img');
        productMainImage.src = entry.fields.productMainImage.fields.file.url;
        womenPicks.appendChild(productMainImage);

        var productName = document.createElement('h4');
        productName.innerHTML = entry.fields.productName;
        womenPicks.appendChild(productName);

        var productBasicInfo = document.createElement('p');
        productBasicInfo.innerHTML = entry.fields.productBasicInfo;
        womenPicks.appendChild(productBasicInfo);

        var productPrice = document.createElement('h6');
        productPrice.innerHTML = entry.fields.productPrice;
        womenPicks.appendChild(productPrice);

        var linkToProduct = document.createElement('a');
        linkToProduct.innerHTML = entry.fields.button;
        linkToProduct.href = 'product.html?id=' + entry.sys.id;
        womenPicks.appendChild(linkToProduct);

        console.log(entry.fields.productName);
        } 
        placeForContentWomen.appendChild(womenPicks);
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
        if (entry.fields.categories = "men") {

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

  // gets all the entries as a json
  client.getEntries({content_type: 'celineRedesign', limit:1,}).then(function (entries) {
    // client.getEntries({content_type: 'celineRedesign', limit:1,}).then(function (entries) {

    console.log("entries:");
    console.log(entries);

  // loops through the json to look at one entry at a time
    entries.items.forEach(function (entry) {
      console.log("Fragrances category");

        //if statement checks that this field exists  
        var frag = document.createElement ('div');
        frag.classList.add("dailycards")
          // how to show just shirts - category as property of product
        if (entry.fields.categories = "fragrances") {

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


  // // ALL RENAMED FRAG FRAGRANCES
  // var placeForContentFrag = document.getElementById('fragrances');
  // console.log("Fragrances");

  // // gets all the entries as a json
  // client.getEntries({content_type: 'celineRedesign', limit:1,}).then(function (entriesFrag) {
  //   console.log("entriesFrag:");
  //   console.log(entriesFrag);

  // // loops through the json to look at one entry at a time
  //   entriesFrag.items.forEach(function (entryFrag) {
  //     console.log("Fragrances category");

  //       //if statement checks that this field exists  
  //       var frag = document.createElement ('div');
  //       frag.classList.add("dailycards")
  //         // how to show just shirts - category as property of product
  //       if (entryFrag.fields.categories == "fragrances") {

  //       var productMainImageFrag = document.createElement('img');
  //       productMainImageFrag.src = entryFrag.fields.productMainImage.fields.file.url;
  //       frag.appendChild(productMainImageFrag);

  //       var productNameFrag = document.createElement('h4');
  //       productNameFrag.innerHTML = entryFrag.fields.productName;
  //       frag.appendChild(productNameFrag);

  //       var productBasicInfoFrag = document.createElement('p');
  //       productBasicInfoFrag.innerHTML = entryFrag.fields.productBasicInfo;
  //       frag.appendChild(productBasicInfoFrag);

  //       var productPriceFrag = document.createElement('h6');
  //       productPriceFrag.innerHTML = entryFrag.fields.productPrice;
  //       frag.appendChild(productPriceFrag);

  //       var linkToProductFrag = document.createElement('a');
  //       linkToProductFrag.innerHTML = entryFrag.fields.button;
  //       linkToProductFrag.href = 'product.html?id=' + entryFrag.sys.id;
  //       frag.appendChild(linkToProductFrag);

  //       console.log(entryFrag.fields.productName);
  //       } 
  //       placeForContentFrag.appendChild(frag);
  //   });
  // });







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