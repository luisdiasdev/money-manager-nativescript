<template>
  <RadListView class="list-group" for="(transactionsPerDay, day) in history">
    <v-template name="header">
      <TransactionsResume />
    </v-template>
    <v-template>
      <TransactionList :transactions="transactionsPerDay" />
    </v-template>
  </RadListView>
</template>

<script>
import TransactionList from '~/components/transaction/TransactionList';
import TransactionsResume from '~/components/transaction/TransactionsResume';

export default {
  components: { TransactionList, TransactionsResume },
  props: {
    history: {
      type: [Object],
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.quick-info {
  border-color: rgba(228, 228, 228, 0.822);
  border-width: 1 1 1 1;
  padding: 16 16;
  margin-bottom: 4;
}
</style>
