const Margin = {
  inserted: (el, binding) => {
    const value = binding.value || 'around medium';
    let [location, size] = value.split(/\s+/);
    if (!size) {
      size = location;
      location = 'around';
    }
    el.className = el.className + ` slds-m-${location}_${size}`;
  },
};

const Padding = {
  inserted: (el, binding) => {
    const value = binding.value || 'around medium';
    let [location, size] = value.split(/\s+/);
    if (!size) {
      size = location;
      location = 'around';
    }
    el.className = el.className + ` slds-p-${location}_${size}`;
  },
};

const Position = {
  inserted: (el, binding) => {
    const value = binding.value || 'fixed';
    el.className = el.className + ` slds-is-${value}`;
  },
};

const Size = {
  inserted: (el, binding) => {
    const value = binding.value || '1/1';
    const [numerator, denominator] = value.split(/\s*\/\s*/);
    el.className = el.className + ` slds-size_${numerator}-of-${denominator}`;
  },
};

const TextAlign = {
  inserted: (el, binding) => {
    el.className = el.className + ` slds-text_align-${binding.value}`;
  },
};

const TextColor = {
  inserted: (el, binding) => {
    el.className = el.className + ` slds-text-color_${binding.value}`;
  },
};

const TextSize = {
  inserted: (el, binding) => {
    console.log(el, binding);
    el.className = el.className + ` slds-text-${binding.value}`;
  },
};

const TextTitle = {
  inserted: (el, binding) => {
    let className = 'slds-text-title';
    if (binding.value === 'caps') {
      className = className + '_caps';
    }
    el.className = el.className + ` ${className}`;
  },
};

const TextLink = {
  inserted: (el, binding) => {
    let className = 'slds-text-link';
    if (binding.value === 'reset') {
      className = className + '_reset';
    } else if (binding.value === 'faux') {
      className = className + '_faux';
    }
    el.className = el.className + ` ${className}`;
  },
};

const TextLongForm = {
  inserted: (el, binding) => {
    el.className = el.className + ` slds-text-longform`;
  },
};

const TextMonospace = {
  inserted: (el, binding) => {
    el.className = el.className + ` slds-text-font_monospace`;
  },
};


export default {
  Margin,
  Padding,
  Position,
  Size,
  TextAlign,
  TextColor,
  TextLink,
  TextLongForm,
  TextMonospace,
  TextSize,
  TextTitle,
};
