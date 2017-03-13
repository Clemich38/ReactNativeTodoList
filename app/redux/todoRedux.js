const types = {
}

export const actionCreators = {
}

const initialState = {
  items: ['First item', 'Second item'],
}

export const reducer = (state = initialState, action) => {
  const {type, payload} = action

  switch(type) {
    default: {
      return state
    }
  }
}
