export default (micro, actions, schema) => ({ cmd, fields, params } = {}) => {
  return actions.tree.create(schema, params, { fields });
};