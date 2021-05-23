function createJackeContent(){
    let jacke01 = new Product("jacket01", "Jacket", "Blue Jacket", "images/jacke01.jpg", "A Blue jacket woven from the finest yarns", "180");
    let jacke02 = new Product("jacket02", "Jacket", "Dark Blue Jacket", "images/jacke02.jpg", "A Dark Blue jacket woven from the finest yarns", "250");
    let jacke03 = new Product("jacket03", "Jacket", "Light Blue Jacket", "images/jacke03.jpg", "A Light Blue jacket woven from the finest yarns", "100");
    let jacke04 = new Product("jacket04", "Jacket", "Open Blue Jacket", "images/jacke04.jpg", "A Open Blue jacket woven from the finest yarns", "120");
    let jacke05 = new Product("jacket05", "Jacket", "Casual Blue Jacket", "images/jacke05.jpg", "A Casual Blue jacket woven from the finest yarns", "130");
    let jacke06 = new Product("jacket06", "Jacket", "Hard Blue Jacket", "images/jacke06.jpg", "A Hard Blue jacket woven from the finest yarns", "150");

    let jacketArray = [jacke01, jacke02, jacke03, jacke04, jacke05, jacke06];
    
    if(jacketArray.length != 0){
        console.log("jacket array available");
        for(let i=0; i<jacketArray.length; i++){
           //Call function to create product div
           createJackeProducts(jacketArray, i);
        }
    }
    //Calling function to show individual jacke product
    showProduct(jacketArray);
    
}

createJackeProducts = function(productArray, i){
        let productContainer = document.createElement("div");
        productContainer.setAttribute("class", "productContainer");
        //productContainer.classList.add(productArray[i].id);
        productContainer.setAttribute("id", productArray[i].id);

        let imageDiv = document.createElement("div");
        
        let productImage = document.createElement("img");
        productImage.setAttribute("src", productArray[i].imageUrl);
        let productName = document.createElement("h1");
        productName.innerHTML = productArray[i].name;
        let productDescription = document.createElement("p");
        productDescription.innerHTML = productArray[i].price + " \u20AC";

        imageDiv.appendChild(productImage);
        productContainer.appendChild(imageDiv);
        productContainer.appendChild(productName);
        productContainer.appendChild(productDescription);

        let jackenProductContent = document.querySelector(".jackenProductContent");
        jackenProductContent.appendChild(productContainer);
}

function showProduct(productArray){
    document.addEventListener("click", function(e){
        for(let i = 0; i<productArray.length; i++){
            if( e.target.id === productArray[i].id ||
                e.target.parentElement.id === productArray[i].id ||
                e.target.parentElement.parentElement.id === productArray[i].id){
                console.log(productArray[i].id + "pressed");

                document.querySelector(".individualProductName").innerHTML = productArray[i].name;
                document.querySelector(".individualProductDescription").innerHTML = productArray[i].description;
                document.querySelector(".individualProductImage").src = productArray[i].imageUrl;
                document.querySelector(".individualProductNameAndPrice").innerHTML = productArray[i].name + ": " + productArray[i].price + " \u20AC";
                showIndividualContent();
            }
        }
    });
}
