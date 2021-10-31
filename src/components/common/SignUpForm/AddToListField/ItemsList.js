import React, { useState } from 'react';
import ItemForm from './ItemForm';
import Item from './Item';

function ItemsList() {
  const [items, setItems] = useState([]);
  const [field, fieldOptions, { options, ...rest }] = splitFormProps(props);

  const {
    setValue,
    form,
    meta: { error, isTouched },
  } = useField(field, fieldOptions);

  const currentValue =
  form.values[field] === "" || form.values[field].length === 0
    ? "none"
    : form.values[field];

  const addItem = item => {
    if (!item.text || /^\s*$/.test(item.text)) {
      return;
    }

    const newTodos = [item, ...items];

    setItems(newTodos);
    console.log(...items);
  };

  const updateItem = (itemId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setItems(prev => prev.map(item => (item.id === itemId ? newValue : item)));
  };

  const removeItem = id => {
    const removedArr = [...items].filter(item => item.id !== id);

    setItems(removedArr);
  };

  const completeItem = id => {
    let updatedTodos = items.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setItems(updatedTodos);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <ItemForm onSubmit={addItem} />
      <Item
        items={currentValue}
        completeItem={completeItem}
        removeItem={removeItem}
        updateItem={updateItem}
      />
    </>
  );
}

export default ItemsList;