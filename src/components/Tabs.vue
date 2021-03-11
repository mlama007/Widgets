<template>
  <div class="tabs">
    <div class="tablist" role="tablist" aria-label="tablist">
      <button
        v-for="(tab, index) in tabs"
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
        tab.id == this.tabs[i].id
          ? (this.tabs[i].selected = true)
          : (this.tabs[i].selected = false);
      }
    },
    moveBack(tab) {
      for (let i = 0; i < this.tabs.length; i++) {
        let length = this.tabs.length;
        this.tabs[i].selected = false;
        let ref = tab.id;
        if (tab.id == "1") {
          this.tabs[length - 1].selected = true;
          this.$refs[length].focus();
        } else {
          this.tabs[tab.id - 2].selected = true;
          this.$refs[ref - 1].focus();
        }
      }
    },
    moveForward(tab) {
      for (let i = 0; i < this.tabs.length; i++) {
        let length = this.tabs.length;
        let ref = tab.id;
        this.tabs[i].selected = false;
        if (tab.id == length) {
          this.tabs[0].selected = true;
          this.$refs[ref - length + 1].focus();
        } else {
          this.tabs[tab.id].selected = true;
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

.tablist button[aria-selected=true] {
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