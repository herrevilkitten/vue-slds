<template>
  <div v-bind:class="mediaClassName">
    <div class="slds-media__figure">
      <slot name="left-figure">

      </slot>
    </div>
      
    <div class="slds-media__body">
      <slot>

      </slot>
    </div>
    
    <div class="slds-media__figure slds-media__figure_reverse">
      <slot name="right-figure">

      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sizing: {
      type: String,
      default: '',
    },
    center: {
      type: Boolean,
      default: false,
    },
    responsive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    mediaClassName: function() {
      let className = 'slds-media';
      if (this.sizing) {
        className = className + ` slds-media_${this.sizing}`;
      }

      if (this.center) {
        className = className + ' slds-media_center';
      }

      if (this.responsive) {
        className = className + ' slds-media_responsive';
      }

      return className;
    },
  },
};
</script>
