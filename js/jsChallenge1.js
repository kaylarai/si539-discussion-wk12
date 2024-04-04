// challenge 1
document.querySelector("#subscribe").addEventListener("click", function(){
if (this.checked == true){
    console.log("checked");
    document.querySelector("#emailDiv").style.display = "block";
}
else{
    console.log("unchecked");
    document.querySelector("#emailDiv").style.display = "none";
}
});

// what element (query selector) should I add an event listener (action) to?
// what is the change (event) happening
// what should happen when the change happens (function definition)


document.addEventListener("click", function(){
    let currentTime = new Date();
    alert(currentTime);
});