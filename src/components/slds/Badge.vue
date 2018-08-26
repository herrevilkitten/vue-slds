<template>
  <span v-bind:class="{'slds-badge': true, 'slds-badge_inverse': type == 'dark', 'slds-badge_lightest': type == 'light'}">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
  },
};
</script>
