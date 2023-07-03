import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import {createContactThunk} from "../../redux/auth/thunks";

import {StyledForm} from './styled';


export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch()

  const changeHandler = event => {
    const {value, name} = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(createContactThunk({name, number}));
    setName("");
    setNumber("");
  };
  return (
    <StyledForm onSubmit={submitHandler}>
      <h3 className="form-title">Add your contacts:</h3>
      <label className='form-label'>
        <span className='label-name'>Name</span>
        <input
          className='form-input'
          type='text'
          value={name}
          name='name'
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={changeHandler}
        />
      </label>
      <label className='form-label'>
        <span className='label-name'>Number</span>
        <input
          className='form-input'
          type='tel'
          value={number}
          name='number'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          required
          onChange={changeHandler}
        />
      </label>
      <button type='submit' className='form-btn' onSubmit={submitHandler}>
        Add contact
      </button>
    </StyledForm>
  );
}
