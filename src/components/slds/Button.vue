<template>
  <button :class="buttonClass" :title="description" @click="doClick" :disabled="disabled">
    <svg v-if="icon" class="slds-button__icon" aria-hidden="true">
      <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink" />
    </svg>
    <slot></slot>
    <span v-if="description" class="slds-assistive-text">{{description}}</span>    
  </button>
</template>

<script>
import Icon from './Icon.vue';

export default {
  props: {
    icon: {
      type: String,
      default: '',
    },

    description: {
      type: String,
      default: '',
    },

    border: {
      type: Boolean,
      default: false,
    },

    type: {
      type: String,
      default: '',
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    buttonClass: function() {
      let className = 'slds-button';

      if (this.icon) {
        className = className + ' slds-button_icon';
      }

      if (this.border) {
        if (this.type) {
          className = className + ` slds-button_icon-border-` + this.type;
        } else {
          className = className + ` slds-button_icon-border`;
        }
      } else if (this.type) {
        className = className + ` slds-button_icon-` + this.type;
      }

      return className;
    },

    iconPath() {
      return Icon.iconPath(this.icon);
    },
  },

  methods: {
    doClick: function(event) {
      this.$emit('click', event);
    },
  },
};
</script>
