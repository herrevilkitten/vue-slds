<template>
<div class="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover">
  <div class="slds-context-bar__icon-action">
          <button class="slds-button slds-icon-waffle_container slds-context-bar__button" title="Description of the icon when needed">
            <span class="slds-icon-waffle">
              <span class="slds-r1"></span>
              <span class="slds-r2"></span>
              <span class="slds-r3"></span>
              <span class="slds-r4"></span>
              <span class="slds-r5"></span>
              <span class="slds-r6"></span>
              <span class="slds-r7"></span>
              <span class="slds-r8"></span>
              <span class="slds-r9"></span>
            </span>
            <span class="slds-assistive-text">Open App Launcher</span>
          </button>
        </div>
        <span class="slds-context-bar__label-action slds-context-bar__app-name">
          <span class="slds-truncate" :title="name">{{name}}</span>
        </span>
      </div>

</template>

<script>
export default {
  props: {
    name: String,
  },
};
</script>
