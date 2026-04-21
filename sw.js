const cacheName = "portfolio-v1";

const filesToCache = [
  "/",
  "/index.html",
  "/qualification.html",
  "/skills.html",
  "/css/main.css"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});