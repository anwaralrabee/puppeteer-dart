self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});

self.addEventListener('activate', event => {
  event.wait(clients.claim());
});
