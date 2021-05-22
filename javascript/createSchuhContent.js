function createschuhContent(){
    let schuh01 = new Schuh("schuh01", "schuh", "Blue schuh", "images/schuh01.jpg", "A Blue schuh woven from the finest yarns", "180");
    let schuh02 = new Schuh("schuh02", "schuh", "Dark Blue schuh", "images/schuh02.jpg", "A Dark Blue schuh woven from the finest yarns", "250");
    let schuh03 = new Schuh("schuh03", "schuh", "Light Blue schuh", "images/schuh03.jpg", "A Light Blue schuh woven from the finest yarns", "100");
    let schuh04 = new Schuh("schuh04", "schuh", "Open Blue schuh", "images/schuh04.jpg", "A Open Blue schuh woven from the finest yarns", "120");
    let schuh05 = new Schuh("schuh05", "schuh", "Casual Blue schuh", "images/schuh05.jpg", "A Casual Blue schuh woven from the finest yarns", "130");
    let schuh06 = new Schuh("schuh06", "schuh", "Hard Blue schuh", "images/schuh06.jpg", "A Hard Blue schuh woven from the finest yarns", "150");

    let schuhArray = [schuh01, schuh02, schuh03, schuh04, schuh05, schuh06];
    
    if(schuhArray.length != 0){
        console.log("schuh array available");
        for(let i=0; i<schuhArray.length; i++){
           //Call function to create product div
           createschuhProducts(schuhArray, i);
        }
    }

    //Calling function to show individual jacke product
    showProduct(schuhArray);
}

 function createschuhProducts(productArray, i){
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

        let schuheProductContent = document.querySelector(".schuheProductContent");
        schuheProductContent.appendChild(productContainer);
}