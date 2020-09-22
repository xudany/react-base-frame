import React from 'react';
import { useHistory } from 'react-router-dom';

const Infrastructure = () => {
  const history = useHistory();

  function handleClick() {
    history.goBack();
  }

  return (
    <div
      onClick={() => {
        handleClick();
      }}
    >
      infrastructure back
    </div>
  );
};

export default Infrastructure;
