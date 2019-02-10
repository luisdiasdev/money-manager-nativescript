<template>
  <Page class="page">
    <DefaultActionBar />
    <GridLayout ~mainContent rows="*" columns="*" class="content-wrapper">
      <TransactionHistory :items="items" :dates="dates" />
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
  },
  async mounted() {
    await this.createTransactionsDb();
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
    goToPage(pageComponent, navigateOptions) {
      this.$navigateTo(pageComponent, navigateOptions);
      this.closeDrawer();
    },
    tapFab() {
      this.goToPage(this.$routes.AddTransactionPage, {
        animated: true,
        transition: {
          name: 'slideLeft',
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/common';

.fab-button {
  height: 70;
  width: 70;
  margin: 15;
  background-color: $accent;
  horizontal-align: right;
  vertical-align: bottom;
}

.content-wrapper {
  margin: 10 10;
}
</style>
