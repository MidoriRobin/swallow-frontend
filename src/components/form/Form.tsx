import styled from '@emotion/styled';
import * as React from 'react';
import { useState } from 'react';

const FormCont = styled.div`
  /* Layout */

  /* Presentation */
`;

interface IFormProps {
  callback: Function;
}

interface FormTypeData {
  Username: string;
  Password: string;
}

function SimpleForm({ callback }: IFormProps): JSX.Element {
  const [formData, setFormData] = useState<FormTypeData>({
    Username: '',
    Password: '',
  });

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    console.log('Submit form data');
    console.log("Form's Data", formData);
    callback(formData);
  }

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    console.log('form data changed');

    let newFormData = { ...formData };

    //? accessing variables by key (based on answer 2): https://stackoverflow.com/questions/41993515/access-object-key-using-variable-in-typescript
    const keyTyped = e.currentTarget.name as keyof typeof newFormData;
    newFormData[keyTyped] = e.currentTarget.value;

    setFormData({ ...newFormData });

    console.log('New form data', newFormData);
  }

  return (
    <FormCont>
      <form action="" onSubmit={handleSubmit}>
        <label>
          Username:{' '}
          <input
            type="text"
            name="Username"
            value={formData.Username}
            onChange={handleChange}
          />{' '}
        </label>
        <label>
          Password:{' '}
          <input
            type="text"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
          />{' '}
        </label>
        <button type="submit">Submit</button>
      </form>
    </FormCont>
  );
}

export default SimpleForm;
