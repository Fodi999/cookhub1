"use strict";

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        try {
            navigator.serviceWorker.register('/service-worker.js')
                .then(function(registration) {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                })
                .catch(function(error) {
                    console.error('ServiceWorker registration failed: ', error);
                });
        } catch (error) {
            console.error('Ошибка при попытке регистрации ServiceWorker:', error);
        }
    });
} else {
    console.warn('ServiceWorker не поддерживается данным браузером.');
}


   