module.exports = {
    "type": 'postgres',
    "host": 'localhost',
    "port": 5432,
    "username": 'postgres',
    "password": 'docker',
    "database": 'postgres',
    "entities": ['dist/**/*.entity.js'],
    "migrations": [
        "./dist/shared/infra/typeorm/migrations/*.js"
      ],
      "cli": {
        "migrationsDir": "./dist/shared/infra/typeorm/migrations"
      }
  }