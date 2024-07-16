document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartContainer = document.getElementById('cart-container');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    const closeBtn = document.querySelector('.close-btn');
    let cartTotalAmount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productItem = button.closest('.product-item');
            const category = button.getAttribute('data-category');
            const product = button.getAttribute('data-product');
            const price = parseFloat(button.getAttribute('data-price'));
            const imgSrc = productItem.querySelector('img').src; // Obtener la ruta de la imagen

            // Mostrar el carrito al agregar un artículo
            cartContainer.style.display = 'block';

            // Agregar item al carrito
            const item = document.createElement('li');
            item.innerHTML = `
                <img src="${imgSrc}" alt="${product}" style="width: 50px; height: 50px; margin-right: 10px;">
                ${product} - $${price.toFixed(2)}
            `;
            cartItemsList.appendChild(item);

            // Actualizar total del carrito
            cartTotalAmount += price;
            cartTotal.textContent = `$${cartTotalAmount.toFixed(2)}`;
        });
    });

    // Botón de vaciar carrito
    clearCartBtn.addEventListener('click', function() {
        cartItemsList.innerHTML = '';
        cartTotalAmount = 0;
        cartTotal.textContent = `$${cartTotalAmount.toFixed(2)}`;
    });

    // Botón de checkout (simulado)
    checkoutBtn.addEventListener('click', function() {
        alert(`Checkout - Total a pagar: $${cartTotalAmount.toFixed(2)}`);
        // Aquí podría implementarse la lógica real de pago
    });

    // Botón de cerrar carrito
    closeBtn.addEventListener('click', function() {
        cartContainer.style.display = 'none';
    });
});
