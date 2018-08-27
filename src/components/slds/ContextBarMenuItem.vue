<template>
  <li :class="contextBarMenuItemClassName">
    <a href="javascript:void(0);" class="slds-context-bar__label-action" :title="title" @click="onClick($event)">
      <span class="slds-assistive-text">{{assistive}}</span>
      <span class="slds-truncate" :title="title">{{title}}</span>
    </a>
  </li>  
</template>

<script>
export default {
  props: {
    active: Boolean,
    title: String,
    description: String,
  },
  computed: {
    contextBarMenuItemClassName: function() {
      let className = 'slds-context-bar__item';
      if (this.active) {
        className += ` slds-is-active`;
      }
      return className;
    },
    assistive: function() {
      return this.description || this.title;
    },
  },
  methods: {
    onClick: function(event) {
      this.$emit('click', event);
    },
  },
};
</script>
