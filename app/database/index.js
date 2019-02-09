import Sqlite from 'nativescript-sqlite';

const dbInstances = {};

export const getDbInstance = async dbName => {
  if (!dbInstances[dbName]) {
    dbInstances[dbName] = await loadDatabase(dbName);
  }
  return dbInstances[dbName];
};

const loadDatabase = async dbName => await new Sqlite(dbName);
