<template>
<div>
  <div class="slds-context-bar">
    <div class="slds-context-bar__primary">
      <app-launcher-button :name="name"></app-launcher-button>
    </div>
    <context-bar-menu>
      <slot></slot>
    </context-bar-menu>
  </div>
</div>
</template>

<script>
import AppLauncherButton from './AppLauncherButton.vue';
import ContextBarMenu from './ContextBarMenu.vue';
import ContextBarMenuItem from './ContextBarMenuItem.vue';

export default {
  components: {
    AppLauncherButton,
    ContextBarMenu,
    ContextBarMenuItem,
  },
  props: {
    name: String,
  },
};
</script>
