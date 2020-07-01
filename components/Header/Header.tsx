import React, { useState } from 'react';
import style from './header.module.scss';

const Header = () => {
  const [visibility, setVisibility] = useState('not-visible');

  function toggleModal() {
    const toggleClass = visibility === 'visible' ? 'not-visible' : 'visible';

    return setVisibility(toggleClass);
  }

  return (
    <div>
      <button className="btn" onClick={toggleModal}>
        new note
      </button>

      {/* modal */}
      <div
        className={`${style['overlay']} ${visibility}`}
        onClick={toggleModal}
      >
        {/* separar isso */}
        <div className={style['modal--container']}></div>
      </div>
    </div>
  );
};

export default Header;
