<template>
<div v-bind:class="'slds-notify slds-notify_alert slds-theme_alert-texture slds-theme_' + type" role="alert">
  <span class="slds-assistive-text">{{type}}</span>
  <slot></slot>
  <button class="slds-button slds-button_icon slds-notify__close slds-button_icon-inverse" title="Close" @click="$emit('click', $event)">
    <svg class="slds-button__icon" aria-hidden="true">
      <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
    </svg>
    <span class="slds-assistive-text">Close</span>
  </button>
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
