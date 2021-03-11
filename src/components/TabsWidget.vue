<template>
  <div class="tabs">
    <div class="tablist" role="tablist" aria-label="tablist">
      <button
        v-for="(tab, index) in updatedTabs"
        :key="index"
        role="tab"
        :aria-selected="tab.selected"
        :tabindex="tab.selected ? 0 : -1"
        :aria-controls="tab.id + 'content'"
        :id="tab.id"
        :ref="tab.id"
        @click="updateTab(tab)"
        @keyup.left="moveBack(tab)"
        @keyup.right="moveForward(tab)"
      >
        {{ tab.title }}
      </button>
    </div>
    <div v-for="(tab, index) in tabs" :key="index">
      <div
        class="tabContent"
        tabindex="0"
        role="tabpanel"
        :id="tab.id + 'content'"
        :aria-labelledby="tab.id"
        v-if="tab.selected"
      >
        {{ tab.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tabs"],
  computed: {
    updatedTabs() {
      return this.tabs;
    },
  },
  methods: {
    updateTab(tab) {
      for (let i = 0; i < this.tabs.length; i++) {
        console.log(tab);
        tab.id == this.updatedTabs[i].id
          ? (this.updatedTabs[i].selected = true)
          : (this.updatedTabs[i].selected = false);
      }
    },
    moveBack(tab) {
      console.log(tab);
      for (let i = 0; i < this.updatedTabs.length; i++) {
        let length = this.updatedTabs.length;
        this.updatedTabs[i].selected = false;
        let ref = tab.id;
        if (tab.id == "1") {
          this.updatedTabs[length - 1].selected = true;
          this.$refs[length].focus();
        } else {
          this.updatedTabs[tab.id - 2].selected = true;
          this.$refs[ref - 1].focus();
        }
      }
    },
    moveForward(tab) {
      console.log(tab);
      for (let i = 0; i < this.tabs.length; i++) {
        let length = this.tabs.length;
        let ref = tab.id;
        this.updatedTabs[i].selected = false;
        if (tab.id == length) {
          this.updatedTabs[0].selected = true;
          this.$refs[ref - length + 1].focus();
        } else {
          this.updatedTabs[tab.id].selected = true;
          this.$refs[ref - length + 4].focus();
        }
      }
    },
  },
};
</script>


<style>
.tabs {
  background: #fff;
  text-align: left;
  max-width: 650px;
  border: 1px solid lightgray;
  margin: 0 auto;
}
.tablist {
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;
  margin: auto;
}
.tablist button {
  border: none;
  font-weight: bold;
  padding: 10px;
  font-size: 1em;
  text-align: left;
  text-decoration: none;
  width: 100%;
}

.tablist button[aria-selected="true"] {
  border-bottom: 5px solid black;
}

@media only screen and (min-width: 500px) {
  .tablist {
    display: flex;
    justify-content: space-between;
  }
}

.tabContent {
  padding: 30px;
}
</style>