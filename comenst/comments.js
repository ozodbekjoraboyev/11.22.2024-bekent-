document.addEventListener("DOMContentLoaded", () => {
    let contenor = document.querySelector(".container")
    let lading = document.querySelector(".loading")
    lading.style.display = "block"
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((respons)=>{
        return respons.json()
    }).then((respons)=>{
        lading.style.display = "none"
        respons.forEach(elem => {
            let card = document.createElement("h2")
            let postId = document.createElement("h2")
            let id = document.createElement("h4")
            let  name = document.createElement("h4")
            let email = document.createElement("h4")

            let body = document.createElement("h4")

             postId.textContent = `userId ${elem.padding}`
             id.textContent = `id ${elem.id}`
             name.textContent = `name ${elem.name}`
             email.textContent = `email ${elem.email}`
             card.append(postId,id,name,email,body)
             card.classList.add("card")
             contenor.append(card)
             card.style.width ="100%"
             card.style.border="2px solid yellow"
             card.style.padding="10px"
        });
        console.log(respons);
        
    })
})