function createHoseContent(){
    let hose01 = new Hose("hose01", "hose", "Blue hose", "images/hose01.jpg", "A Blue hose woven from the finest yarns", "180");
    let hose02 = new Hose("hose02", "hose", "Dark Blue hose", "images/hose02.jpg", "A Dark Blue hose woven from the finest yarns", "250");
    let hose03 = new Hose("hose03", "hose", "Light Blue hose", "images/hose03.jpg", "A Light Blue hose woven from the finest yarns", "100");
    let hose04 = new Hose("hose04", "hose", "Open Blue hose", "images/hose04.jpg", "A Open Blue hose woven from the finest yarns", "120");
    let hose05 = new Hose("hose05", "hose", "Casual Blue hose", "images/hose05.jpg", "A Casual Blue hose woven from the finest yarns", "130");
    let hose06 = new Hose("hose06", "hose", "Hard Blue hose", "images/hose06.jpg", "A Hard Blue hose woven from the finest yarns", "150");

    let hoseArray = [hose01, hose02, hose03, hose04, hose05, hose06];
    
    if(hoseArray.length != 0){
        console.log("hose array available");
        for(let i=0; i<hoseArray.length; i++){
           //Call function to create product div
           createhoseProducts(hoseArray, i);
        }
    }

    //Calling function to show individual jacke product
    showProduct(hoseArray);
}

 function createhoseProducts(productArray, i){
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

        let hosenProductContent = document.querySelector(".hosenProductContent");
        hosenProductContent.appendChild(productContainer);
}
