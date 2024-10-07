"use strict";

function initCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const cartCountElement = document.querySelector('.cart-count'); // Счётчик на иконке корзины
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Отрисовка товаров в корзине
    renderCartItems();
    updateTotalPrice();
    updateCartCount();

    // Функция для отрисовки товаров
    function renderCartItems() {
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.imgSrc}" alt="${item.title}">
                <div class="cart-item-details">
                    <h3>${item.title}</h3>
                    <p>${item.price} за единицу</p>
                    <div class="quantity-controls">
                        <button class="decrease-qty">-</button>
                        <input type="number" min="1" value="${item.quantity || 1}" class="item-qty">
                        <button class="increase-qty">+</button>
                    </div>
                    <p>Итоговая стоимость: <span class="item-total">${(parseFloat(item.price) * (item.quantity || 1)).toFixed(2)}</span> zl</p>
                </div>
                <button class="remove-btn">Удалить</button>
            `;
            cartItemsContainer.appendChild(cartItem);

            // Добавляем обработчики для изменения количества
            const qtyInput = cartItem.querySelector('.item-qty');
            const increaseBtn = cartItem.querySelector('.increase-qty');
            const decreaseBtn = cartItem.querySelector('.decrease-qty');

            increaseBtn.addEventListener('click', function () {
                qtyInput.value = parseInt(qtyInput.value) + 1;
                updateItemQuantity(item, qtyInput.value);
            });

            decreaseBtn.addEventListener('click', function () {
                if (qtyInput.value > 1) {
                    qtyInput.value = parseInt(qtyInput.value) - 1;
                    updateItemQuantity(item, qtyInput.value);
                }
            });

            qtyInput.addEventListener('change', function () {
                if (qtyInput.value < 1) qtyInput.value = 1;
                updateItemQuantity(item, qtyInput.value);
            });

            // Добавляем обработчик для кнопки удаления
            const removeButton = cartItem.querySelector('.remove-btn');
            removeButton.addEventListener('click', function() {
                removeFromCart(item);
            });
        });
    }

    // Функция для обновления количества товаров в корзине
    function updateItemQuantity(item, quantity) {
        cart = cart.map(cartItem => {
            if (cartItem.title === item.title) {
                cartItem.quantity = quantity;
            }
            return cartItem;
        });
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCartItems();
        updateTotalPrice();
        updateCartCount(); // Обновляем счётчик на иконке
    }

    // Обновление итоговой стоимости
    function updateTotalPrice() {
        const total = cart.reduce((sum, item) => sum + parseFloat(item.price) * (item.quantity || 1), 0);
        totalPriceElement.textContent = total.toFixed(2);
    }
// Функция для обновления счётчика на иконке корзины
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElement = document.querySelector('.cart-count'); // Элемент с количеством товаров

    const uniqueItemCount = cart.length; // Количество уникальных товаров
    if (uniqueItemCount > 0) {
        cartCountElement.textContent = uniqueItemCount; // Отображаем количество уникальных товаров
        cartCountElement.style.display = 'inline'; // Показываем кружок
    } else {
        cartCountElement.style.display = 'none'; // Скрываем кружок, если корзина пуста
    }
}


    // Функция для удаления товара из корзины
    function removeFromCart(item) {
        cart = cart.filter(cartItem => cartItem.title !== item.title);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCartItems();
        updateTotalPrice();
        updateCartCount(); // Обновляем счётчик на иконке
    }
}




