const signs = {
    sign1: {
        title: "Elegant LED Wall Decor",
        description: "This sleek LED sign adds a touch of elegance to your home, perfect for living rooms and hallways.",
        image: "MEDIA/domestic-sign1.jpg"
    },
    sign2: {
        title: "Neon LED Bedroom Lights",
        description: "Brighten up your bedroom with these stylish neon LED signs, available in various colors.",
        image: "MEDIA/domestic-sign2.jpg"
    },
    sign3: {
        title: "Personalized LED Name Signs",
        description: "Customize your own LED sign with your name or favorite phrase!",
        image: "MEDIA/domestic-sign3.jpg"
    }
};

function openModal(signKey) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");

    modalImg.src = signs[signKey].image;
    modalTitle.innerText = signs[signKey].title;
    modalDescription.innerText = signs[signKey].description;

    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
