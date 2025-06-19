// Baris ini HARUS ada di bagian paling atas file src/server.js Anda
const Hapi = require('@hapi/hapi');

const server = Hapi.server({
  port: 5000,
  host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
  routes: {
    cors: {
      origin: ['*'],
    },
  },
});

// Anda mungkin juga perlu menambahkan fungsi start server di sini
// Contoh:
const start = async () => {
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

start();