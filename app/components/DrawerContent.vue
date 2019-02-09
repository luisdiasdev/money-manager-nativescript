<template lang="html">
  <ScrollView>
    <StackLayout width="100%">
      <Label class="drawer-header" text="Luis Gustavo" />

      <StackLayout v-for="(page, i) in pages" :key="i" width="100%" height="50">
        <StackLayout orientation="horizontal" class="drawer-line">
          <FontIcon
            class="drawer-item-icon"
            type="mdi"
            :name="page.icon"
            color="grey"
            size="28"
          />
          <Label
            class="drawer-item"
            :text="page.name"
            @tap="goToPage(page.component)"
          />
        </StackLayout>
      </StackLayout>
    </StackLayout>
  </ScrollView>
</template>

<script>
import sideDrawer from '~/mixins/sideDrawer';
export default {
  mixins: [sideDrawer],
  data() {
    return {
      pages: [
        {
          name: 'Gráfico',
          icon: 'mdi-chart-pie',
          component: this.$routes.Home,
          divider: true,
        },
        {
          name: 'Categorias',
          icon: 'mdi-table-of-contents',
          component: this.$routes.Home,
        },
        {
          name: 'Exportação',
          icon: 'mdi-export',
          component: this.$routes.Home,
        },
        {
          name: 'Configurações',
          icon: 'mdi-settings',
          component: this.$routes.Home,
        },
        {
          name: 'Sobre',
          icon: 'mdi-information-outline',
          component: this.$routes.Home,
        },
      ],
    };
  },
  methods: {
    goToPage(pageComponent) {
      this.$navigateTo(pageComponent);
      this.closeDrawer();
    },
  },
};
</script>

<style lang="scss">
.drawer-header {
  padding: 80 16 25 16;
  margin-bottom: 4;
  background-color: #333333;
  color: #ffffff;
  font-size: 16;
}

.drawer-item {
  color: #333333;
  font-size: 16;
  font-weight: bold;
  padding: 4 8;
  margin-left: 20;
}

.drawer-item-icon {
  margin-left: 20;
  margin-right: 8;
}

.drawer-line {
  padding-bottom: 4;
  padding-top: 4;
}
</style>
