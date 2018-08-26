<template>
  <div v-bind:class="'slds-brand-band slds-brand-band_' + size + ' ' + ((background == false) ? 'slds-brand-band_none': '')"></div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'medium',
    },
    background: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
