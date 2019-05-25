import React, { useReducer  } from 'react';
import { View, StyleSheet } from 'react-native';
import { todosReducer, initialState, changeTodoItem, addTodoItem } from '../state/main';
import TodoItem from '../components/TodoItem';

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

const TodoList = () => {
  const [state, dispatch] = useReducer(todosReducer, initialState);
  const onChangeItem = newItemData => dispatch(changeTodoItem(newItemData));
  const onAddItem = newItemData => dispatch(addTodoItem(newItemData));

  return (
    <View>
      {state.todos.map((itemData) => <TodoItem key={itemData.id} {...itemData} onSubmit={onChangeItem} />)}
      <TodoItem isNew onSubmit={onAddItem} />
    </View>
  )
}

export default TodoList