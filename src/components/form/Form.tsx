import styled from '@emotion/styled';
import * as React from 'react';
import { useState } from 'react';

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

export type Field = {
  // Name of the field and its corresponding name in data form
  name: string;
  size: 'sml' | 'med' | 'lrg';
  type: 'checkbox' | 'date' | 'email' | 'password' | 'number' | 'text';
  // specific styling to be applied to field
  style: {};
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
  const [formData, setFormData] = useState<any>({});

  React.useEffect(() => {
    let formDataOne: any = {};

    fieldItems?.forEach((fieldItem) => {
      const field = fieldItem.name.toLowerCase().replace(' ', '');
      formDataOne[field] = '';
    });

    setFormData(formDataOne);
  }, [fieldItems]);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    console.log('Submit form data');
    console.log("Form's Data", formData);
    submitAction(formData);
  }

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    console.log('form data changed');

    let newFormData = { ...formData };

    //? accessing variables by key (based on answer 2): https://stackoverflow.com/questions/41993515/access-object-key-using-variable-in-typescript
    const keyTyped = e.currentTarget.name as keyof typeof newFormData;
    newFormData[keyTyped] = e.currentTarget.value;

    setFormData({ ...newFormData });
  }

  return (
    <form action="" onSubmit={handleSubmit} className={className}>
      {fieldItems?.map((fieldItem, index) => {
        return (
          <label key={index}>
            {fieldItem.name}:
            <InputArea
              type={fieldItem.type}
              name={fieldItem.name.toLowerCase()}
              value={formData[`${fieldItem.name}`]}
              onChange={handleChange}
              required={fieldItem.required}
            />
          </label>
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;
