<template>
  <div v-if="modalOpen">
    <div class="modal-mask">
      <div class="modal-wrapper" @click="closeModal()">
        <div
          class="modal-container"
          @click.stop
          role="dialog"
          aria-labelledby="modalHeading"
          aria-modal="true"
          v-focus
          tabindex="-1"
        >
          <!-- Focus Guard -->
          <div id="focusGuardStart" tabindex="0" @focus="focusOnLast"></div>
          <button
            ref="close"
            @click="closeModal()"
            class="close"
            aria-label="Close"
          >
            X
          </button>

          <span id="modalHeading">
            <slot name="header">Title</slot>
          </span>

          <slot></slot>

          <button class="button" ref="last" @click="closeModal()">
            <slot name="lastButton">Close</slot>
          </button>

          <!-- Focus Guard -->
          <div id="focusGuardEnd" tabindex="0" @focus="focusOnFirst"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Modal",
  computed: {
    ...mapState(["modalOpen"]),
  },
  created() {
    const escapeHandler = (e) => {
      if (e.keyCode === 27 && this.modalOpen) {
        this.closeModal();
      }
    };
    document.addEventListener("keydown", escapeHandler);
  },
  methods: {
    ...mapActions(["closeModal"]),
    focusOnFirst() {
      this.$nextTick(() => this.$refs.close.focus());
    },
    focusOnLast() {
      this.$nextTick(() => this.$refs.last.focus());
    },
  },
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
  },
};
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.close {
  float: right;
  border: none;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
}

#focusguard-1,
#focusguard-2 {
  &:focus {
    outline: 0;
  }
}
</style>
