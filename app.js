const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

// Устанавливаем папку для статики
app.use(express.static(path.join(__dirname, 'public')));

// Подключаем bodyParser для работы с формами
app.use(bodyParser.urlencoded({ extended: true }));

// Настройка движка EJS
app.set('view engine', 'ejs');

// Маршрут для главной страницы
app.get('/', (req, res) => {
    res.render('index', { isHomePage: true });  // Передаем флаг для главной страницы
});

// Маршрут для второй страницы (меню)
app.get('/second', (req, res) => {
    res.render('second', { isHomePage: false });  // Передаем флаг для других страниц
});

// Маршрут для страницы входа
app.get('/login', (req, res) => {
    res.render('login', { isHomePage: false });  // Передаем флаг для других страниц
});

// Маршрут для страницы регистрации
app.get('/register', (req, res) => {
    res.render('register', { isHomePage: false });  // Передаем флаг для других страниц
});

// Обработка POST-запроса для регистрации
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Здесь вы можете добавить логику для сохранения пользователя в базу данных
    console.log(`Зарегистрирован новый пользователь: ${username}`);
    res.redirect('/profile');  // После регистрации перенаправляем на страницу профиля
});

// Обработка POST-запроса для входа
app.post('/login', (req, res) => {
    const { uniqueKey } = req.body;
    // Логика аутентификации пользователя
    console.log(`Попытка входа с уникальным ключом: ${uniqueKey}`);
    res.redirect('/profile');  // После входа перенаправляем на страницу профиля
});

// Маршрут для страницы профиля (заглушка)
app.get('/profile', (req, res) => {
    res.send('Это ваша страница профиля');  // Здесь может быть страница профиля пользователя
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
    console.log(`Откройте в браузере: http://localhost:${PORT}`);
});
 