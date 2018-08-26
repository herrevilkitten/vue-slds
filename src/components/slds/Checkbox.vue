<template>
  <span :class="checkboxClassName">
    <abbr v-if="required" class="slds-required" title="required">*</abbr>
    <input name="options" id="checkbox-41" type="checkbox"
       :checked="value" @input="$emit('input', $event.target.checked)" :disabled="disabled" />
    <label class="slds-checkbox__label" for="checkbox-41">
      <span class="slds-checkbox_faux"></span>
      <span class="slds-form-element__label"><slot></slot></span>
    </label>
  </span>
</template>

<script>
export default {
  props: {
    value: Boolean,
    stacked: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    checkboxClassName: function() {
      let className = 'slds-checkbox';

      if (this.stacked) {
        className = className + ' slds-checkbox_stacked';
      }

      return className;
    },
  },
};
</script>
