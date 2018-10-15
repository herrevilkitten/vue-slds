<template>
<component-documentation title="Alert">
  <alert>Welcome to SLDS</alert>

  <a href="https://www.lightningdesignsystem.com/components/alert/">SLDS Documentation</a>

  <div>
  <h2 v-text-size="'heading_small'">Properties</h2>
  <dl v-description-list="'horizontal'">
    <dt>type</dt>
    <dd>The type of alert to show.  Must be one of info, warning, error, or offline.  Defaults to info.</dd>
  </dl>
  </div>

  <div>
  <h2 v-text-size="'heading_small'">Events</h2>
  <dl v-description-list="'horizontal'">
    <dt>close</dt>
    <dd>Emitted when the close button is pushed in the notification.</dd>
  </dl>
  </div>
  
  <div>
  <h2 v-text-size="'heading_small'">Slots</h2>
  </div>

</component-documentation>
  
</template>

<script>
import Alert from '../slds/Alert.vue';

import ComponentDocumentation from './ComponentDocumentation.vue';

import Directives from '../slds/Directives';

export default {
  components: {
    ComponentDocumentation,

    Alert,
  },
  directives: Directives,
};
</script>
