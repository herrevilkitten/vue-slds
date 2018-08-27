<template>
  <div class="hello">
    <global-navigation name="Vue SLDS">
      <ContextBarMenuItem title="Home" :active="checkboxValue"></ContextBarMenuItem>
      <context-bar-menu-dropdown title="Components">
        <dropdown-item title="Alert" @click="changeComponent($event)"></dropdown-item>
        <dropdown-item title="Badge" @click="changeComponent($event)"></dropdown-item>
      </context-bar-menu-dropdown>
    </global-navigation>
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

    <div>
      <Checkbox v-model="checkboxValue">This is a checkbox: {{checkboxValue}}</Checkbox>
    </div>
      
    <div>
    <CheckboxGroup v-model="group"></CheckboxGroup>
    <div>{{group}}</div>
    </div>

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
import ContextBarMenuDropdown from './slds/ContextBarMenuDropdown.vue';
import ContextBarMenuItem from './slds/ContextBarMenuItem.vue';
import Control from './slds/Control.vue';
import DropdownDivider from './slds/DropdownDivider.vue';
import DropdownItem from './slds/DropdownItem.vue';
import DropdownList from './slds/DropdownList.vue';
import Form from './slds/Form.vue';
import GlobalNavigation from './slds/GlobalNavigation';
import Grid from './slds/Grid.vue';
import Icon from './slds/Icon.vue';
import MediaObject from './slds/MediaObject.vue';
import Notification from './slds/Notification.vue';
import PageHeader from './slds/PageHeader.vue';

import directives from './slds/Directives';

Icon.basePath('./assets');

export default {
  components: {
    Alert,
    Badge,
    BrandBand,
    Button,
    Checkbox,
    CheckboxGroup,
    ContextBarMenuDropdown,
    ContextBarMenuItem,
    Control,
    DropdownDivider,
    DropdownItem,
    DropdownList,
    Form,
    GlobalNavigation,
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
  },
  data() {
    return {
      checkboxValue: false,
      group: [
        { label: 'Mon', value: false },
        { label: 'Tue', value: false },
        { label: 'Wed', value: false },
        { label: 'Thur', value: false },
        { label: 'Fri', value: false },
      ],
    };
  },
  methods: {
    logEvent(event) {
      console.log(event);
    },

    changeComponent(event) {
      console.log('Changing component:', event);
    }
  },
};
</script>