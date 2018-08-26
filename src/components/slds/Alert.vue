<template>
<div v-bind:class="'slds-notify slds-notify_alert slds-theme_alert-texture slds-theme_' + type" role="alert">
  <span class="slds-assistive-text">{{type}}</span>
  <slot></slot>
</div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info',
    },
  },
};
</script>
