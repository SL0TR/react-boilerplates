/* eslint-disable dot-notation */
/* eslint-disable  no-template-curly-in-string */

export default function getValidateMessages(
  messages = {},
  inputName = 'label',
) {
  const validateMessages = {
    required: `\${${inputName}} ${messages['is required!']}`,
    types: {
      email: `\${${inputName}} ${messages['is not valid!']}`,
    },
    string: {
      min: `\${${inputName}} ${messages['should be at least']} \${min} ${messages['characters']}`,
      max: `\${${inputName}} ${messages['should be max']} \${min} ${messages['characters']}`,
      range: "'${name}' must be between ${min} and ${max} characters",
    },
  };

  return validateMessages;
}
