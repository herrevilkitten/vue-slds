<template>
<h2 :id="id" v-text-size="'heading_medium'">{{title}}</h2>
</template>

<script>
import directives from '../slds/Directives';

export default {
  directives: directives,
  props: {
    title: String,
  },
  computed: {
    id: function() {
      return `component__${this.title.replace(' ', '_').toLowerCase()}`;
    },
  },
};
</script>
