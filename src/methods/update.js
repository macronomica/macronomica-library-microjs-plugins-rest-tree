export default (micro, actions, schema) => ({ cmd, id, fields, criteria = {}, params = {} } = {}) => {
  if (!('id' in criteria) && !!id) {
    criteria.id = id;
  }

  return actions.tree.update(schema, criteria, params, { fields });
};