//! https://dev.to/zachsnoek/creating-custom-react-hooks-useform-1gon
// TODO: Complete hook

import React, { useState } from 'react';

const useForm = (initialState = {}, callback?: (formData: {}) => void) => {
  const [formData, setFormData] = useState(initialState);

  console.log('Form data: ', formData);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmitCallback = (e: React.SyntheticEvent) => {
    e.preventDefault();

    callback?.(formData);
  };

  return { formData, handleInputChange, handleSubmitCallback };
};

export default useForm;
