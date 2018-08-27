<template>
<li :class="contextBarMenuDropdownClassName">
  <a href="javascript:void(0);" class="slds-context-bar__label-action" :title="title">
    <span class="slds-truncate" :title="title">{{title}}</span>
  </a>
  <div class="slds-context-bar__icon-action slds-p-left_none">
    <button class="slds-button slds-button_icon slds-button_icon slds-context-bar__button" aria-haspopup="true" title="Open menu item submenu">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown" />
      </svg>
      <span class="slds-assistive-text">Open menu item submenu</span>
    </button>
  </div>
  
  <dropdown-list>
    <slot></slot>
  </dropdown-list>
      <!--
  <div class="slds-dropdown slds-dropdown_right">
    <ul class="slds-dropdown__list" role="menu">
      <slot></slot>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
          <span class="slds-truncate" title="Main action">
            <svg class="slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add" />
            </svg>Main action</span>
        </a>
      </li>
      <li class="slds-dropdown__header slds-has-divider_top-space" role="separator">
        <span class="slds-text-title_caps">Menu header</span>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
          <span class="slds-truncate" title="Menu Item One">Menu Item One</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
          <span class="slds-truncate" title="Menu Item Two">Menu Item Two</span>
        </a>
      </li>
      <li class="slds-dropdown__item" role="presentation">
        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
          <span class="slds-truncate" title="Menu Item Three">Menu Item Three</span>
        </a>
      </li>
    </ul>
  </div>
      -->
</li>
</template>

<script>
import DropdownList from './DropdownList.vue';

export default {
  components: {
    DropdownList,
  },
  props: {
    active: Boolean,
    title: String,
  },
  computed: {
    contextBarMenuDropdownClassName: function() {
      let className =
        'slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_hover';

      if (this.active) {
        className += ` slds-is-active`;
      }

      return className;
    },
  },
};
</script>
