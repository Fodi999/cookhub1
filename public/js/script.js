document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.navigation .list a');

    // Проверяем, есть ли сохранённый индекс активного элемента в localStorage
    const activeIndex = localStorage.getItem('activeIndex');

    // Если активный элемент сохранён, устанавливаем активный класс
    if (activeIndex !== null) {
        listItems[activeIndex].parentElement.classList.add('active');
    }

    // Добавляем слушатель клика на каждый элемент
    listItems.forEach((item, index) => {
        item.addEventListener('click', function(event) {
            // Сохраняем индекс активного элемента в localStorage перед переходом
            localStorage.setItem('activeIndex', index);

            // Удаляем активный класс у всех элементов
            listItems.forEach(i => i.parentElement.classList.remove('active'));

            // Добавляем активный класс текущему элементу
            this.parentElement.classList.add('active');

            // Переход на новую страницу после сохранения индекса
            event.preventDefault();  // Останавливаем стандартное поведение ссылки
            window.location.href = this.href;  // Переходим по URL вручную
        });
    });
});







 