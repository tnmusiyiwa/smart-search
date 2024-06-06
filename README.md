# Entity Extraction Algorithm

## Setup

1. Install dependencies:
    ```bash
    npm install
    ```

2. Create a `.env` file in the root directory of the project and add your database configuration:
    ```
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
    DB_NAME=your_database_name
    ```

3. Enable the `pg_trgm` extension in your PostgreSQL database:
    ```sql
    CREATE EXTENSION IF NOT EXISTS pg_trgm;
    ```

4. Setup the database:
    ```bash
    npx knex migrate:latest
    npx knex seed:run
    ```

## Usage

To extract entities from a search term, use the following function:

```javascript
const { extractEntities } = require('./extractEntities');

extractEntities('McDonald\'s in London').then(result => {
  console.log(result);
});