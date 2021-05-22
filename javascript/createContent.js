function createContent(){
    let jacke01 = new Jacket("jacket01", "Jacket", "Blue Jacket", "images/jacke01.jpg", "A Blue jacket woven from the finest yarns", "180");
    let jacke02 = new Jacket("jacket02", "Jacket", "Dark Blue Jacket", "images/jacke02.jpg", "A Dark Blue jacket woven from the finest yarns", "250");
    let jacke03 = new Jacket("jacket03", "Jacket", "Light Blue Jacket", "images/jacke03.jpg", "A Light Blue jacket woven from the finest yarns", "100");
    let jacke04 = new Jacket("jacket04", "Jacket", "Open Blue Jacket", "images/jacke04.jpg", "A Open Blue jacket woven from the finest yarns", "120");
    let jacke05 = new Jacket("jacket05", "Jacket", "Casual Blue Jacket", "images/jacke05.jpg", "A Casual Blue jacket woven from the finest yarns", "130");
    let jacke06 = new Jacket("jacket06", "Jacket", "Hard Blue Jacket", "images/jacke06.jpg", "A Hard Blue jacket woven from the finest yarns", "150");

    let jacketArray = [jacke01, jacke02, jacke03, jacke04, jacke05, jacke06];
    
    if(jacketArray.length != 0){
        console.log("jacket array available");
        for(let i=0; i<jacketArray.length; i++){
           //Call function to create product div
           createProductDiv("jacket", jacketArray, i);
        }
    }
}

createProductDiv = function(string, productArray, i){
    if(string === "jacket"){
        let productContainer = document.createElement("div");
        productContainer.setAttribute("class", "productContainer");
        
        let imageDiv = document.createElement("div");
        
        let productImage = document.createElement("img");
        productImage.setAttribute("src", productArray[i].imageUrl);
        let productName = document.createElement("h1");
        productName.innerHTML = productArray[i].name;
        let productDescription = document.createElement("p");
        productDescription.innerHTML = productArray[i].description;

        imageDiv.appendChild(productImage);
        productContainer.appendChild(imageDiv);
        productContainer.appendChild(productName);
        productContainer.appendChild(productDescription);

        let jackenProductContent = document.querySelector(".jackenProductContent");
        jackenProductContent.appendChild(productContainer);
    }
}
