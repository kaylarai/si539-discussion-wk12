document.querySelector("#ch3form").addEventListener("submit", function(e) {
    let date = document.querySelectorAll ('input[name="gradDate"]:checked').length;
    let standing = document.querySelectorAll('input[name="standing"]:checked').length;
    if (date === 0 || standing === 0) {
        e.preventDefault();
        alert("You must select a graduation date and a standing.");
        e.preventDefault();
    }
});
