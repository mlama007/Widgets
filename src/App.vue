<template>
  <nav id="nav">
    <router-link to="/">Examples</router-link> |
    <router-link to="/reusable">Reusable Widgets</router-link>
  </nav>
  <p role="status">{{routeAnnouncement}}</p>
  <router-view/>
</template>


<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      routes: []
    };
  },
  created() {
    this.$router.options.routes.forEach(route => {
      this.routes.push({
          name: route.name, 
          path: route.path
      })
    })
  },
  watch: {
    $route: function() {
      this.announceRoute({ message: this.$route.name + " page loaded" });
    }
  },
  computed: {
    ...mapState(["routeAnnouncement"]),
  },
  methods: {
    ...mapActions(["update_routeAnnouncement"]),
    announceRoute(message) {
      this.update_routeAnnouncement(message);
    }
  }
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
  }
  [aria-current] {
    color: #006fc1;
  }
}

[role="status"] {
    height: 0;
    margin: 0;
    overflow: hidden;
}
</style>
