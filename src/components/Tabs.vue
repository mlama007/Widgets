<template>
  <h3>This is a Tabs Example</h3>
  <div v-for="(tab, index) in tabs" :key="index">
    <div role="tablist" aria-label="tablist">
      <button
        role="tab"
        :aria-selected="tab.selected"
        :aria-controls="tab.id + 'content'"
        :id="tab.id"
        @click="updateTab(tab)"
      >
        {{ tab.title }}
      </button>
    </div>
    <div
      tabindex="0"
      role="tabpanel"
      :id="tab.id + 'content'"
      :aria-labelledby="tab.id"
      v-if="tab.selected"
    >
      {{ tab.content }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
  methods: {
    updateTab(tab) {
      for (let i = 0; i < this.tabs.length; i++) {
        if (tab.id == this.tabs[i].id) {
          this.tabs[i].selected = !this.tabs[i].selected;
        } else {
          this.tabs[i].selected = false;
        }
      }
    },
  },
};
</script>
