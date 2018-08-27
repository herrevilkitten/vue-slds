<template>
  <div class="slds-checkbox_button-group">
    <span v-for="(entry, index) in group" :key="index" class="slds-button slds-checkbox_button">
      <input :id="checkboxId(index)" value="true" :checked="entry.value"
        @input="toggle($event, index, entry)"
        name="checkbox" type="checkbox" />
      <label class="slds-checkbox_button__label" :for="checkboxId(index)">
        <span class="slds-checkbox_faux">{{entry.label}}</span>
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
    value: Array,
  },
  data() {
    return {
      group: this.value,
    };
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
      this.group[index].value = $event.target.checked;
      this.$emit('input', this.group);
    },
  },
};
</script>