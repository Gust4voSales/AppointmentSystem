// REMEMBER: If you want to execute yarn start and you're not in production, then set NODE_ENV to 'production' manually
const rootDir = process.env.NODE_ENV === 'production' ? './dist/src' : './src' 

module.exports = {
  "type": "postgres",
  // "host": "localhost", // NOT NECESSARY, ALREADY IN THE URL
  // "port": 5432, // NOT NECESSARY, ALREADY IN THE URL
  // "username": "postgres_user", // NOT NECESSARY, ALREADY IN THE URL
  // "password": "postgres_secret_password", // NOT NECESSARY, ALREADY IN THE URL
  // "database": "postgres_database_name", // NOT NECESSARY, ALREADY IN THE URL

  /* url contaims all necessary fields to connect to the DB server, the url looks like this: 
    postgres://<username>:<password>@<host>:<port>/<database> */
  "url": process.env.DATABASE_URL, // Example: postgres://postgres_user:postgres_secret_password@localhost:5432/postgres_database_name */
  "logging": true,
  "entities": [
    rootDir + "/models/**/*.{js,ts}",
  ],
  "migrations": [
    rootDir + "/database/migrations/**/*.{js,ts}",
  ],
  "cli": {
    "migrationsDir": rootDir + "/database/migrations",
    "entitiesDir": rootDir + "/models"
  }
}