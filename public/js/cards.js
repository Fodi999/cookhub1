function loadCards() {
    console.log('Загрузка карточек началась');

    const sushiCards = [
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Сет Лосось', price: '1000₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Сет Лосось', price: '1000₽', imgSrc: '/images/Rectangle-3.webp' }
    ];

    const rollsCards = [
        { title: 'Ролл Калифорния', price: '400₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Сет Лосось', price: '1000₽', imgSrc: '/images/Rectangle-3.webp' }
    ];

    const setsCards = [
        { title: 'Сет Лосось', price: '1000₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Сет Лосось', price: '1000₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Сет Лосось', price: '1000₽', imgSrc: '/images/Rectangle-3.webp' }
    ];

    const snacksCards = [
        { title: 'Закуска Эдамаме', price: '200₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Сет Лосось', price: '1000₽', imgSrc: '/images/Rectangle-3.webp' }
    ];

    // Добавляем карточки в контейнеры
    addCardsToContainer(sushiCards, 'card-container-row-1');
    addCardsToContainer(rollsCards, 'card-container-row-2');
    addCardsToContainer(setsCards, 'card-container-row-3');
    addCardsToContainer(snacksCards, 'card-container-row-4');
}

// Функция для добавления карточек в соответствующий контейнер
function addCardsToContainer(cards, containerId) {
    const container = document.getElementById(containerId);

    // Проверяем, существует ли контейнер
    if (!container) {
        console.error(`Элемент с id "${containerId}" не найден.`);
        return;
    }

    cards.forEach(card => {
        console.log('Создание карточки:', card);
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
            <img src="${card.imgSrc}" alt="${card.title}">
            <h3 class="card-title">${card.title}</h3>
            <p class="card-price">${card.price}</p>
        `;
        container.appendChild(cardElement);
        console.log('Карточка добавлена в контейнер:', containerId);
    });
}
