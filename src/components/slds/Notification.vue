<template>
    <section class="slds-notification" role="dialog" :aria-labelledby="labelId" :aria-describedby="bodyId">
      <div class="slds-notification__body" :id="bodyId">
        <a class="slds-notification__target slds-media" @click="onBodyClick">
          <slot name="icon" class="slds-media__figure"></slot>
          <div class="slds-media__body">
            <h2 class="slds-text-heading--small slds-m-bottom--xx-small" :id="labelId">
              <span class="slds-assistive-text">{{type}} notification:</span>{{subject}}</h2>
            <p><slot></slot></p>
          </div>
        </a>
        <button class="slds-button slds-button_icon slds-button--icon-container slds-notification__close"
        :title="'Dismiss ' + subject" @click="onDismissClick">
          <svg class="slds-button__icon" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close" xmlns:xlink="http://www.w3.org/1999/xlink" />
          </svg>
          <span class="slds-assistive-text">Dismiss {{subject}}</span>
        </button>
      </div>
    </section>
</template>

<script>
let notificationCount = 0;

export default {
  data() {
    return {
      bodyId: null,
      labelId: null,
    };
  },
  props: {
    type: {
      type: String,
      default: 'event',
    },
    subject: {
      type: String,
      default: 'Notification',
    },
    body: {
      type: String,
      default: '',
    },
  },
  mounted() {
    this.bodyId = `slds-dialog-body-${notificationCount++}`;
    this.labelId = `slds-dialog-label-${notificationCount++}`;
  },
  methods: {
    onBodyClick: function(event) {
      this.$emit('click', event);
    },

    onDismissClick: function(event) {
      this.$emit('close', event);
    },
  },
};
</script>
