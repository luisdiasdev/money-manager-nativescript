import { getDbInstance } from '~/database/index';

const state = {
  databaseName: 'transactions.db',
  loaded: false,
  items: [],
};

const mutations = {
  loadDb(state) {
    state.loaded = true;
  },
  save(state, data) {
    state.data = {
      ...state.items,
      data,
    };
  },
  load(state, data) {
    state.data = {
      ...state.items,
      ...data,
    };
  },
};
// TODO: Improve methods names
const actions = {
  async create({ commit, state: { databaseName } }) {
    const db = await getDbInstance(databaseName);
    await db.execSQL(`
            CREATE TABLE IF NOT EXISTS transactions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                description TEXT,
                value REAL)`);
    commit('loadDb');
  },
  async insert({ commit, state }, data) {
    const { databaseName } = state;
    const db = await getDbInstance(databaseName);
    const result = await db.execSQL(
      `INSERT INTO transactions (description, value) VALUES (?, ?)`,
      [data.description, data.value]
    );
    commit('save', result);
  },
  async findAll({ commit, state }) {
    const { databaseName } = state;
    const db = await getDbInstance(databaseName);
    try {
      const result = await db.all(
        `SELECT id, description, value FROM transactions`,
        []
      );
      console.log('resultado do banco: ', result);
      commit('load', result);
    } catch (error) {
      console.log(error);
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
