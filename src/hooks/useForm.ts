//! https://dev.to/zachsnoek/creating-custom-react-hooks-useform-1gon
// TODO: Complete hook

import React, { useState } from 'react';

const useForm = (initialState = {}, callback?: ({}) => void) => {
  const [formDataOut, setFormData] = useState(initialState);

  console.log('Form data: ', formDataOut);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
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
