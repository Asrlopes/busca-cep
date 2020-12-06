/* eslint-disable no-console */
import React, { useState, useCallback, useEffect, useRef } from 'react';
import ReactInputMask from 'react-input-mask';

import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error, Tip } from './styles';

function Input({ name, Icon, ...rest }) {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref, value) {
        ref.setInputValue(value);
      },
      clearValue(ref) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      <ReactInputMask
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />

      {error ? (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      ) : (
        <Tip title="É necessário 8 digitos para formar um cep. Exemplo: 00000-000">
          <FiAlertCircle color="#232129" size={20} />
        </Tip>
      )}
    </Container>
  );
}

export default Input;
