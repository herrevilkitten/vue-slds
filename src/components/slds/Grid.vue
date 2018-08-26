<template>
  <div v-bind:class="gridClassName">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: 'horizontal',
    },
    wrap: {
      type: Boolean,
      default: false,
    },
    gutters: {
      type: Boolean,
      default: false,
    },
    gutterSpacing: {
      type: String,
      default: '',
    },
    pullPadding: {
      type: String,
      default: '',
    },
  },
  computed: {
    gridClassName: function() {
      let className = 'slds-grid';

      if (this.wrap) {
        className = className + ' slds-wrap';
      }

      if (this.direction) {
        className = className + ` slds-grid_${this.direction}`;
      }

      if (this.gutters) {
        className = className + ' slds-gutters';
      }

      if (this.gutterSpacing) {
        className = className + ` slds-gutters_${this.gutterSpacing}`;
      }

      if (this.pullPadding) {
        className = className + ` slds-grid_pull-padded-${this.pullPadding}`;
      }

      return className;
    },
  },
};
</script>

