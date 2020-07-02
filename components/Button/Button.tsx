import React from 'react';
import style from './button.module.scss';

type buttonType = {
  showFunc?: any;
  text?: string;
  classname?: string;
  callback?: any;
};

const Button: React.FC<buttonType> = ({
  children,
  showFunc,
  text,
  classname,
  callback,
}) => {
  return (
    <button
      className={`${style['button']} ${classname}`}
      onClick={showFunc || callback}
    >
      {children || text}
    </button>
  );
};

export default Button;
