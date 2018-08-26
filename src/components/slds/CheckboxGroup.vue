<template>
  <div class="slds-checkbox_button-group">
    <span v-for="(value, index) in values" :key="index" class="slds-button slds-checkbox_button">
      <input :id="checkboxId(index)" value="true" :checked="value.value"
        @input="toggle($event, index, value)"
        name="checkbox" type="checkbox" />
      <label class="slds-checkbox_button__label" :for="checkboxId(index)">
        <span class="slds-checkbox_faux">{{value.label}}</span>
      </label>
    </span>
  </div>
</template>

<script>
let checkboxGroupId = 0;
export default {
  data() {
    return {
      id: null,
    };
  },
  props: {
    values: Array,
  },

  mounted() {
    checkboxGroupId = checkboxGroupId + 1;
    this.id = `slds-checkbox-group-${checkboxGroupId}`;
  },

  methods: {
    checkboxId: function(index) {
      return `slds-checkbox-group-${this.id}-${index}`;
    },

    toggle: function($event, index, value) {
      this.$emit('input', {
        value: $event.target.checked,
        label: value,
      });
    },
  },
};
</script>