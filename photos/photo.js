document.addEventListener("DOMContentLoaded", () => {
    let container = document.querySelector(".container");
    let loading = document.querySelector(".loading");
    loading.style.display = "block";

    fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((data) => {
            loading.style.display = "none";

            data.forEach((item) => {
                let card = document.createElement("div");
                let title = document.createElement("h3");
                let image = document.createElement("img");
                let url = item.url; 

                title.textContent = item.title; 
                image.src = url;

                card.append(title, image); 
                card.classList.add("card");
                card.style.borderRadius = "10px";
                card.style.padding = "10px";
                card.style.margin = "20px";
                card.style.border = "2px solid #000";
                card.style.width = "100%";

                container.append(card); 
            });
            console.log(data);
        })
        .catch((error) => {
            loading.style.display = "none";
            console.error("Error fetching data: ", error);
        });
});
