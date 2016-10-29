
export default (micro, actions, schema) => ({ cmd, id, fields, criteria = {} } = {}) => {
  if (!('id' in criteria) && !!id) {
    criteria.id = id;
  }
  return actions.find.one(schema, criteria, { fields });
};