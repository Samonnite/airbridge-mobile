<template>
  <q-layout view="lHh Lpr lFf" style="background: #1a1e26">
    <q-header elevated style="background: #1a1e26">
      <q-toolbar>
        <q-btn round dense class="q-mr-sm q-mt-xs" size="lg">自选</q-btn>
        <q-btn round dense class="q-mr-sm flb" style="color: #616161"
          >外汇</q-btn
        >
        <q-btn round dense class="q-mr-sm flb" style="color: #616161"
          >数字货币</q-btn
        >
        <q-btn round dense class="q-mr-sm flb" style="color: #616161"
          >期权合约</q-btn
        >
        <q-toolbar-title></q-toolbar-title>
        <q-btn flat round dense icon="search" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <div class="q-pa-md q-gutter-sm">
        <q-btn
          style="background: #17b978; color: white"
          label="全部"
          rounded
          size="sm"
        />
        <q-btn outline style="color: #616161" label="外汇" rounded size="sm" />
        <q-btn
          outline
          style="color: #616161"
          label="数字货币"
          rounded
          size="sm"
        />
        <q-btn
          outline
          style="color: #616161"
          label="期权合约"
          rounded
          size="sm"
        />
      </div>
      <q-markup-table flat dark style="background: #1a1e26">
        <thead>
          <tr>
            <th class="text-left">交易品种</th>
            <th class="text-right">买价</th>
            <th class="text-right">卖价</th>
            <th class="text-right">涨跌幅</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">
              <div class="row items-center">
                <q-avatar
                  size="28px"
                  color="primary"
                  text-color="white"
                  class="q-mr-sm"
                >
                  <img src="../assets/favicon.png"
                /></q-avatar>
                <div>
                  <div>BTCUSD</div>
                  <div class="text-616161">14:12:15</div>
                </div>
              </div>
            </td>
            <td class="text-right">159</td>
            <td class="text-right">6</td>
            <td class="text-right">24</td>
          </tr>
          <tr>
            <td class="text-left">
              <div class="row items-center">
                <q-avatar
                  size="28px"
                  color="primary"
                  text-color="white"
                  class="q-mr-sm"
                >
                  <img src="../assets/favicon.png"
                /></q-avatar>
                <div>
                  <div>EURUSD</div>
                  <div class="text-616161">14:12:15</div>
                </div>
              </div>
            </td>
            <td class="text-right">237</td>
            <td class="text-right">9</td>
            <td class="text-right">37</td>
          </tr>
          <tr>
            <td class="text-left">
              <div class="row items-center">
                <q-avatar
                  size="28px"
                  color="primary"
                  text-color="white"
                  class="q-mr-sm"
                >
                  <img src="../assets/favicon.png"
                /></q-avatar>
                <div>
                  <div>GBPUSD</div>
                  <div class="text-616161">14:12:15</div>
                </div>
              </div>
            </td>
            <td class="text-right">262</td>
            <td class="text-right">16</td>
            <td class="text-right">23</td>
          </tr>
          <tr>
            <td class="text-left">
              <div class="row items-center">
                <q-avatar
                  size="28px"
                  color="primary"
                  text-color="white"
                  class="q-mr-sm"
                >
                  <img src="../assets/favicon.png"
                /></q-avatar>
                <div>
                  <div>USDGPY</div>
                  <div class="text-616161">14:12:15</div>
                </div>
              </div>
            </td>
            <td class="text-right">305</td>
            <td class="text-right">3.7</td>
            <td class="text-right">67</td>
          </tr>
          <tr>
            <td class="text-left">
              <div class="row items-center">
                <q-avatar
                  size="28px"
                  color="primary"
                  text-color="white"
                  class="q-mr-sm"
                >
                  <img src="../assets/favicon.png"
                /></q-avatar>
                <div>
                  <div>ETHUSD</div>
                  <div class="text-616161">14:12:15</div>
                </div>
              </div>
            </td>
            <td class="text-right">356</td>
            <td class="text-right">16</td>
            <td class="text-right">49</td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-page-container>
    <q-footer elevated style="background: #1e232d">
      <!-- <q-toolbar>
          <q-toolbar-title>Footer</q-toolbar-title>
        </q-toolbar> -->
      <q-tabs v-model="state.tab" style="color: #616161">
        <q-tab name="mails" icon="mail" label="首页" />
        <q-tab name="alarms" icon="alarm" label="行情" class="text-white" />
        <q-tab name="movies" icon="movie" label="交易" />
        <q-tab name="movies" icon="movie" label="我的" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    const state = reactive({
      tab: "",
    });

    return {
      state,
    };
  },
});
</script>

<style lang="scss">
.flb {
  margin-left: 12px;
  .items-center,
  .flex-center {
    align-items: flex-end;
  }
}
tr > td {
  border-bottom-width: 1px !important;
}
.q-table--horizontal-separator thead th,
.q-table--cell-separator thead th {
  border: none;
  font-size: 12px;
  color: #616161;
}
.q-table thead tr {
  height: 32px;
}
.q-table tbody td {
  font-size: 14px;
}
.text-616161 {
  color: #616161;
  font-size: 12px;
}
</style>
