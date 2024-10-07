"use strict";

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cluster from 'cluster';
import os from 'os';

// Если это основной процесс, запускаем воркеры
if (cluster.isPrimary) {
    const numCPUs = os.cpus().length;
    console.log(`Запуск ${numCPUs} воркеров...`);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    // Перезапуск воркера, если он упал
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Воркер ${worker.process.pid} завершен`);
        cluster.fork(); // Запускаем новый воркер на замену
    });

} else {
    // Воркер обрабатывает запросы через общий сервер
    const app = express();
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // Настройка движка EJS
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));

    // Устанавливаем папку для статики
    app.use(express.static(path.join(__dirname, 'public')));

    // Подключаем встроенные middlewares для обработки форм
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    // Контроллеры
    const renderHomePage = (req, res, next) => {
        try {
            res.render('index', { isHomePage: true });
        } catch (err) {
            next(err);
        }
    };

    const renderSecondPage = (req, res, next) => {
        try {
            res.render('second', { isHomePage: false });
        } catch (err) {
            next(err);
        }
    };
    

    const renderProfilePage = (req, res, next) => {
        try {
            res.send('Это ваша страница профиля');
        } catch (err) {
            next(err);
        }
    };

    const renderLoginPage = (req, res, next) => {
        try {
            res.render('login', { isHomePage: false });
        } catch (err) {
            next(err);
        }
    };

    const renderRegisterPage = (req, res, next) => {
        try {
            res.render('register', { isHomePage: false });
        } catch (err) {
            next(err);
        }
    };

    const handleRegister = async (req, res, next) => {
        try {
            const { username, password } = req.body;
            console.log(`Зарегистрирован новый пользователь: ${username}`);
            res.redirect('/profile');
        } catch (err) {
            next(err);
        }
    };

    const handleLogin = async (req, res, next) => {
        try {
            const { uniqueKey } = req.body;
            console.log(`Попытка входа с уникальным ключом: ${uniqueKey}`);
            res.redirect('/profile');
        } catch (err) {
            next(err);
        }
    };
    const renderCartPage = (req, res, next) => {
        try {
            res.render('cart', { isHomePage: false });
        } catch (err) {
            next(err);
        }
    };
    
    app.get('/cart', renderCartPage);
    

    // Маршруты
    app.get('/', renderHomePage);
    app.get('/second', renderSecondPage);
    app.get('/profile', renderProfilePage);
    app.get('/login', renderLoginPage);
    app.get('/register', renderRegisterPage);

    app.post('/register', handleRegister);
    app.post('/login', handleLogin);

    // Глобальный обработчик ошибок
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Что-то пошло не так!');
    });

    // Обработка неперехваченных исключений
    process.on('uncaughtException', (err) => {
        console.error('Uncaught Exception:', err);
    });

    process.on('unhandledRejection', (reason, promise) => {
        console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    });

    // Запуск сервера, но каждый воркер использует общий порт
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        if (cluster.isWorker && cluster.worker.id === 1) {
            const url = `http://localhost:${PORT}`;
            console.log(`Воркер ${process.pid} обрабатывает запросы на порту ${PORT}`);
            console.log(`Откройте в браузере: ${url}`);
        } else {
            console.log(`Воркер ${process.pid} обрабатывает запросы на порту ${PORT}`);
        }
    });
}




 

 