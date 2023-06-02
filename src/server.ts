import app from './app.js';

const port = process.env.PORT ?? 8080;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log('Server listening on http://localhost:' + port);
});
