self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('timer-app').then(function(cache) {
      return cache.addAll([
        'Workout_Timer_Mobile_App_Like.html',
        'manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
