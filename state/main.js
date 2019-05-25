const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
const DELETE_TODO_ITEM = 'ADD_TODO_ITEM';
const CHANGE_TODO_ITEM = 'CHANGE_TODO_ITEM';

export const initialState = {
  todos: [{
    id: 1,
    title: 'hello'
  }],
  isCompletedShown: false
}

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return { ...state, todos: [...state.todos, action.data] };
    case DELETE_TODO_ITEM:
      return { ...state, todos: state.todos.filter(item => item.id !== action.data.id) };
    case CHANGE_TODO_ITEM:
      return { 
        ...state, 
        todos: state.todos.map(item => item.id === action.data.id ? { ...item, ...action.data } : item) 
      }
    case TOGGLE_COMPLETED_SHOWN:
      return { ...state, isCompletedShown: action.data.isCompletedShown }
    default:
      return state;
  }
};

export const addTodoItem = ({ title }) => {
  const id = new Date().getUTCMilliseconds();

  return { type: ADD_TODO_ITEM, data: { title, id } }
}

export const deleteTodoItem = ({ id }) => ({ type: DELETE_TODO_ITEM, data: { id } });

export const changeTodoItem = newItemData => ({ type: CHANGE_TODO_ITEM, data: newItemData });
