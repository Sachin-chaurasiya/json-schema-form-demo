export const REGISTER_SCHEMA = {
  type: 'object',
  required: ['email', 'username', 'fullname', 'password'],
  properties: {
    email: {
      type: 'string',
      title: 'Email',
      format: 'email',
    },
    username: {
      type: 'string',
      title: 'Username',
    },
    fullname: {
      type: 'string',
      title: 'Full Name',
    },
    age: {
      type: 'integer',
      title: 'Age',
    },
    about: {
      type: 'string',
      title: 'Bio',
    },
    telephone: {
      type: 'string',
      title: 'Telephone',
      minLength: 10,
      maxLength: 13,
    },
    password: {
      type: 'string',
      title: 'Password',
      minLength: 8,
      format: 'password',
    },
  },
};

export const REGISTER_UI_SCHEMA = {
  firstName: {
    'ui:autofocus': true,
    'ui:emptyValue': '',
    'ui:placeholder':
      'ui:emptyValue causes this field to always be valid despite being required',
    'ui:autocomplete': 'family-name',
    'ui:enableMarkdownInDescription': true,
    'ui:description':
      'Make text **bold** or *italic*. Take a look at other options [here](https://markdown-to-jsx.quantizor.dev/).',
  },
  lastName: {
    'ui:autocomplete': 'given-name',
    'ui:enableMarkdownInDescription': true,
    'ui:description':
      'Make things **bold** or *italic*. Embed snippets of `code`. <small>And this is a small texts.</small> ',
  },
  age: {
    'ui:widget': 'updown',
    'ui:title': 'Age of person',
    'ui:description': '(earth year)',
  },
  bio: {
    'ui:widget': 'textarea',
  },
  password: {
    'ui:widget': 'password',
    'ui:help': 'Hint: Make it strong!',
  },
  telephone: {
    'ui:options': {
      inputType: 'tel',
    },
  },
};
