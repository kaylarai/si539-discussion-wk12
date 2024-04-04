document.querySelector("#sameAddress").addEventListener("click", function(){
    let bill = document.querySelector("#bill");
    let home = document.querySelector("#home");
    if (this.checked == true){
        home.value = home.value;
        home.disabled = true;
    }
    else{
        home.value = "";
        home.disabled = false;
    }
});