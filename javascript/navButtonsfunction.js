function updateOnNavButtonClick(){
    //Event listener to listen button click for menu buttons
    document.querySelectorAll(".navButton").forEach(function(item){
        item.onclick = function(e){
            for(let i = 0; i < e.target.classList.length; i++){
                if(e.target.classList[i] === "homeButton"){
                    console.log("homeButton pressed");
                    document.querySelector(".homeContent").style.display = "flex";
                    document.querySelector(".jackenContent").style.display = "none";
                    document.querySelector(".hamdenContent").style.display = "none";
                    document.querySelector(".hosenContent").style.display = "none";
                    document.querySelector(".schuheContent").style.display = "none";
                    document.querySelector(".hüteContent").style.display = "none";
                    document.querySelector(".ImpressumContent").style.display = "none";
                }else if(e.target.classList[i] === "jackenButton"){
                    console.log("jackenButton pressed");
                    document.querySelector(".homeContent").style.display = "none";
                    document.querySelector(".jackenContent").style.display = "flex";
                    document.querySelector(".hamdenContent").style.display = "none";
                    document.querySelector(".hosenContent").style.display = "none";
                    document.querySelector(".schuheContent").style.display = "none";
                    document.querySelector(".hüteContent").style.display = "none";
                    document.querySelector(".ImpressumContent").style.display = "none"; 
                }else if(e.target.classList[i] === "hamdenButton"){
                    console.log("hamdenButton pressed");
                    document.querySelector(".homeContent").style.display = "none";
                    document.querySelector(".jackenContent").style.display = "none";
                    document.querySelector(".hamdenContent").style.display = "flex";
                    document.querySelector(".hosenContent").style.display = "none";
                    document.querySelector(".schuheContent").style.display = "none";
                    document.querySelector(".hüteContent").style.display = "none";
                    document.querySelector(".ImpressumContent").style.display = "none"; 
                }else if(e.target.classList[i] === "hosenButton"){
                    console.log("hosenButton pressed");
                    document.querySelector(".homeContent").style.display = "none";
                    document.querySelector(".jackenContent").style.display = "none";
                    document.querySelector(".hamdenContent").style.display = "none";
                    document.querySelector(".hosenContent").style.display = "flex";
                    document.querySelector(".schuheContent").style.display = "none";
                    document.querySelector(".hüteContent").style.display = "none";
                    document.querySelector(".ImpressumContent").style.display = "none"; 
                }else if(e.target.classList[i] === "schuheButton"){
                    console.log("schuheButton pressed");
                    document.querySelector(".homeContent").style.display = "none";
                    document.querySelector(".jackenContent").style.display = "none";
                    document.querySelector(".hamdenContent").style.display = "none";
                    document.querySelector(".hosenContent").style.display = "none";
                    document.querySelector(".schuheContent").style.display = "flex";
                    document.querySelector(".hüteContent").style.display = "none";
                    document.querySelector(".ImpressumContent").style.display = "none"; 
                }else if(e.target.classList[i] === "hüteButton"){
                    console.log("hüteButton pressed");
                    document.querySelector(".homeContent").style.display = "none";
                    document.querySelector(".jackenContent").style.display = "none";
                    document.querySelector(".hamdenContent").style.display = "none";
                    document.querySelector(".hosenContent").style.display = "none";
                    document.querySelector(".schuheContent").style.display = "none";
                    document.querySelector(".hüteContent").style.display = "flex";
                    document.querySelector(".ImpressumContent").style.display = "none"; 
                }else if(e.target.classList[i] === "ImpressumButton"){
                    console.log("ImpressumButton pressed");
                    document.querySelector(".homeContent").style.display = "none";
                    document.querySelector(".jackenContent").style.display = "none";
                    document.querySelector(".hamdenContent").style.display = "none";
                    document.querySelector(".hosenContent").style.display = "none";
                    document.querySelector(".schuheContent").style.display = "none";
                    document.querySelector(".hüteContent").style.display = "none";
                    document.querySelector(".ImpressumContent").style.display = "flex"; 
                }
            }
        }
    }); 
}