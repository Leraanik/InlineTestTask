document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".navigation__item");
    const contents = document.querySelectorAll(".tab");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            const target = this.getAttribute("data-tab");

            tabs.forEach(tab => tab.classList.remove("navigation__item--active"));
            contents.forEach(content => content.classList.remove("tab--active"));

            document.getElementById(target).classList.add("tab--active");
            this.classList.add("navigation__item--active");
        });
    });
});
const cards = document.querySelectorAll(".cards__card");
let currentIndex = 0;

function showSlider(index) {
    cards.forEach((card, i) => {
        card.classList.toggle('card__list--active', i === index);
    });
}

function autoSlide() {
    currentIndex = (currentIndex + 1) % cards.length;
    showSlider(currentIndex);
}

setInterval(autoSlide, 2000);
showSlider(currentIndex);
