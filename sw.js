const CACHE = "forge-cache-v7";
const ASSETS = [
  "./", "./index.html", "./style.css", "./app.js", "./chart.min.js", "./workout-plan.js", "./manifest.json",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-maskable-512.png",
  "./characters/luffy.jpg", "./characters/zoro.jpg", "./characters/nami.jpg", "./characters/usopp.jpg",
  "./characters/sanji.jpg", "./characters/chopper.jpg", "./characters/robin.jpg", "./characters/franky.jpg",
  "./characters/brook.jpg", "./characters/jinbe.jpg", "./characters/shanks.jpg", "./characters/garp.jpg",
  "./characters/bg-home.jpg", "./characters/banner-crew.jpg"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then((cached) => {
      const fetchPromise = fetch(e.request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy));
          return res;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })
  );
});

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({ type: "window" }).then((clients) => {
      for (const c of clients) {
        if ("focus" in c) return c.focus();
      }
      if (self.clients.openWindow) return self.clients.openWindow("./index.html");
    })
  );
});
