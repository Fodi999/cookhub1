document.addEventListener('DOMContentLoaded', () => {
    const sushiCards = [
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
    ];
    

    const rollsCards = [
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
    ];

    const setsCards = [
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
    ];

    const snacksCards = [
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-3.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Лосось', price: '250₽', imgSrc: '/images/Rectangle-22.webp' },
        { title: 'Суши Тунец', price: '300₽', imgSrc: '/images/Rectangle-22.webp' },
    ];

    addCardsToContainer(sushiCards, 'card-container-row-1');
    addCardsToContainer(rollsCards, 'card-container-row-2');
    addCardsToContainer(setsCards, 'card-container-row-3');
    addCardsToContainer(snacksCards, 'card-container-row-4');
});

function addCardsToContainer(cards, containerId) {
    const container = document.getElementById(containerId);
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
            <img src="${card.imgSrc}" alt="${card.title}">
            <h3 class="card-title">${card.title}</h3>
            <p class="card-price">${card.price}</p>
        `;
        container.appendChild(cardElement);
    });
}
