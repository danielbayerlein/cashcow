import honeycombServer from 'honeycomb-server';
import path from 'path';
import pkg from '../../package.json';

honeycombServer
  .start({
    plugins: [
      { module: 'inert' },
      { module: 'honeycomb-logging-middleware' },
      { module: 'honeycomb-health-middleware' },
      { module: 'honeycomb-status-middleware' },
      {
        module: 'honeycomb-info-middleware',
        options: { pkg, process },
      },
    ],
  })
  .then((server) => {
    server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          path: path.resolve(__dirname, '..', 'client'),
        },
      },
    });
  })
  .catch((error) => {
    console.error('Error:', error); // eslint-disable-line no-console
  });
