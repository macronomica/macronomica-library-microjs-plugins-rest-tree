
export default (micro, actions, schema) => ({ cmd, fields, sort, limit, offset, criteria = {} } = {}) => {
  const { parentId = null } = criteria;
  return actions.find.list(schema, { ...criteria, parentId }, { fields, sort, limit, offset });
};