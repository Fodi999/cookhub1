document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.navigation .list a');
    const registerModal = document.getElementById("registerModal");
    const menuModal = document.getElementById("menuModal");
    const openRegister = document.getElementById("openRegister");
    const openMenu = document.getElementById("openMenu");
    const homeIcon = document.querySelector('.list.active a'); // Иконка "Дом"
    
    // Переключение активного состояния в навигации
    listItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Отключение стандартного поведения ссылки

            // Удаляем класс active у всех элементов
            listItems.forEach(link => {
                link.parentElement.classList.remove('active');
            });

            // Добавляем класс active к текущему элементу
            this.parentElement.classList.add('active');
        });
    });

    // Открыть модальное окно регистрации
    if (openRegister && registerModal) {
        openRegister.onclick = function() {
            registerModal.style.display = 'block';
            menuModal.style.display = 'none'; // Закрываем другое модальное окно, если оно открыто
        };
    }

    // Открыть модальное окно меню
    if (openMenu && menuModal) {
        openMenu.onclick = function() {
            menuModal.style.display = 'block';
            registerModal.style.display = 'none'; // Закрываем другое модальное окно, если оно открыто
        };
    }

    // Закрытие модальных окон при нажатии на "Дом"
    if (homeIcon) {
        homeIcon.onclick = function(event) {
            event.preventDefault(); // Предотвращаем стандартное поведение ссылки

            if (registerModal) {
                registerModal.style.display = "none";
            }
            if (menuModal) {
                menuModal.style.display = "none";
            }
        };
    }

    // Закрытие модальных окон при клике вне их области
    window.onclick = function(event) {
        if (event.target === registerModal) {
            registerModal.style.display = "none";
        } else if (event.target === menuModal) {
            menuModal.style.display = "none";
        }
    };
});