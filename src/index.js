import supportedMethods from './methods';
const supportedMethodKeys = Object.keys(supportedMethods);

export const methods = supportedMethods;

export default (schema, options = {}) => micro => {
  const { methods = supportedMethodKeys } = options;
  const api = {};

  methods.forEach(name => {
    if (supportedMethodKeys.includes(name)) {
      micro.add(`cmd:${ name }`, api[ name ] = (...rest) => {
        const { actions } = micro.plugin('dal');
        return supportedMethods[ name ](micro, actions, schema)(...rest)
      })
    }
  });

  return api
};