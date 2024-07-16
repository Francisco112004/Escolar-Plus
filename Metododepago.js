document.addEventListener("DOMContentLoaded", function() {
    const cartContainer = document.getElementById('cart-container');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    const checkoutBtn = document.getElementById('checkout-btn');
    const closeBtn = document.querySelector('.close-btn');

    const paymentModal = document.getElementById('payment-modal');
    const closePaymentModalBtn = document.querySelector('.close-payment-modal');
    const paymentForm = document.getElementById('payment-form');

    let cart = [];

    function openCart() {
        cartContainer.style.display = 'block';
    }

    function closeCart() {
        cartContainer.style.display = 'none';
    }

    function openPaymentModal() {
        paymentModal.style.display = 'flex';
    }

    function closePaymentModal() {
        paymentModal.style.display = 'none';
    }

    function updateCartTotal() {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
        });
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    function renderCart() {
        cartItemsList.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.setAttribute('data-category', item.category);
            cartItem.setAttribute('data-product', item.product);
            cartItem.setAttribute('data-price', item.price);
            cartItem.textContent = `${item.product} - $${item.price} x ${item.quantity}`;
            cartItemsList.appendChild(cartItem);
        });
        updateCartTotal();
    }

    function addToCart(category, product, price) {
        const existingItem = cart.find(item => item.product === product);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ category, product, price: parseFloat(price), quantity: 1 });
        }
        renderCart();
        openCart();
    }

    // Añadir evento a botones de añadir al carrito
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = button.getAttribute('data-category');
            const product = button.getAttribute('data-product');
            const price = button.getAttribute('data-price');
            addToCart(category, product, price);
        });
    });

    // Manejo del evento de vaciar el carrito
    clearCartBtn.addEventListener('click', function() {
        cart = [];
        renderCart();
        closeCart();
    });

    // Manejo del evento de checkout
    checkoutBtn.addEventListener('click', function() {
        openPaymentModal();
    });

    // Manejo del evento de confirmar el pago
    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Gracias por su compra!');
        cart = [];
        renderCart();
        closePaymentModal();
        closeCart();
    });

    // Manejo del evento de cerrar el carrito
    closeBtn.addEventListener('click', closeCart);

    // Manejo del evento de cerrar la ventana de métodos de pago
    closePaymentModalBtn.addEventListener('click', closePaymentModal);
});

document.addEventListener('DOMContentLoaded', function() {
    const paymentForm = document.getElementById('payment-form');
    const creditCardDetails = document.getElementById('credit-card-details');
    const paypalDetails = document.getElementById('paypal-details');
    const yappyDetails = document.getElementById('yappy-details');

    // Función para mostrar los detalles de pago correspondientes
    function showPaymentDetails(paymentMethod) {
        // Ocultar todos los detalles primero
        creditCardDetails.style.display = 'none';
        paypalDetails.style.display = 'none';
        yappyDetails.style.display = 'none';

        // Mostrar los detalles del método de pago seleccionado
        if (paymentMethod === 'credit-card') {
            creditCardDetails.style.display = 'block';
        } else if (paymentMethod === 'paypal') {
            paypalDetails.style.display = 'block';
        } else if (paymentMethod === 'yappy') {
            yappyDetails.style.display = 'block';
        }
    }

    // Evento change para detectar cambio en método de pago seleccionado
    paymentForm.addEventListener('change', function(event) {
        if (event.target && event.target.name === 'payment-method') {
            showPaymentDetails(event.target.value);
        }
    });

    // Mostrar detalles del método de pago inicialmente seleccionado (si lo hay)
    const selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked');
    if (selectedPaymentMethod) {
        showPaymentDetails(selectedPaymentMethod.value);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const paymentForm = document.getElementById('payment-form');
    const creditCardDetails = document.getElementById('credit-card-details');
    const paypalDetails = document.getElementById('paypal-details');
    const yappyDetails = document.getElementById('yappy-details');
    const payButton = document.getElementById('pay-button');

    // Función para mostrar los detalles de pago correspondientes
    function showPaymentDetails(paymentMethod) {
        // Ocultar todos los detalles primero
        creditCardDetails.style.display = 'none';
        paypalDetails.style.display = 'none';
        yappyDetails.style.display = 'none';

        // Mostrar los detalles del método de pago seleccionado
        if (paymentMethod === 'credit-card') {
            creditCardDetails.style.display = 'block';
        } else if (paymentMethod === 'paypal') {
            paypalDetails.style.display = 'block';
        } else if (paymentMethod === 'yappy') {
            yappyDetails.style.display = 'block';
        }
    }

    // Evento change para detectar cambio en método de pago seleccionado
    paymentForm.addEventListener('change', function(event) {
        if (event.target && event.target.name === 'payment-method') {
            showPaymentDetails(event.target.value);
        }
    });

    // Evento submit para procesar el pago
    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Aquí puedes agregar la lógica para procesar el pago según el método seleccionado
        const paymentMethod = document.querySelector('input[name="payment-method"]:checked');
        if (paymentMethod) {
            const selectedMethod = paymentMethod.value;
            if (selectedMethod === 'credit-card') {
                const creditCardNumber = document.querySelector('input[name="credit-card-number"]').value;
                const expiryDate = document.querySelector('input[name="expiry-date"]').value;
                const cvv = document.querySelector('input[name="cvv"]').value;
                // Aquí puedes procesar los datos de tarjeta de crédito/débito
                console.log('Procesando pago con tarjeta de crédito/débito');
            } else if (selectedMethod === 'paypal') {
                const paypalEmail = document.querySelector('input[name="paypal-email"]').value;
                const paypalPassword = document.querySelector('input[name="paypal-password"]').value;
                // Aquí puedes procesar los datos de PayPal
                console.log('Procesando pago con PayPal');
            } else if (selectedMethod === 'yappy') {
                const yappyPhone = document.querySelector('input[name="yappy-phone"]').value;
                // Aquí puedes procesar los datos de Yappy
                console.log('Procesando pago con Yappy');
            }

            // Aquí puedes agregar la lógica adicional después de procesar el pago, como redirección o notificaciones
            alert('Pago procesado correctamente');
        } else {
            alert('Selecciona un método de pago');
        }
    });

    // Mostrar detalles del método de pago inicialmente seleccionado (si lo hay)
    const selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked');
    if (selectedPaymentMethod) {
        showPaymentDetails(selectedPaymentMethod.value);
    }
});

