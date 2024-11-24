document.addEventListener("DOMContentLoaded", () => {
    let contenor = document.querySelector(".container")
    let lading = document.querySelector(".loading")
    lading.style.display = "block"
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((responsi) => {
            return responsi.json()
        }).then((responsi) => {
            lading.style.display = "none";
            responsi.forEach((elem) => {
                let card = document.createElement("div")
                let userId = document.createElement("h3")
                let id = document.createElement("h4")
                let title = document.createElement("p")
                let body = document.createElement("p")

                userId.textContent = `userId: ${elem.userId}`
                id.textContent = `id: ${elem.id}`
                body.textContent = `body: ${elem.body}`
                card.append(userId, id, title, body)
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