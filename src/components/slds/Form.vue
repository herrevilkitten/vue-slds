<template>
  <fieldset :class="formClassName">
    <legend v-if="label" class="slds-form-element__legend slds-form-element__label">{{label}}</legend>
    <Control>
      <slot></slot>
    </Control>
  </fieldset>
</template>

<script>
import Control from './Control.vue';

export default {
  props: {
    label: {
      type: String,
      default: '',
    },

    layout: {
      type: String,
      default: '',
    },
  },

  computed: {
    formClassName: function() {
      let className = 'slds-form-element';

      if (this.layout) {
        className = className + ` slds-form_${this.layout}`;
      }

      return className;
    },
  },
};
</script>
