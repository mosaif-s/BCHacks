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
        total += 1;

        updateCart();
    }

    function updateCart() {
        const totalAmountElement = document.getElementById('total-amount');
        totalAmountElement.innerText = total;
        console.log(cartItems);
    }

    function goToCheckout() {
        window.location.href = 'checkout.html';
    }
});