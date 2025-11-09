self.addEventListener('install', e => {
  console.log('Service Worker installed');
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  console.log('Service Worker aktif');
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow('/'));
});
