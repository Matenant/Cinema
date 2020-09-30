const cacheName = "site-cache";

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(
                [
                    '/images/icons/cinema-128x128.png',
                    '/images/icons/cinema-144x144.png',
                    '/images/icons/cinema-512x512.png',
                    'index.html',
                    'liste.js',
                    'style.css'
                ]
            );
        })
    );
});