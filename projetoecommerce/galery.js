document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector(".gallery");
    const images = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg"
        // Adicione mais imagens conforme necessário
    ];

    images.forEach((imageSrc, index) => {
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");

        const image = document.createElement("img");
        image.classList.add("image");
        image.src = imageSrc;
        image.alt = `Image ${index + 1}`;
        imageContainer.appendChild(image);

        const imageInfo = document.createElement("div");
        imageInfo.classList.add("image-info");
        imageInfo.innerHTML = `
            <h3>Título da Imagem ${index + 1}</h3>
            <p>Descrição da Imagem ${index + 1}</p>
        `;
        imageContainer.appendChild(imageInfo);

        gallery.appendChild(imageContainer);

        imageContainer.addEventListener("mouseenter", () => {
            image.style.transform = "scale(1.3)";
            imageInfo.style.opacity = 1;
        });

        imageContainer.addEventListener("mouseleave", () => {
            image.style.transform = "scale(1)";
            imageInfo.style.opacity = 0;
        });

        imageContainer.addEventListener("click", () => {
            alert(`Você clicou na imagem ${index + 1}`);
            // Você pode personalizar esta ação conforme necessário
        });
    });
});
