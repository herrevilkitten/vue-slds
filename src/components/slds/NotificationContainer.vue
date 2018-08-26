<template>
<div class="slds-notification-container">
    <div aria-live="assertive" aria-atomic="true" class="slds-assistive-text">
      {{type}} notification: {{subject}}
    </div>
</div>
</template>

<script>
import Notification from './Notification.vue';

export default {
  props: {
    notifications: {
      default: [],
    },
  },
};
</script>
