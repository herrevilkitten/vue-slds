<template>
  <div v-bind:class="columnClassName">
  </div>
</template>

<script>
export default {
  computed: {
    columnClassName: function() {
      let className = 'slds-col';

      return className;
    },
  },
};
</script>