document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector(".carousel");
    const carouselTitle = document.getElementById("carousel-title");

    const images = [
        "https://images.unsplash.com/photo-1635690926948-06e5d7af93bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1615887023544-3a566f29d822?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1512267372775-a001038ff126?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1636560652843-28c12bafa1e9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    ];

    let currentIndex = 0;

    function changeImages() {
        const imageContainers = carousel.querySelectorAll(".image-container");

        // Adiciona uma nova imagem
        const newImageContainer = document.createElement("div");
        newImageContainer.classList.add("image-container");

        const newImage = document.createElement("img");
        newImage.classList.add("image");
        newImage.src = images[currentIndex];
        newImageContainer.appendChild(newImage);

        const imageInfo = document.createElement("div");
        imageInfo.classList.add("image-info");
        imageInfo.innerHTML = `
            <h3>Título da Imagem</h3>
            <p>Descrição da Imagem</p>
        `;
        newImageContainer.appendChild(imageInfo);

        carousel.insertBefore(newImageContainer, imageContainers[0]);

        // Remove a imagem mais antiga (a terceira, se houver)
        if (imageContainers.length > 2) {
            carousel.removeChild(imageContainers[2]);
        }

        // Atualiza o índice para a próxima imagem
        currentIndex = (currentIndex + 1) % images.length;

        // Atualiza o título do carrossel
        carouselTitle.textContent = "Título do Carrossel - Imagem " + (currentIndex + 1);
    }

    document.querySelector("#prev").addEventListener("click", () => {
        changeImages();
    });

    document.querySelector("#next").addEventListener("click", () => {
        changeImages();
    });
});

