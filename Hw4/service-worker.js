const cacheName = 'pwa-cache';
const filesToCache = [
  '/',
  'index.html',
  'styles.css',
  'manifest.webmanifest',
  'icon.png',
  'images/lightblue.jpg',
  'images/lightgold.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
// JavaScript Document