document.addEventListener('DOMContentLoaded', function () {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    let cartItems = [];
    let total = 0;

    // Assume that cartItems is passed from the main page
    // In a real-world scenario, you would likely use a server or some form of data persistence

    // Example: Assume that the main page sets cartItems before navigating to the cart page
    // cartItems = [{ id: '1', name: 'Product 1', price: 10.00 }, { id: '2', name: 'Product 2', price: 15.00 }];

    updateCart();

    function updateCart() {
        // Clear the existing content
        cartItemsElement.innerHTML = '';

        // Update the cart display
        total = 0;

        cartItems.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span>${item.name}</span>
                <span>$${item.price.toFixed(2)}</span>
            `;

            total += item.price;

            cartItemsElement.appendChild(cartItem);
        });

        cartTotalElement.innerText = total.toFixed(2);
    }
});
