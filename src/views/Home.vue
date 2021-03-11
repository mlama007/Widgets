<template>
  <h1>This is an about page</h1>

  <!-- <section>
    <h2>Modals</h2>
    <button @click="openModal()" class="addNew" id="addNew">Open Modal</button>
    <ModalDialog />
  </section>

  <section>
    <h2>Toggle</h2>
    <Toggle />
  </section> -->

  <section>
    <h2>Accordion</h2>
    <Accordion />
  </section>

  <section>
    <h2>Tabs</h2>
    <Tabs />
  </section>
</template>

<script>
import { mapActions } from "vuex";
// import ModalDialog from '@/components/ModalDialog.vue'
// import Toggle from '@/components/Toggle.vue'
import Accordion from '@/components/Accordion.vue'
import Tabs from '@/components/Tabs.vue'


export default {
  name: 'Home',
  components: {
    // ModalDialog,
    // Toggle,
    Accordion,
    Tabs
  },
  methods: {
    ...mapActions(["openModal"])
  }
}
</script>