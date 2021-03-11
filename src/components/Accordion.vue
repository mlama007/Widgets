<template>
  <div class="accordions">
    <template v-for="(accordion, index) in accordions" :key="index">
      <h3 class="accordionHeading">
        <button
          :aria-expanded="accordion.expanded"
          class="Accordion-trigger"
          :aria-controls="index + '-content'"
          :id="index + '-id'"
          @click="updateAccordion(accordion, true)"
        >
          {{ accordion.heading }}
          <span class="expandIcons" aria-hidden="true">
            <span v-if="accordion.expanded">-</span>
            <span v-else>+</span>
          </span>
        </button>
      </h3>
      <div
        :id="index + '-content'"
        role="region"
        :aria-labelledby="index + '-id'"
        class="accordion-panel"
        v-if="accordion.expanded"
      >
        {{ accordion.content }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accordions: [
        {
          id: "1",
          expanded: true,
          heading: "Item 1",
          content: "Content for Item 1",
        },
        {
          id: "2",
          expanded: false,
          heading: "Item 2",
          content: "Content for Item 2",
        },
        {
          id: "3",
          expanded: false,
          heading: "Item 3",
          content: "Content for Item 3",
        },
      ],
    };
  },
  methods: {
    updateAccordion(accordion, multiple) {
      if (multiple) {
        accordion.expanded = !accordion.expanded;
      } else {
        for (let i = 0; i < this.accordions.length; i++) {
          if (accordion.id == this.accordions[i].id) {
            this.accordions[i].expanded = !this.accordions[i].expanded;
          } else {
            this.accordions[i].expanded = false;
          }
        }
      }
    },
  },
};
</script>

<style>
.accordions {
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 2px 4px rgb(0 0 0 / 4%);
  text-align: left;
  max-width: 700px;
  margin: 0 auto;
}
.accordionHeading {
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;
  margin-top: 0;
  margin-bottom: 0;
}
.accordionHeading button {
  border: none;
  font-weight: bold;
  padding: 10px;
  width: 100%;
  font-size: 1em;
  text-align: left;
  text-decoration: none;
}

.accordion-panel {
  padding: 30px;
}

.expandIcons {
  float: right;
  padding-right: 16px;
  font-weight: 100;
  font-size: 1.2em;
}
</style>