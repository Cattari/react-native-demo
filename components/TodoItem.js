import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Animated, StyleSheet, TextInput } from 'react-native';
import useFade from '../hooks/useFade';

const styles = StyleSheet.create({
  root: {
    opacity: 0,
    height: 30,
    borderTopWidth: 1,
    borderColor: 'grey',
    borderBottomWidth: 1,
  },
  input: {
    flex: 1
  }
});

const TodoItem = ({ id, title, isCompleted, isNew, onSubmit }) => {
  const opacity = !isNew ? useFade({ duration: 300 }) : 1;
  const [titleCopy, changeTitle] = useState(title);
  const resetInput = () => {
    return changeTitle(isNew ? '': title);
  }
  const handleSubmit = () => {
    if (isNew) {
      changeTitle('');
    }

    return onSubmit({ id, title: titleCopy })
  };

  return (
    <Animated.View style={[styles.root, { opacity }]}>
      <TextInput
        style={styles.input}
        blurOnSubmit={!isNew}
        onChangeText={changeTitle}
        onBlur={resetInput}
        value={titleCopy}
        onSubmitEditing={handleSubmit}
      />
    </Animated.View>
  )
}

TodoItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  isNew: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired
}

TodoItem.defaultProps = {
  isNew: false,
  title: ''
}

export default memo(TodoItem);