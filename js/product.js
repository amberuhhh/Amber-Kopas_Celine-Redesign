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
var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

console.log(id);


var client = contentful.createClient({
    space: 'jhroq6kjrsy4',
    accessToken: 'z05I6zWTRyoI5LJIlwwrhUEVSBHgEKoWpeljnS75yrc',
  });

var product = document.getElementById('product');
  // gets all the entries as a json
  client.getEntry(id).then(function (entry) {
    console.log(entry);
      // if statement checks that this field exists  
      var imageDiv = document.createElement ('aside');
      var products = document.createElement ('div');

          if (entry.fields.productName) {

            var productMainImage = document.createElement('img');
            productMainImage.src = entry.fields.productMainImage.fields.file.url;
            imageDiv.appendChild(productMainImage);

            var productName = document.createElement('h4');
            productName.innerHTML = entry.fields.productName;
            products.appendChild(productName);

            var productBasicInfo = document.createElement('p');
            productBasicInfo.innerHTML = entry.fields.productBasicInfo;
            products.appendChild(productBasicInfo);

            var productPrice = document.createElement('h6');
            productPrice.innerHTML = entry.fields.productPrice;
            products.appendChild(productPrice);

            var productCare = document.createElement('p');
            productCare.innerHTML = entry.fields.productCare;
            products.appendChild(productCare);

            var productDetails = document.createElement('p');
            productDetails.innerHTML = entry.fields.productDetails;
            products.appendChild(productDetails);
        
            // var linkToProduct = document.createElement('a');
            // linkToProduct.innerHTML = entry.fields.button;
            // linkToProduct.href = 'product.html?id=' + entry.sys.id;
            // products.appendChild(linkToProduct);

            // var link = document.createElement('button')
            // link.innerHTML = "link to " + entry.fields.name;
            // link.href= entry.fields.link;
            // placeForContent.appendChild(link);

            // do whatever with the info in the field
            console.log(entry.fields.productName);
        }  
        product.appendChild(imageDiv);
        product.appendChild(products);
    });


    var placeForContent = document.getElementById('daily-picks');



    // FIX THIS SO IT WILL SHOW UP 
  // gets all the entries as a json
  client.getEntries().then(function (entries) {
    console.log("entries:");
    console.log(entries);
    // loops through the json to look at one entry at a time
    entries.items.forEach(function (entry) {
        console.log("entry:");
        console.log(entry);
      // if statement checks that this field exists  
      var daily = document.createElement ('div');
      daily.classList.add("dailycards")
      
      if (entry.fields.dailyPlace) {
            if (entry.fields.productName) {

            var productMainImage = document.createElement('img');
            productMainImage.src = entry.fields.productMainImage.fields.file.url;
            daily.appendChild(productMainImage);

            var productName = document.createElement('h4');
            productName.innerHTML = entry.fields.productName;
            daily.appendChild(productName);

            var productBasicInfo = document.createElement('p');
            productBasicInfo.innerHTML = entry.fields.productBasicInfo;
            daily.appendChild(productBasicInfo);

            var productPrice = document.createElement('h6');
            productPrice.innerHTML = entry.fields.productPrice;
            daily.appendChild(productPrice);


            var linkToProduct = document.createElement('a');
            linkToProduct.innerHTML = entry.fields.button;
            linkToProduct.href = 'product.html?id=' + entry.sys.id;
            daily.appendChild(linkToProduct);

            // var linkToProduct = document.createElement('a');
            // linkToProduct.innerHTML = entry.fields.button;
            // linkToProduct.href = 'product.html?id=' + entry.sys.id;
            // daily.appendChild(linkToProduct);

            console.log(entry.fields.productName);
        } 
      }
        placeForContent.appendChild(daily);
    });
  });