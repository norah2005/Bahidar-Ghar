document.addEventListener('DOMContentLoaded', () => {
    const mealPrices = {
        burger: 400,
        sandwich: 350,
        pizza: 500,
        momo: 150,
        sukuti: 200,
        newari: 300,
        nepali: 299,
        chicken: 190,
        noodles: 299
    };

    const orderForm = document.getElementById('orderForm');
    const mealType = document.getElementById('mealType');
    const dietary = document.getElementById('dietary');
    const quantity = document.getElementById('quantity');
    const totalPriceElement = document.getElementById('totalPrice');

    const calculateTotalPrice = () => {
        const price = mealPrices[mealType.value];
        const qty = parseInt(quantity.value, 10);
        const total = price * qty;
        totalPriceElement.innerText = `Total Price: Rs. ${total}`;
    };

    mealType.addEventListener('change', calculateTotalPrice);
    dietary.addEventListener('change', calculateTotalPrice);
    quantity.addEventListener('input', calculateTotalPrice);

    orderForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Order placed successfully!');
    });

    calculateTotalPrice();
});