<template>
<li class="slds-dropdown__item" role="presentation">
  <a href="javascript:void(0);" role="menuitem" tabindex="0" @click="onClick($event)">
    <span class="slds-truncate" :title="title">{{title}}</span>
  </a>
</li>
</template>

<script>
export default {
  props: {
    title: String,
  },

  methods: {
    onClick: function(event) {
      this.$emit('click', event);
    }
  }
};
</script>
