<template>
  <RadListView class="list-group" for="(transactionsPerDay, day) in history">
    <v-template name="header">
      <TransactionsResume :items="items" />
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
    items: {
      type: [Object],
      required: true,
    },
    dates: {
      type: [String],
      required: true,
    },
  },
  computed: {
    history() {
      return (
        this.dates &&
        this.items &&
        this.dates.map(date => {
          const itemsDate = this.items.filter(i => i.date === date);
          const total = Math.abs(
            itemsDate.reduce((prev, current) => prev + current.amount, 0)
          );
          return {
            date,
            total,
            items: itemsDate.map(item => ({
              name: item.description,
              value: item.amount,
              type: item.category,
            })),
          };
        })
      );
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
