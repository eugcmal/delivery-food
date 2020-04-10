const cartButton = document.querySelector('#cart_button');
const modal = document.querySelector(".modal");
const close = document.querySelector(".modal");


cartButton.addEventListener('click', function (event) {
    modal.classList.add("is_open");
});

close.addEventListener('click', function (event) {
    modal.classList.remove("is_open");
});

new WOW().init();