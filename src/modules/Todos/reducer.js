import * as types from './actionTypes'

const todos = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO_SUCCEEDED: {
      return [
        ...state,
        {
          key: action.payload.key,
          name: action.payload.name,
          completed: action.payload.completed,
        },
      ]
    }
    case types.CHANGE_COMPLETED_SUCCEEDED: {
      return state.map(todo =>
        todo.key === action.payload.key
          ? Object.assign({}, todo, { completed: !todo.completed })
          : todo
      )
    }
    case types.DELETE_TODO_SUCCEEDED: {
      let todos = state.filter(todo => todo.key !== action.payload.key)
      return todos
    }
    case types.FETCH_TODOS_SUCCEEDED:
      {
        if (action.payload) {
          let todos = []
          if (action.payload) {
            Object.keys(action.payload).forEach(i => {
              let key = action.payload[i].id
              let todo = action.payload[i].data()
              todos.push({
                key: key,
                createdAt: todo.createdAt,
                name: todo.name,
                completed: todo.completed,
              })
            })
          }
          return [...todos]
        }
      }
      break
    default:
      return state
  }
}

export default todos
