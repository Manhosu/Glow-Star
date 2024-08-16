document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    const productList = document.querySelector('.product-list');
    const products = document.querySelectorAll('.product');
    const productWidth = products[0].offsetWidth;
    const productMargin = parseInt(getComputedStyle(products[0]).marginRight);
    const totalWidth = productWidth + productMargin;
    let scrollAmount = 0;

    // Ajusta o tamanho da lista de produtos para permitir o loop
    productList.style.width = `${totalWidth * products.length}px`;

    prevBtn.addEventListener('click', function() {
        if (scrollAmount > 0) {
            scrollAmount -= totalWidth;
            productList.style.transform = `translateX(-${scrollAmount}px)`;
        } else {
            scrollAmount = totalWidth * (products.length - 1);
            productList.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });

    nextBtn.addEventListener('click', function() {
        if (scrollAmount < totalWidth * (products.length - 1)) {
            scrollAmount += totalWidth;
            productList.style.transform = `translateX(-${scrollAmount}px)`;
        } else {
            scrollAmount = 0;
            productList.style.transform = `translateX(0)`;
        }
    });
});
