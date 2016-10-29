export default (micro, actions, schema) => ({ cmd, id, criteria = {} } = {}) => {
  if (!('id' in criteria) && !!id) {
    criteria.id = id;
  }
  
  return actions.tree.find.path(schema, criteria);
};