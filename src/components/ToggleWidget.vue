<template>
  <section class="muting">
    <button :aria-pressed="muted" @click="toggle()" :class="muted ? 'button pressed' : 'button'">
      <slot></slot>
      <img
        aria-hidden="true"
        class="muteIcon"
        :src="muted ? icons.unmutedIcon : icons.mutedIcon"
      />
    </button>
  </section>
</template>

<script>
export default {
  props:['icons'],
  data() {
    return {
      // mutedIcon: require(`../assets/mutedIcon.svg`),
      // unmutedIcon: require(`../assets/unmutedIcon.svg`),
      muted: false,
    };
  },
  methods: {
    toggle() {
      this.muted = !this.muted;
    }
  },
};
</script>

<style>
.visibility label{
  display: block;
}

.toggleHideButtons {
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0.5em;
}
.hideShow {
  vertical-align: middle;
}
.eyeIcons {
  height: 1.8em;
}
.muteIcon {
  height: 1.5em;
}
.button{
    border: 1px solid gray;
    border-radius: 5px;
    font-weight: bold;
    padding: 5px 10px;
    font-size: 1em;
}
.pressed{
    box-shadow: 1px 1px 2px grey;
    background-color: #dedede;
}
</style>