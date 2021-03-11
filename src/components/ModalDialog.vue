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
          <h2 id="modalHeading">Modal Example</h2>

          <button ref="last">nothing</button>

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
  data() {
    return {
      formFirstName: null,
      formLastName: null,
    };
  },
  computed: {
    ...mapState(["modalOpen", "people"]),
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
    ...mapActions(["closeModal", "addPerson", "initialFocus"]),
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

.buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0.5em;
  button {
    background-color: transparent;
    padding: 0.5em;
    font-size: 14px;
    margin: 0.5em;
  }
}

.inputs {
  margin: 1em;
  label {
    margin-right: 0.2em;
  }
  input {
    font-size: 14px;
  }
}

#focusguard-1,
#focusguard-2 {
  &:focus {
    outline: 0;
  }
}

.invalid {
  color: #b50000;
  label {
    color: #b50000;
  }
  input {
    border: 1px solid #b50000;
    background-color: #f7e9e9;
  }
}
</style>
