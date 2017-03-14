const types = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  TOGGLE_ITEM_COMPLETED: 'TOGGLE_ITEM_COMPLETED',
}

export const actionCreators = {
  addItem: (item) => {
    return { type: types.ADD_ITEM, payload: item }
  },
  removeItem: (index) => {
    return { type: types.REMOVE_ITEM, payload: index }
  },
  toggleItemCompleted: (index) => {
    return { type: types.TOGGLE_ITEM_COMPLETED, payload: index }
  }
}

const initialState = {
  items: [{ label: 'First Item', completed: false },
          { label: 'Second Item', completed: true }],
}

export const reducer = (state = initialState, action) => {
  const { items } = state
  const {type, payload} = action

  switch (type) {
    case types.ADD_ITEM: {
      return {
        ...state,
        items: [{ label: payload, completed: false },, ...items],
      }
    }
    case types.TOGGLE_ITEM_COMPLETED: {
      return {
        ...state,
        items: items.map((item, i) => {
          if (i === payload)
            return { label: item.label, completed: !item.completed };
          else
            return item;
        }),
      }
    }
    default: {
      return state
    }
  }
}
