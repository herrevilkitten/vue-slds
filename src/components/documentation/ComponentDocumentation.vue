<template>
<div class="component-documentation">
  <component-header :title="title"></component-header>
  <slot></slot>
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

export default {
  components: {
    ComponentHeader,
  },
  props: {
    title: String,
  },
};
</script>
