
export default (micro, actions, schema) => ({ cmd, criteria = {} } = {}) => {
  const { parentId = null } = criteria;
  return actions.count(schema, criteria);
};