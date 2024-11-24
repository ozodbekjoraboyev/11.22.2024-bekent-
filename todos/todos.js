document.addEventListener("DOMContentLoaded", () => {
    let contenor = document.querySelector(".container")
    let lading = document.querySelector(".loading")
    lading.style.display = "block";
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((responsi) => {
            return responsi.json()
        }).then((responsi) => {
            lading.style.display = "none";
            responsi.forEach((elem) => {
                let card = document.createElement("div")
                let userId = document.createElement("h3")
                let id = document.createElement("h2")
                let title = document.createElement("h3")
                let completed = document.createElement("p")
                userId.textContent = `uzerid:${elem.userId}`
                id.textContent = `id:${elem.id}`
                title.textContent = `title:${elem.title}`
                completed.textContent = `completed:${elem.completed}`
                card.append(userId,id,title,completed)
                card.classList.add("card")
                contenor.append(card)
                card.style.border = "2px solid red"
                card.style.padding = "10px"


            });
        })
})