function createhutContent(){
    let hut01 = new Hut("hut01", "hut", "Blue hut", "images/hut01.jpg", "A Blue hut woven from the finest yarns", "80");
    let hut02 = new Hut("hut02", "hut", "Dark Blue hut", "images/hut02.jpg", "A Dark Blue hut woven from the finest yarns", "50");
    let hut03 = new Hut("hut03", "hut", "Light Blue hut", "images/hut03.jpg", "A Light Blue hut woven from the finest yarns", "10");
    let hut04 = new Hut("hut04", "hut", "Open Blue hut", "images/hut04.jpg", "A Open Blue hut woven from the finest yarns", "20");
    let hut05 = new Hut("hut05", "hut", "Casual Blue hut", "images/hut05.jpg", "A Casual Blue hut woven from the finest yarns", "10");
    let hut06 = new Hut("hut06", "hut", "Hard Blue hut", "images/hut06.jpg", "A Hard Blue hut woven from the finest yarns", "50");

    let hutArray = [hut01, hut02, hut03, hut04, hut05, hut06];
    
    if(hutArray.length != 0){
        console.log("hut array available");
        for(let i=0; i<hutArray.length; i++){
           //Call function to create product div
           createhutProducts(hutArray, i);
        }
    }

    //Calling function to show individual jacke product
    showProduct(hutArray);
}

 function createhutProducts(productArray, i){
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

        let hüteProductContent = document.querySelector(".hüteProductContent");
        hüteProductContent.appendChild(productContainer);
}