# Strapi application

A boilerplate for Strapi application

## Features

* use `prettier` as __Formatter__
* use `eslint` as __Linter__
* use `MongoDB` as __Database__
* support `pm2` as __Process manager__
* support `docker` as __Container__
* disable telemetry and tutorial videos

## Getting Started

define `.env` file at root of project or directly set environment variables.

configuring your MongoDB service and its environment variables before running strapi.

```sh
# For Development
npm run dev;
npm run debug;

# For Production
npm run build;
npm run start;

# For Docker
docker-compose up;
# For pm2
pm2 start ecosystem.config.js;
```

## Requirements

* NodeJS >= 10.16 <=14
* MongoDB>= 3.6

## License

[MIT License](/LICENSE)
