const CACHE_NAME = 'pwa-cache-v1';  
const urlsToCache = [
  '/',
  '/css/style.css',
  '/images/apple-touch-icon.png',
  '/images/favicon-32x32.png',
  '/images/favicon-16x16.png',
  '/images/android-chrome-192x192.png',
  '/images/android-chrome-512x512.png',
  '/images/safari-pinned-tab.svg',
  '/images/Rectangle-3.webp'
];

// Устанавливаем service worker и кэшируем ресурсы
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error('Failed to cache resources:', error);
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
      .catch((error) => {
        console.error('Fetch failed:', error);
        throw error;
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
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});



 