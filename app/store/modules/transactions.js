import { getDbInstance } from '~/database/index';
import Repository from '~/database/repository/transactions';

const state = {
  databaseName: 'transactions.db',
  loaded: false,
  items: [],
  dates: [],
};

const mutations = {
  loadDb(state) {
    state.loaded = true;
  },
  save(state, transaction) {
    state.items = [...state.items, transaction];
  },
  loadAll(state, transactions) {
    state.items = [...transactions];
  },
  loadDates(state, dates) {
    state.dates = [...dates];
  },
};

const actions = {
  async createTransactionsDb({ commit, state: { databaseName } }) {
    const db = await getDbInstance(databaseName);
    await Repository.createTable(db);
    commit('loadDb');
  },
  async insert({ commit, state }, data) {
    const { databaseName } = state;
    const db = await getDbInstance(databaseName);
    try {
      const transaction = await Repository.insert(db, data);
      if (transaction) {
        commit('save', transaction);
      }
    } catch (error) {
      console.log(error);
    }
  },
  async findAll({ commit, state }) {
    const { databaseName } = state;
    const db = await getDbInstance(databaseName);
    try {
      const transactions = await Repository.findAll(db);
      commit('loadAll', transactions);
    } catch (error) {
      console.log(error);
    }
  },
  async findAllDates({ commit, state }) {
    const { databaseName } = state;
    const db = await getDbInstance(databaseName);
    try {
      const dates = await Repository.findAllDates(db);
      commit('loadDates', dates);
    } catch (error) {
      console.log(error);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
