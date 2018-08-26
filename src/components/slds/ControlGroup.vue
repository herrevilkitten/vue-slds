</<template>
<fieldset class="slds-form-element slds-has-error">
    <legend class="slds-form-element__legend slds-form-element__label">
      <abbr v-if="required" class="slds-required" title="required">*</abbr>
      {{label}}
    </legend>
    <slot></slot>
    <div iclass="slds-form-element__help">{{error}}</div>
</fieldset>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },

    required: {
      type: Boolean,
      default: false,
    },

    error: {
      type: String,
      default: '',
    },
  },
};
</script>
