import { useState } from 'react';

export const useForm = ( initialValue = {} ) => {
  const [formState, setformState] = useState( initialValue );

  const handleInputChange = ({ target }) => {
    setformState({
      ...formState,
      [target.name]: target.value
    })
  }
  return [formState, handleInputChange, setformState];
}
