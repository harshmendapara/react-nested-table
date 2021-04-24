const create = (name, types) => {
  const constants = {};

  types.forEach((type) => {
    constants[type] = `${name}/${type}`;
    constants[`${type}_REQUEST`] = `${name}/${type}_REQUEST`;
    constants[`${type}_SUCCESS`] = `${name}/${type}_SUCCESS`;
    constants[`${type}_FAILURE`] = `${name}/${type}_FAILURE`;
  });

  return constants;
};

// eslint-disable-next-line
export const users = create('users', ['FETCH', 'REMOVE', 'COLLAPSE']);
