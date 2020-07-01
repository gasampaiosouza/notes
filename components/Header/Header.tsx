import { useState } from 'react';
import Modal from '../Modal/Modal';
import style from './header.module.scss';
import Button from '../Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [show, setShow] = useState(false);

  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  return (
    <div className={style['header']}>
      <h1 className={style['header--title']}>Notes app</h1>

      <Button showFunc={showModal}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>

      <Modal handleClose={hideModal} show={show} />
    </div>
  );
};

export default App;
