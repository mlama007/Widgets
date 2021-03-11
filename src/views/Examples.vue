<template>
  <h1>Widget Examples</h1>
  <div class="examples">
    <section class="example" aria-labelledby="modal">
      <h2 id="modal">Modals</h2>
      <button @click="openModal()" class="button" id="focusHere">
        Open Modal
      </button>
      <ModalDialog />
    </section>

    <section class="example" aria-labelledby="toggle">
      <h2 id="toggle">Toggle</h2>
      <Toggle />
    </section>

    <section class="example" aria-labelledby="accordion">
      <h2 id="accordion">Accordion</h2>
      <Accordion />
    </section>

    <section class="example" aria-labelledby="tabs">
      <h2 id="tabs">Tabs</h2>
      <Tabs />
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ModalDialog from "@/components/ModalDialog.vue";
import Toggle from "@/components/Toggle.vue";
import Accordion from "@/components/Accordion.vue";
import Tabs from "@/components/Tabs.vue";

export default {
  name: "Examples",
  components: {
    ModalDialog,
    Toggle,
    Accordion,
    Tabs,
  },
  methods: {
    ...mapActions(["openModal"]),
  },
};
</script>

<style>
.examples {
  text-align: left;
  max-width: 600px;
  margin: auto;
}
.example{
  margin: 50px auto;
}
.button{
    border: 1px solid gray;
    border-radius: 5px;
    font-weight: bold;
    padding: 5px 10px;
    font-size: 1em;
}
</style>
