<template>
  <h1 class="name">Power</h1>
  <button class="btn-default salmon" @click="togglePower">
    Power On/Off
  </button>
</template>

<script>

import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      ampPowerState: false,
    };
  },

  methods: {
    ...mapMutations('music', ['toggleMutationPower']),
    togglePower() {
      this.ampPowerState = !this.ampPowerState;
      console.log("ampPowerState: ", this.ampPowerState);
      this.toggleMutationPower({ power: this.ampPowerState });
    }
  }
};


</script>