"use strict";

// Функция для загрузки карточек
function loadCards() {
    try {
        console.log('Загрузка карточек началась');

        const categories = {
            sushi: [
                { title: 'Roluj Kalifornię', price: '400zl.', imgSrc: '/images/Rectangle-3.webp', description: 'Popularna rolka z krabem i awokado.' },
                { title: 'Setha Salmona', price: '100zl.', imgSrc: '/images/Rectangle-3.webp', description: 'Różnorodne rołki z łososiem.' },
                { title: 'Roluj Kalifornię', price: '400zl.', imgSrc: '/images/Rectangle-3.webp', description: 'Popularna rołka z krabem i awokado.' },
                { title: 'Setha Salmona', price: '100zl.', imgSrc: '/images/Rectangle-3.webp', description: 'Różnorodne rołki z łososiem' },
                { title: 'Roluj Kalifornię', price: '400zl.', imgSrc: '/images/Rectangle-3.webp', description: 'Popularna rołka z krabem i awokado' },
                { title: 'Setha Salmona', price: '100zl.', imgSrc: '/images/Rectangle-3.webp', description: 'Różnorodne rołki z łososiem' }
            ],
            rolls: [
                { title: 'Roluj Kalifornię', price: '400zl.', imgSrc: '/images/Rectangle-3.webp', description: 'Popularna rolka z krabem i awokado.' },
                { title: 'Setha Salmona', price: '100zl.', imgSrc: '/images/Rectangle-3.webp', description: 'Różnorodne rołki z łososiem.' },
                { title: 'Roluj Kalifornię', price: '400zl.', imgSrc: '/images/Rectangle-3.webp', description: 'Popularna rołka z krabem i awokado.' },
                { title: 'Setha Salmona', price: '100zl.', imgSrc: '/images/Rectangle-3.webp', description: 'Różnorodne rołki z łososiem' },
                { title: 'Roluj Kalifornię', price: '400zl.', imgSrc: '/images/Rectangle-3.webp', description: 'Popularna rołka z krabem i awokado' },
                { title: 'Setha Salmona', price: '100zl.', imgSrc: '/images/Rectangle-3.webp', description: 'Różnorodne rołki z łososiem' }
            ],
            sets: [
                { title: 'Roluj Kalifornię', price: '400zl.', imgSrc: '/images/Rectangle-3.webp', description: 'Popularna rolka z krabem i awokado.' },
                { title: 'Setha Salmona', price: '100zl.', imgSrc: '/images/Rectangle-3.webp', description: 'Różnorodne rołki z łososiem.' },
                { title: 'Roluj Kalifornię', price: '400zl.', imgSrc: '/images/Rectangle-3.webp', description: 'Popularna rołka z krabem i awokado.' },
                { title: 'Setha Salmona', price: '100zl.', imgSrc: '/images/Rectangle-3.webp', description: 'Różnorodne rołki z łososiem' },
                { title: 'Roluj Kalifornię', price: '400zl.', imgSrc: '/images/Rectangle-3.webp', description: 'Popularna rołka z krabem i awokado' },
                { title: 'Setha Salmona', price: '100zl.', imgSrc: '/images/Rectangle-3.webp', description: 'Różnorodne rołki z łososiem' }
            ],
            snacks: [
                { title: 'Roluj Kalifornię', price: '400zl.', imgSrc: '/images/Rectangle-3.webp', description: 'Popularna rolka z krabem i awokado.' },
                { title: 'Setha Salmona', price: '100zl.', imgSrc: '/images/Rectangle-3.webp', description: 'Różnorodne rołki z łososiem.' },
                { title: 'Roluj Kalifornię', price: '400zl.', imgSrc: '/images/Rectangle-3.webp', description: 'Popularna rołka z krabem i awokado.' },
                { title: 'Setha Salmona', price: '100zl.', imgSrc: '/images/Rectangle-3.webp', description: 'Różnorodne rołki z łososiem' },
                { title: 'Roluj Kalifornię', price: '400zl.', imgSrc: '/images/Rectangle-3.webp', description: 'Popularna rołka z krabem i awokado' },
                { title: 'Setha Salmona', price: '100zl.', imgSrc: '/images/Rectangle-3.webp', description: 'Różnorodne rołki z łososiem' }
            ]
        };

        // Добавляем карточки для каждой категории
        for (const [category, cards] of Object.entries(categories)) {
            const containerId = `card-container-row-${Object.keys(categories).indexOf(category) + 1}`;
            addCardsToContainer(cards, containerId);
        }

    } catch (error) {
        console.error('Ошибка при загрузке карточек:', error);
    }
}

// Функция для добавления карточек в соответствующий контейнер
function addCardsToContainer(cards, containerId) {
    try {
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
                <p class="card-description">${card.description}</p>
                <p class="card-price">${card.price}</p>
                <button class="card-button">Zamówienie</button>
            `;
            container.appendChild(cardElement);
            console.log('Карточка добавлена в контейнер:', containerId);
        });

    } catch (error) {
        console.error(`Ошибка при добавлении карточек в контейнер ${containerId}:`, error);
    }
}


