<template>
  <h1>Reusable Widget Examples</h1>
  <div class="examples">
    <section class="example" aria-labelledby="modal">
      <h2 id="modal">Modal Widget</h2>

      <button @click="openModal()" class="button" id="focusHere">Open Modal</button>

      <ModalDialogWidget>
        <template v-slot:header>
          <h3>{{ modal.title }}</h3>
        </template>

        <p>{{ modal.content }}</p>

        <template v-slot:lastButton> {{ modal.button }} </template>
      </ModalDialogWidget>
    </section>

    <section class="example" aria-labelledby="toggle">
      <h2 id="toggle">Toggle</h2>
      <ToggleWidget :icons="toggle.icons">
        {{ toggle.text }}
      </ToggleWidget>
    </section>

    <section class="example" aria-labelledby="accordion">
      <h2 id="accordion">Accordion</h2>
      <AccordionWidget :accordions="accordions"/>
    </section>

    <section class="example" aria-labelledby="tabs">
      <h2 id="tabs">Tabs</h2>
      <TabsWidget :tabs="tabs"/>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ModalDialogWidget from "@/components/ModalDialogWidget.vue";
import ToggleWidget from "@/components/ToggleWidget.vue";
import AccordionWidget from "@/components/AccordionWidget.vue";
import TabsWidget from "@/components/TabsWidget.vue";

export default {
  name: "Reusable",
  data() {
    return {
      accordions: [
        {
          id: "1",
          expanded: true,
          heading: "Item 1",
          content: "Content for Item 1",
          multiple: false
        },
        {
          id: "2",
          expanded: false,
          heading: "Item 2",
          content: "Content for Item 2",
          multiple: false
        },
        {
          id: "3",
          expanded: false,
          heading: "Item 3",
          content: "Content for Item 3",
          multiple: false
        },
      ],
      tabs: [
        {
          id: "1",
          selected: true,
          title: "Tab 1",
          content: "Content for Tab 1",
        },
        {
          id: "2",
          selected: false,
          title: "Tab 2",
          content: "Content for Tab 2",
        },
        {
          id: "3",
          selected: false,
          title: "Tab 3",
          content: "Content for Tab 3",
        },
      ],
      modal: {
        title: "Modal Title",
        content: "This is the modal content",
        button: "Continue",
      },
      toggle: {
        text: "Mute",
        icons: {
          mutedIcon: require(`../assets/mutedIcon.svg`),
          unmutedIcon: require(`../assets/unmutedIcon.svg`),
        },
      },
    };
  },
  components: {
    ModalDialogWidget,
    ToggleWidget,
    AccordionWidget,
    TabsWidget,
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
.example {
  margin: 50px auto;
}
.button {
  border: 1px solid gray;
  border-radius: 5px;
  font-weight: bold;
  padding: 5px 10px;
  font-size: 1em;
}
</style>
