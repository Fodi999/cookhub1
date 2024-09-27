document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.navigation .list');

    // Добавляем слушатель клика на каждый элемент
    listItems.forEach(item => {
        item.addEventListener('click', function() {
            // Удаляем активный класс у всех
            listItems.forEach(i => i.classList.remove('active'));

            // Добавляем активный класс текущему элементу
            this.classList.add('active');
        });
    });
});





 