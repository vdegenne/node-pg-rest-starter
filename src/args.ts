import {OptionDefinition} from 'command-line-args';

const commandArgs: OptionDefinition[] = [
  {
    name: 'port',
    alias: 'p',
    description: 'Define the port which the app is going to use.',
    type: Number,
    defaultValue: 3000
  },
  {
    name: 'disable-session',
    description:
        'Disable the session (use this if no authentication is required)',
    type: Boolean,
    defaultValue: false
  }
];


export default commandArgs;
