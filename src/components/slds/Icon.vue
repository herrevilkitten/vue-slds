<template>
  <span :class="containerClassName" :title="description">
    <svg :class="iconClassName" aria-hidden="true">
      <use :xlink:href="iconPath"></use>
    </svg>
    <span v-if="description" class="slds-assistive-text">{{description}}</span>
  </span>
</template>

<script>
let config = {
  path: '',
};
export default {
  props: {
    color: {
      type: String,
      default: 'default',
    },
    name: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
  },

  computed: {
    containerClassName: function() {
      let className = 'slds-icon_container';

      const [sprite, icon] = (this.name || '.')
        .toLowerCase()
        .replace(/ /g, '_')
        .split(/\./);

      className = className + ` slds-icon-${sprite}-${icon}`;

      if (this.color === 'current') {
        className = className + ' slds-current-color';
      }

      if (sprite === 'action') {
        className = className + ' slds-icon_container_circle';
      }

      return className;
    },
    iconClassName: function() {
      let className = 'slds-icon slds-icon-text-default';

      if (this.size) {
        className = className + ` slds-icon_${this.size}`;
      }

      if (this.color && this.color !== 'current') {
        className = className + ` slds-icon-text-${this.color}`;
      }

      return className;
    },
    iconPath: function() {
      const [sprite, icon] = (this.name || '.')
        .toLowerCase()
        .replace(/ /g, '_')
        .split(/\./);
      return `${config.path}/icons/${sprite}-sprite/svg/symbols.svg#${icon}`;
    },
  },

  basePath(newPath) {
    config.path = newPath;
  },
};
</script>