import React from 'react';
import style from './button.module.scss';

type buttonType = {
  callback?: any;
  rounded?: boolean;
};

const Button: React.FC<buttonType> = ({ children, rounded, callback }) => {
  return (
    <button
      className={`${style['button']} ${rounded && style['rounded']} `}
      onClick={callback}
    >
      {children}
    </button>
  );
};

export default Button;
