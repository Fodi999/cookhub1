"use strict";

document.addEventListener('DOMContentLoaded', function () {
    try {
        const listItems = document.querySelectorAll('.navigation .list a');
        const registerModal = document.getElementById("registerModal");
        const menuModal = document.getElementById("menuModal");
        const openRegister = document.getElementById("openRegister");
        const openMenu = document.getElementById("openMenu");
        const homeIcon = document.querySelector('.list.active a'); // Иконка "Дом"

        // Функция для переключения активного состояния в навигации
        function setActiveNavItem(currentItem) {
            try {
                listItems.forEach(link => {
                    link.parentElement.classList.remove('active');
                });
                currentItem.parentElement.classList.add('active');
            } catch (error) {
                console.error("Ошибка при переключении активного элемента навигации:", error);
            }
        }

        // Функция для открытия модальных окон
        function openModal(modalToShow, modalToHide) {
            try {
                if (modalToShow) modalToShow.style.display = 'block';
                if (modalToHide) modalToHide.style.display = 'none';
            } catch (error) {
                console.error("Ошибка при открытии модального окна:", error);
            }
        }

        // Переключение активного состояния в навигации
        listItems.forEach(item => {
            item.addEventListener('click', function (event) {
                event.preventDefault(); // Отключение стандартного поведения ссылки
                setActiveNavItem(this); // Используем функцию для активации навигации
            });
        });

        // Открыть модальное окно регистрации
        if (openRegister && registerModal) {
            openRegister.onclick = function () {
                openModal(registerModal, menuModal);
            };
        }

        // Открыть модальное окно меню
        if (openMenu && menuModal) {
            openMenu.onclick = function () {
                openModal(menuModal, registerModal);
            };
        }

        // Закрытие модальных окон при нажатии на "Дом"
        if (homeIcon) {
            homeIcon.onclick = function (event) {
                event.preventDefault(); // Предотвращаем стандартное поведение ссылки
                openModal(null, registerModal); // Закрываем все модальные окна
                openModal(null, menuModal);
            };
        }

        // Закрытие модальных окон при клике вне их области
        window.onclick = function (event) {
            if (event.target === registerModal || event.target === menuModal) {
                openModal(null, event.target); // Закрываем модальное окно
            }
        };

    } catch (error) {
        console.error("Ошибка при инициализации DOMContentLoaded:", error);
    }
});
 