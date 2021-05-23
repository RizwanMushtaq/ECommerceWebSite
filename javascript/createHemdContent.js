function createHemdContent(){
    let hemd01 = new Product("hemd01", "hemd", "Blue hemd", "images/hemd01.jpg", "A Blue hemd woven from the finest yarns", "180");
    let hemd02 = new Product("hemd02", "hemd", "Dark Blue hemd", "images/hemd02.jpg", "A Dark Blue hemd woven from the finest yarns", "250");
    let hemd03 = new Product("hemd03", "hemd", "Light Blue hemd", "images/hemd03.jpg", "A Light Blue hemd woven from the finest yarns", "100");
    let hemd04 = new Product("hemd04", "hemd", "Open Blue hemd", "images/hemd04.jpg", "A Open Blue hemd woven from the finest yarns", "120");
    let hemd05 = new Product("hemd05", "hemd", "Casual Blue hemd", "images/hemd05.jpg", "A Casual Blue hemd woven from the finest yarns", "130");
    let hemd06 = new Product("hemd06", "hemd", "Hard Blue hemd", "images/hemd06.jpg", "A Hard Blue hemd woven from the finest yarns", "150");

    let hemdArray = [hemd01, hemd02, hemd03, hemd04, hemd05, hemd06];
    
    if(hemdArray.length != 0){
        console.log("hemd array available");
        for(let i=0; i<hemdArray.length; i++){
           //Call function to create product div
           createHemdProducts(hemdArray, i);
        }
    }

    //Calling function to show individual jacke product
    showProduct(hemdArray);
}

createHemdProducts = function(productArray, i){
        let productContainer = document.createElement("div");
        productContainer.setAttribute("class", "productContainer");
        productContainer.setAttribute("id", productArray[i].id);
        
        let imageDiv = document.createElement("div");
        
        let productImage = document.createElement("img");
        productImage.setAttribute("src", productArray[i].imageUrl);
        let productName = document.createElement("h1");
        productName.innerHTML = productArray[i].name;
        let productPrice = document.createElement("p");
        productPrice.innerHTML = productArray[i].price + " \u20AC";

        imageDiv.appendChild(productImage);
        productContainer.appendChild(imageDiv);
        productContainer.appendChild(productName);
        productContainer.appendChild(productPrice);

        let hemdenProductContent = document.querySelector(".hamdenProductContent");
        hemdenProductContent.appendChild(productContainer);
}
