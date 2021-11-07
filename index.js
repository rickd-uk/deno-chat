addEventListener('fetch', (event) => {
  const response = new Response('Hello Wonderful World!', {
    headers: { 'content-type': 'text/plain' },
  })
  event.respondWith(response)
})
