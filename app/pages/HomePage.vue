<template>
  <Page class="page">
    <DefaultActionBar />
    <GridLayout ~mainContent rows="*" columns="*" class="content-wrapper">
      <TransactionHistory :history="itemsPorDia" />
      <FloatingActionButton
        icon="res://ic_add_white"
        rippleColor="#f1f1f1"
        class="fab-button"
        @tap="tapFab"
      />
    </GridLayout>
  </Page>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import DefaultActionBar from '~/components/common/DefaultActionBar';
import TransactionHistory from '~/components/transaction/TransactionHistory';
import sideDrawer from '~/mixins/sideDrawer';
import Transaction from '~/model/Transaction';

const { mapState, mapActions } = createNamespacedHelpers('transactions');

export default {
  components: {
    DefaultActionBar,
    TransactionHistory,
  },
  mixins: [sideDrawer],
  computed: {
    ...mapState({
      items: state => state.items,
      dates: state => state.dates,
    }),
    itemsPorDia() {
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
  async mounted() {
    await this.createTransactionsDb();
    await this.insert(
      new Transaction('expense', 'Pedágio', -10.5, '29/01/2019')
    );
    await this.findAll();
    await this.findAllDates();
  },
  methods: {
    ...mapActions([
      'createTransactionsDb',
      'insert',
      'findAll',
      'findAllDates',
    ]),
    goToPage(pageComponent) {
      this.$navigateTo(pageComponent);
      this.closeDrawer();
    },
    tapFab() {
      this.goToPage(this.$routes.AddTransactionPage);
    },
  },
};
</script>

<style scoped lang="scss">
.fab-button {
  height: 70;
  width: 70;
  margin: 15;
  background-color: rgb(223, 192, 21);
  horizontal-align: right;
  vertical-align: bottom;
}

.content-wrapper {
  margin: 10 10;
}
</style>
