<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-purple">
      <q-toolbar class="text-primary">
        <q-tabs v-model="state.tab" narrow-indicator dense align="justify">
          <q-tab class="text-purple" name="mails" icon="mail" label="Mails" />
          <q-tab
            class="text-orange"
            name="alarms"
            icon="alarm"
            label="Alarms"
          />
          <q-tab class="text-teal" name="movies" icon="movie" label="Movies" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
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
