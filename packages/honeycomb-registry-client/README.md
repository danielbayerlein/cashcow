# honeycomb-registry-client

> Service registry client for Honeycomb

## Installation

```bash
npm install --save honeycomb-registry-client
```

## Usage

```javascript
const honeycombRegistryClient = require('honeycomb-registry-client');

honeycombRegistryClient.register(
  'test',      // Name
  '127.0.0.1', // Host
  3000         // Port
);
```

## License

Copyright (c) 2016-2017 Daniel Bayerlein. See [LICENSE](../../LICENSE.md) for details.
