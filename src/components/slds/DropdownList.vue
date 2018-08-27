<template>
<div :class="dropdownListClassName">
  <ul class="slds-dropdown__list" role="menu">
    <slot></slot>
  </ul>
</div>
</template>

<script>
import DropdownDivider from './DropdownDivider.vue';
import DropdownItem from './DropdownItem.vue';

export default {
  components: {
    DropdownDivider,
    DropdownItem,
  },
  props: {
    side: {
      type: String,
      default: 'right',
    },
  },

  computed: {
    dropdownListClassName: function() {
      let className = 'slds-dropdown';

      if (this.side) {
        className += ` slds-dropdown_${this.side}`;
      }

      return className;
    },
  },
};
</script>
