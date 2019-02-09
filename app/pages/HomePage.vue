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
import DefaultActionBar from '~/components/common/DefaultActionBar';
import TransactionHistory from '~/components/transaction/TransactionHistory';
import sideDrawer from '~/mixins/sideDrawer';

export default {
  components: {
    DefaultActionBar,
    TransactionHistory,
  },
  mixins: [sideDrawer],
  data() {
    return {
      itemsPorDia: [
        {
          date: '29/01/2019',
          total: 842.3,
          items: [
            { name: 'Pedágio', value: 10.5, type: 'expense' },
            { name: 'Pedágio', value: 15.5, type: 'expense' },
            { name: 'Pedágio', value: 10.5, type: 'expense' },
            { name: 'Pedágio', value: 155.5, type: 'expense' },
          ],
        },
        {
          date: '28/01/2019',
          total: 842.3,
          items: [
            { name: 'Pedágio', value: 10.5, type: 'expense' },
            { name: 'Pedágio', value: 155.5, type: 'expense' },
            { name: 'Pedágio', value: 10.5, type: 'expense' },
            { name: 'Pedágio', value: 155.5, type: 'expense' },
          ],
        },
        {
          date: '27/01/2019',
          total: 842.3,
          items: [
            { name: 'Pedágio', value: 10.5, type: 'expense' },
            { name: 'Pedágio', value: 155.5, type: 'expense' },
            { name: 'Pedágio', value: 10.5, type: 'expense' },
            { name: 'Pedágio', value: 155.5, type: 'expense' },
          ],
        },
      ],
    };
  },
  methods: {
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
