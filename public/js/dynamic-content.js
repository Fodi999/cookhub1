"use strict";

document.addEventListener('DOMContentLoaded', function () {
    try {
        const listItems = document.querySelectorAll('.navigation .list a');
        const contentContainer = document.getElementById("dynamic-content");  // Контейнер для динамического контента
        const headerElement = document.getElementById("main-header");  // Заголовок

        // Переключение активного состояния в навигации
        listItems.forEach(item => {
            item.addEventListener('click', function (event) {
                event.preventDefault(); // Отключение стандартного поведения ссылки

                try {
                    // Удаляем класс active у всех элементов
                    listItems.forEach(link => {
                        link.parentElement.classList.remove('active');
                    });

                    // Добавляем класс active к текущему элементу
                    this.parentElement.classList.add('active');

                    // Загружаем соответствующий контент
                    const page = this.getAttribute('data-page');
                    loadContent(page);

                    // Скрываем заголовок при навигации
                    if (headerElement) {
                        headerElement.style.display = 'none';
                    }

                } catch (error) {
                    console.error("Ошибка при переключении навигации:", error);
                }
            });
        });

        // Функция для загрузки контента
        function loadContent(page) {
            try {
                let url = '/';
                if (page === 'menu') {
                    url = '/second';  // Путь к файлу меню
                } else if (page === 'register') {
                    url = '/register';  // Путь к файлу регистрации
                } else if (page === 'cart') {
                    url = '/cart';  // Путь к файлу корзины
                }

                // Загружаем контент с помощью fetch
                fetch(url)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Ошибка загрузки контента: ${response.statusText}`);
                        }
                        return response.text();
                    })
                    .then(data => {
                        contentContainer.innerHTML = data;  // Обновляем динамический контент

                        // Если загружаем страницу меню, инициализируем добавление карточек
                        if (page === 'menu') {
                            loadCards();  // Загружаем карточки
                        }

                        // Если загружаем страницу корзины, загружаем cart.js
                        if (page === 'cart') {
                            loadCartScript();
                        }
                    })
                    .catch(error => {
                        console.error('Ошибка загрузки контента:', error);
                    });

            } catch (error) {
                console.error("Ошибка при загрузке контента:", error);
            }
        }

        // Функция для динамической загрузки cart.js
        function loadCartScript() {
            const script = document.createElement('script');
            script.src = '/js/cart.js';  // Путь к файлу cart.js
            script.onload = function() {
                initCart();  // Инициализация корзины после загрузки скрипта
            };
            script.onerror = function() {
                console.error('Ошибка загрузки cart.js');
            };
            document.body.appendChild(script);
        }

    } catch (error) {
        console.error("Ошибка при инициализации страницы:", error);
    }
});




