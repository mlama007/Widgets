<template>
  <section>
    <h3>Muting</h3>
    <button :aria-pressed="muted" @click="toggleMute()">
      Mute
      <img
        aria-hidden="true"
        class="eyeIcons"
        :src="muted ? unmutedIcon : mutedIcon"
      />
    </button>
  </section>

  <form action="">
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