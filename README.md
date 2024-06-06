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
3. Setup the database:
   ```bash
   npm run migrate_db
   npm run seed_db
   npm run execute_sql
   ```

## Usage

To extract entities from a search term, use the following function:

```bash
npm start
```

Then enter the search term
