document.addEventListener("DOMContentLoaded", () => {
    let contenor = document.querySelector(".container")
    let lading = document.querySelector(".loading")
    lading.style.display = "block"
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then((respons)=>{
        return respons.json()
    }).then((respons)=>{
        lading.style.display = "none"
        respons.forEach(elem => {
            let card = document.createElement("h2")
            let userId = document.createElement("h2")
            let id = document.createElement("h4")
            let titele = document.createElement("h4")
             userId.textContent = `userId ${elem.userId}`
             id.textContent = `id ${elem.id}`
             titele.textContent = `titele ${elem.titele}`
             card.append(userId,id,titele)
             card.classList.add("card")
             contenor.append(card)
             card.style.width ="100%"
             card.style.borderRadius ="20px"
             card.style.margin ="20px"
             card.style.border="2px solid yellow"
             card.style.padding="10px"
        });
        console.log(respons);
        
    })
})