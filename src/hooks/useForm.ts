//! https://dev.to/zachsnoek/creating-custom-react-hooks-useform-1gon
// TODO: Complete hook

import React, { FormEvent, ChangeEventHandler, useState } from 'react';
import { ChangeEvent } from 'react';

const useForm = (initialState = {}, callback: Function) => {
  const [formDataOut, setFormData] = useState(initialState);

  console.log('Form data: ', formDataOut);

  function isFormEvent(e: any) {
    return 'bubbles' in e;
  }

  const handleInputChange = (
    e:
      | FormEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formDataOut,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmitCallback = (e: React.SyntheticEvent) => {
    e.preventDefault();

    callback?.(formDataOut);
  };

  return { formDataOut, handleInputChange, handleSubmitCallback };
};

export default useForm;
