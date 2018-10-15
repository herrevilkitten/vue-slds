<template>
<div class="component-documentation" v-padding="'horizontal medium'">
  <component-header :title="title"></component-header>
  <slot></slot>
  <hr />
</div>
</template>

<style scoped>
.component-documentation {
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>

<script>
import ComponentHeader from './ComponentHeader.vue';

import Directives from '../slds/Directives';

export default {
  components: {
    ComponentHeader,
  },
  directives: Directives,
  props: {
    title: String,
  },
};
</script>
