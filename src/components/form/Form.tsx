import styled from '@emotion/styled';
import * as React from 'react';
import { useState } from 'react';
import useForm from '../../hooks/useForm';
// TODO: Import useForm hook

const FormCont = styled.div`
  /* Layout */
  display: flex;
  flex-direction: column;
  /* Presentation */
`;

const InputArea = styled.input`
  /* Layout */

  /* Presentation */
`;

interface IFormProps {
  submitAction: Function;
  fieldItems?: Field[];
  formStyle?: {};
  className: string;
}

// TODO: Adjust type for drop down options
export type Field = {
  // Name of the field and its corresponding name in data form
  name: string;
  size: 'sml' | 'med' | 'lrg';
  type:
    | 'checkbox'
    | 'date'
    | 'email'
    | 'password'
    | 'number'
    | 'text'
    | 'textarea'
    | 'dropdown';
  // specific styling to be applied to field
  style: {};
  key: string;
  required?: boolean;
  max?: number;
  min?: number;
  pattern?: string;
  // Any important info to be communicated for the field
  tooltip?: string;
};

// TODO:Set form to accept an array with a list of objects indicating the number of fields and how the fields should be structured (DONE)
// TODO: Add styling
// TODO: Add validation for required fields
//! Defer form styling to calling component
function SimpleForm({
  submitAction,
  fieldItems,
  formStyle,
  className,
}: IFormProps): JSX.Element {
  const { formDataOut, handleInputChange, handleSubmitCallback } = useForm(
    formKeyToObj(fieldItems),
    submitAction,
  );

  function formKeyToObj(fieldItemList: Field[] | undefined) {
    if (!fieldItemList) {
      console.error('Field items not passed in');
      return {};
    }

    let listItems = fieldItemList.map((fieldItem) => fieldItem.key);

    return listItems.reduce(
      (prevVal, curVal) => ({ ...prevVal, [curVal]: '' }),
      {},
    );
  }

  return (
    <form action="" onSubmit={handleSubmitCallback} className={className}>
      {Object.entries(formDataOut).map((field) => {
        const fieldKey = field[0];
        const fieldValue = field[1] as string;
        const fieldInfo = fieldItems?.find(
          (fieldItem) => fieldItem.key === field[0],
        );
        return (
          <label key={fieldKey}>
            {fieldInfo?.name}:
            {fieldInfo?.type !== 'textarea' ? (
              <InputArea
                type={fieldInfo?.type}
                name={fieldKey}
                value={fieldValue}
                onChange={handleInputChange}
                required={fieldInfo?.required}
              />
            ) : (
              <textarea
                name={fieldKey}
                cols={30}
                rows={10}
                required={fieldInfo?.required}
                defaultValue={fieldValue}
              />
            )}
          </label>
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;
