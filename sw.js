self.addEventListener('install', () => {
  console.log('Service Worker terpasang');
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  console.log('Service Worker aktif');
});

setInterval(async () => {
  const allClients = await self.clients.matchAll({ includeUncontrolled: true });
  if (!allClients.length) return; // pastikan ada tab aktif

  const reminderTime = await allClients[0].postMessage({ type: 'GET_REMINDER' });
}, 60000);
