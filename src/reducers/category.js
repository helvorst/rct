export const category = (state = 0, action) => {

  switch (action.type) {
    case 'SELECT_CATEGORY':
      return action.id;
    default:
      return state;
  }
};