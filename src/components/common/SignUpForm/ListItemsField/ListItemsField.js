import React, { forwardRef, useRef } from "react";
import { useField, splitFormProps } from "react-form";

const ListItemsField = forwardRef((props, ref) => {
  // Let's use splitFormProps to get form-specific props
  const [field, fieldOptions, { ...rest }] = splitFormProps(props);
  const {
    value,
    setValue,
    form,
    meta: { error, isTouched },
    getInputProps,
  } = useField(field, fieldOptions);

  const handleDeleteItemAction = (itemToDelete) => {
    const itemToRemoveIndex = form.values.skills.findIndex(
      (item) => item.id === itemToDelete.id
    );
    form.values.skills = form.values.skills.splice(itemToRemoveIndex, 1);
  };

  return (
    <div key={props.skill}>
      <label>
        Skill: <InputField field={`skills.${props.i}`} />{" "}
        <button type="button" onClick={() => removeFieldValue("friends", i)}>
          X
        </button>
      </label>
    </div>
  );
});

export default ListItemsField;
