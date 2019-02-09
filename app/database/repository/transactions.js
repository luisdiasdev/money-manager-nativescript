import Transaction from '~/model/Transaction';

const SQL = {
  CREATE_TABLE: `
    CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        category TEXT,
        description TEXT,
        amount REAL,
        date TEXT)`,
  INSERT: `INSERT INTO transactions (category, description, amount, date) VALUES (?, ?, ?, ?)`,
  FIND_ALL: `SELECT id, category, description, amount, date FROM transactions`,
  FIND_ALL_DATES: `SELECT DISTINCT date FROM transactions`,
};

const createTable = async db => await db.execSQL(SQL.CREATE_TABLE);

const insert = async (db, transaction) => {
  const result = await db.execSQL(SQL.INSERT, transaction.toArray());
  if (result > 0) {
    transaction.id = result;
  }
  return transaction.id && transaction;
};

const findAll = async db => {
  const result = await db.all(SQL.FIND_ALL, []);
  return result.map(row => Transaction.fromRow(row));
};

const findAllDates = async db => {
  const result = await db.all(SQL.FIND_ALL_DATES, []);
  return result.map(row => row[0]);
};

export default {
  createTable,
  insert,
  findAll,
  findAllDates,
};
