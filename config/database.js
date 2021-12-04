const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL") || 'postgres://postgres:test1423@localhost:5432/artiapp');
  const isProd = process.env.NODE_ENV === "production";

  return {
    connection: {
      client: 'postgres',
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl:  isProd? { rejectUnauthorized: false }: false,
      },
      debug: false,
    },
  };
};

// Use this configuration for an SQLite database on your machine.
// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'sqlite',
//         filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });
