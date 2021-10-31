import React, { useState } from "react";
import { splitFormProps, useField } from "react-form";
import { v4 as uuidv4 } from "uuid";

const InputAdder = React.forwardRef((props, ref) => {
  const [field, fieldOptions, { ...rest }] = splitFormProps(props);
  const { form } = useField(field, fieldOptions);
  const [item, setItem] = useState("");

  const handleAddItemAction = () => {
    if (item) {
      const newItem = {
        id: uuidv4(),
        title: item,
      };
      form.values.skills = [...form.values.skills, newItem];
      console.log(form.values.skills);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <input
        type="text"
        className="todo-list-input-field"
        onChange={(e) => {
          e.preventDefault();
          setItem(e.target.value);
        }}
      />
      <button
        className="todo-list-input-field-action"
        onClick={(e) => {
          e.preventDefault();
          props.onAdd("skills", item);
          //   handleAddItemAction();
        }}
      >
        <i className="fa fa-plus" />
      </button>
    </div>
  );
});

export default InputAdder;
