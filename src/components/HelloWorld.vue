<template>
  <div class="hello">
    <BrandBand size="large"></BrandBand>

    <Icon name="utility.announcement" description="blahblah"></Icon>

    <Alert>
      Welcome to SLDS
    </Alert>

    <Grid v-size="'1/2'">
    <MediaObject :center="true">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Fugiat minus molestias reprehenderit consequuntur sapiente.
        Modi veritatis totam accusantium numquam assumenda.
      </p>
      <span class="slds-avatar slds-avatar_large" slot="right-figure">
        <img alt="Person name" src="/assets/images/avatar3.jpg" title="User avatar" />
      </span>
    </MediaObject>
    </Grid>

      <Checkbox v-model="checkboxValue">This is a checkbox: {{checkboxValue}}</Checkbox>
      
    <CheckboxGroup :values="group"></CheckboxGroup>

    <Icon name="action.description"></Icon>

    <Grid>
    <Badge type="dark">I am a badge</Badge>
    
    </Grid>

    <Notification subject="test" @close="logEvent">A Notification <Icon name="utility.announcement" slot="icon"></Icon></Notification>
    
    <Button icon="utility.close" :border="true" type="filled" @click="logEvent"></Button>
  </div>
</template>

<script>
import Alert from './slds/Alert.vue';
import Badge from './slds/Badge.vue';
import BrandBand from './slds/BrandBand.vue';
import Button from './slds/Button.vue';
import Checkbox from './slds/Checkbox.vue';
import CheckboxGroup from './slds/CheckboxGroup.vue';
import Control from './slds/Control.vue';
import Form from './slds/Form.vue';
import Grid from './slds/Grid.vue';
import Icon from './slds/Icon.vue';
import MediaObject from './slds/MediaObject.vue';
import Notification from './slds/Notification.vue';
import PageHeader from './slds/PageHeader.vue';

import directives from './slds/Directives';

Icon.basePath('/assets');

export default {
  components: {
    Alert,
    Badge,
    BrandBand,
    Button,
    Checkbox,
    CheckboxGroup,
    Control,
    Form,
    Grid,
    Icon,
    MediaObject,
    Notification,
    PageHeader,
  },
  directives: directives,
  name: 'HelloWorld',
  props: {
    msg: String,
    checkboxValue: Boolean,
    group: Array,
  },
  mounted() {
    this.group = [
        { label: 'Mon', value: false },
        { label: 'Tue', value: false },
        { label: 'Wed', value: false },
        { label: 'Thur', value: false },
        { label: 'Fri', value: false },
      ];
  },/*
  computed: {
    group: function() {
      return [
        { label: 'Mon', value: false },
        { label: 'Tue', value: false },
        { label: 'Wed', value: false },
        { label: 'Thur', value: false },
        { label: 'Fri', value: false },
      ];
    },
  },*/
  methods: {
    logEvent(event) {
      console.log(event);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
