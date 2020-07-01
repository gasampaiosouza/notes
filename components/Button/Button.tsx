import React from 'react';
import style from './button.module.scss';

type buttonType = {
  showFunc: any;
};

const Button: React.FC<buttonType> = ({ children, showFunc }) => {
  return (
    <button className={`${style['button']} header--button`} onClick={showFunc}>
      {children}
    </button>
  );
};

export default Button;
