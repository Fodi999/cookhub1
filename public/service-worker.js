const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
  '/',
  '/css/style.css',
  '/manifest.json',
  '/images/android-chrome-192x192.png',  // Обновлённый путь к иконке
  '/images/android-chrome-512x512.png'   // Также проверь путь к другой иконке
];

// Устанавливаем service worker и кэшируем ресурсы
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return Promise.all(
          urlsToCache.map((url) => {
            return fetch(url)
              .then((response) => {
                if (!response.ok) {
                  throw new TypeError('Bad response status');
                }
                return cache.put(url, response);
              })
              .catch((error) => {
                console.error('Failed to cache:', url, error);
              });
          })
        );
      })
  );
});

// Обработка запросов
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;  // Возвращаем кэшированные ресурсы
        }
        return fetch(event.request);  // Если ресурс не закэширован, запрашиваем его
      })
  );
});

// Удаление старых кэшей
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});