document.addEventListener('DOMContentLoaded', function() {
    const registerModal = document.getElementById("registerModal");
    const menuModal = document.getElementById("menuModal");
    const closeRegister = document.getElementById("closeRegister");
    

    const openRegister = document.getElementById("openRegister");
    const openMenu = document.getElementById("openMenu");

    // Иконка "Дом"
    const homeIcon = document.querySelector('.list.active a'); // Ищем активный элемент навигации, где "Дом"

    // Открыть модальное окно регистрации
    if (openRegister && registerModal) {
        openRegister.onclick = function() {
            registerModal.style.display = 'block';
        };
    }

    // Открыть модальное окно меню
    if (openMenu && menuModal) {
        openMenu.onclick = function() {
            menuModal.style.display = 'block';
        };
    }

    // Закрытие модальных окон при нажатии на "Дом"
    if (homeIcon) {
        homeIcon.onclick = function() {
            if (registerModal.style.display === 'block') {
                registerModal.style.display = "none";
            }
            if (menuModal.style.display === 'block') {
                menuModal.style.display = "none";
            }
        };
    }

    // Закрытие модальных окон при клике вне их области
    window.onclick = function(event) {
        if (event.target == registerModal) {
            registerModal.style.display = "none";
        } else if (event.target == menuModal) {
            menuModal.style.display = "none";
        }
    };
});









 