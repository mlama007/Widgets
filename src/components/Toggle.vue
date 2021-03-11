<template>
  <section class="muting">
    <h3>Toggling Mute</h3>
    <button :aria-pressed="muted" @click="toggleMute()" :class="muted ? 'button pressed' : 'button'">
      Mute
      <img
        aria-hidden="true"
        class="muteIcon"
        :src="muted ? unmutedIcon : mutedIcon"
      />
    </button>
  </section>

  <section class="visibility">
    <form action="">
      <h3>Toggling Visibility</h3>
      <label for="password">Password</label>
      <input
        name="password"
        id="password"
        :type="passwordHidden ? 'text' : 'password'"
        v-model="password"
        required
        aria-required="true"
      />
      <!-- Show/Hide buttons -->
      <span class="hideShow">
        <button
          type="button"
          aria-label="Show password"
          :aria-pressed="String(passwordHidden)"
          class="toggleHideButtons"
          @click="togglePasswordVisibility()"
        >
          <img
            aria-hidden="true"
            class="eyeIcons"
            :src="passwordHidden ? hideIcon : showIcon"
          />
        </button>
      </span>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      hideIcon: require(`../assets/eye-off-outline.svg`),
      showIcon: require(`../assets/eye-outline.svg`),
      mutedIcon: require(`../assets/mutedIcon.svg`),
      unmutedIcon: require(`../assets/unmutedIcon.svg`),
      muted: false,
      password: "",
      passwordHidden: false,
    };
  },
  methods: {
    toggleMute() {
      this.muted = !this.muted;
    },
    togglePasswordVisibility() {
      this.passwordHidden = !this.passwordHidden;
    },
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
  /* background-color: black; */
  display: block;
  width: 135px;
  height: 43px;
  /* background: url(button.png) no-repeat top; */
}
</style>