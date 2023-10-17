require('dotenv').config();

module.exports = {
  development: {
    client: process.env.NODE_DB_CLIENT,
    connection: process.env.NODE_DB_CONNECTION ? process.env.NODE_DB_CONNECTION : { filename: process.env.NODE_DB_FILENAME },
    migrations: { directory: './src/database/migrations' },
    useNullAsDefault: true,
  },

  staging: {
    client: process.env.NODE_DB_CLIENT,
    connection: process.env.NODE_DB_CONNECTION ? process.env.NODE_DB_CONNECTION : { filename: process.env.NODE_DB_FILENAME },
    migrations: { directory: './src/database/migrations' },
    useNullAsDefault: true,
  },

  production: {
    client: process.env.NODE_DB_CLIENT,
    connection: process.env.NODE_DB_CONNECTION ? process.env.NODE_DB_CONNECTION : { filename: process.env.NODE_DB_FILENAME },
    migrations: { directory: './src/database/migrations' },
    useNullAsDefault: true,
  }
};

// module.exports = {
//   development: {
//     client: 'sqlite3',
//     connection: { filename: './src/database/sqlite.db' },
//     migrations: { directory: './src/database/migrations' },
//     useNullAsDefault: true,
//   },
//   staging: {
//     client: 'sqlite3',
//     connection: { filename: './src/database/sqlite.db' },
//     migrations: { directory: './src/database/migrations' },
//     useNullAsDefault: true,
//   },

//   production: {
//     client: 'sqlite3',
//     connection: { filename: './src/database/sqlite.db' },
//     migrations: { directory: './src/database/migrations' },
//     useNullAsDefault: true,
//   }
// };
