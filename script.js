document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let cartItems = [];
    let total = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    // Add event listener for the checkout button
    const checkoutButton = document.getElementById('checkout-button');
    checkoutButton.addEventListener('click', goToCheckout);

    function addToCart(event) {
        const product = event.target.parentElement;
        const productId = product.getAttribute('data-id');
        const productName = product.querySelector('h3').innerText;
        const productPrice = parseFloat(product.querySelector('p').innerText.substring(1));

        const cartItem = {
            id: productId,
            name: productName,
            price: productPrice
        };

        cartItems.push(cartItem);
        total += productPrice;

        updateCart();
    }

    function updateCart() {
        // Update the cart display on the index page
        const totalAmountElement = document.getElementById('total-amount');
        totalAmountElement.innerText = total.toFixed(2);

        // Additional code to update the cart on the page
        // For simplicity, we'll just log the cartItems to the console
        console.log(cartItems);
    }

    function goToCheckout() {
        // Redirect to the checkout page
        window.location.href = 'checkout.html';
    }
});
