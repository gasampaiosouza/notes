import { useState } from 'react';
import Modal from '../Modal/Modal';
import style from './header.module.scss';
import Button from '../Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import List from '../List/List';

type noteType = {
  title: string;
  desc: string;
};

const App = () => {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState([
    {
      title: '',
      desc: '',
      id: 0,
    },
  ]);

  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  const handleNotes = (prop: noteType) =>
    setContent((prevState) => [
      ...prevState,
      {
        title: prop.title,
        desc: prop.desc,
        id: prevState[prevState.length - 1].id + 1,
      },
    ]);

  return (
    <div className={style['header']}>
      <h1 className={style['header--title']}>Notes app</h1>

      <Button showFunc={showModal} classname="button">
        <FontAwesomeIcon
          icon={faPlus}
          className={style['header--button__icon']}
        />
      </Button>

      <Modal handleClose={hideModal} show={show} changeState={handleNotes} />

      <p className={`${style['header--desc']} desc`}>
        To delete a note, <span className="color bold">left click</span> it!
      </p>

      <List content={content} setContent={setContent} />
    </div>
  );
};

export default App;
