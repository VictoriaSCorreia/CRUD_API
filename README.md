<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<div align="center">
  <h2> NESTJS </h2>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
  <a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
</div>

<div>

## Languages

```Javascript```  ```Typescript```
</div>

## CRUD

Task Management API (to-do) :
* Create a new task with the fields : 

      1 - title
      2 - description
      3 - dueDate

* Read all the tasks list

* Update a task and any of its fields

* Delete a task


## Installation

```bash
$ npm install
```

## Running the app

### Via Docker

Requirements: Docker and docker-compose must be installed on your machine.
```bash
docker-compose up --build
```
This will start on MySQL container and start the application which will be running on port 3000

### Local Environment

To run the application locally, you must have a MySQL instance installed on your machine and provide the connection parameters in the `database.providers.ts` file

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
