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

var placeForContent = document.getElementById('place-for-content');


  // gets all the entries as a json
  client.getEntries().then(function (entries) {
    console.log("entries:");
    console.log(entries);
    // loops through the json to look at one entry at a time
    entries.items.forEach(function (entry) {
        console.log("entry:");
        console.log(entry);
      // if statement checks that this field exists  
      var imageDiv = document.createElement ('aside');
      var textDiv = document.createElement ('div');

        if (entry.fields.productName) {

            var productMainImage = document.createElement('img');
            productMainImage.src = entry.fields.productMainImage.fields.file.url;
            imageDiv.appendChild(productMainImage);
            
            var productName = document.createElement('h2');
            productName.innerHTML = entry.fields.productName;
            textDiv.appendChild(productName);

            var productBasicInfo = document.createElement('h5');
            productBasicInfo.innerHTML = entry.fields.productBasicInfo;
            textDiv.appendChild(productBasicInfo);

            var productPrice = document.createElement('h4');
            productPrice.innerHTML = entry.fields.productPrice;
            textDiv.appendChild(productPrice);

            var productCare = document.createElement('p');
            productCare.innerHTML = entry.fields.productCare;
            textDiv.appendChild(productCare);

            var productDetails = document.createElement('p');
            productDetails.innerHTML = entry.fields.productDetails;
            textDiv.appendChild(productDetails);

            var linkToProduct = document.createElement('a');
            linkToProduct.innerHTML = entry.fields.button;
            linkToProduct.href = 'product.html?id=' + entry.sys.id;
            linkToProduct.innerHTML = ('SEE MORE');
            textDiv.appendChild(linkToProduct);

            // var link = document.createElement('button')
            // link.innerHTML = "link to " + entry.fields.name;
            // link.href= entry.fields.link;
            // placeForContent.appendChild(link);

            // do whatever with the info in the field
            console.log(entry.fields.productName);
        }  

        placeForContent.appendChild(imageDiv);
        placeForContent.appendChild(textDiv);
    });
  });