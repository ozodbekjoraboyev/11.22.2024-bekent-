document.addEventListener("DOMContentLoaded", () => {
    let contenor = document.querySelector(".container")
    let lading = document.querySelector(".loading")
    lading.style.display = "block"
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((responsi) => {
            return responsi.json()
        }).then((responsi) => {
            lading.style.display = "none";
            responsi.forEach((elem) => {
                let card = document.createElement("div")
                let name = document.createElement("h3")
                let email = document.createElement("h4")
                let address = document.createElement("p")
                let username = document.createElement("p")
                let us = document.createElement("p")


                address.textContent = `Users' Address: ${elem.address.street}`
                name.textContent = `Name: ${elem.name}`
                email.textContent = `email: ${elem.email}`
                username.textContent = `username: ${elem.username}`
                card.append(name, email, address, username)
                card.classList.add("card")
                card.style.borderRadius = "10px"
                card.style.padding = "10px"
                card.style.margin = "20px"
                contenor.append(card)
                card.style.border = " 2px solid #000"
                card.style.width = "100%"



            })
            console.log(responsi);

        })
})