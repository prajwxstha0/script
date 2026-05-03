    document.querySelectorAll("button").forEach( (item) => {
        item.addEventListener("click", () => {
            item.innerHTML == "hancock" ? (document.getElementById("altImg").src = "robin.jpg", item.innerHTML = "robin") : (document.getElementById("altImg").src = "hancock.jpg", item.innerHTML = "hancock");
        })
    })