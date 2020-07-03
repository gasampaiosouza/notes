import { useState, useEffect, useReducer } from 'react';
import Modal from '../Modal/Modal';
import style from './header.module.scss';
import Button from '../Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import List from '../List/List';

// type noteType = {
//   title: string;
//   desc: string;
//   date: string;
//   id: number;
// };

const App = () => {
  const [show, setShow] = useState(false);

  const [content, setContent] = useState([
    {
      title: '',
      desc: '',
      date: '',
      id: 1,
    },
  ]);

  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  console.log(`content: ${content}`);

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('listItems'))
      setContent(JSON.parse(localStorage.getItem('listItems')));
  }, []);

  const handleNotes = (prop) =>
    setContent((prevState) => [
      ...prevState,
      {
        title: prop.title,
        desc: prop.desc,
        date: prop.date,
        id: prevState[prevState.length - 1].id + 1,
      },
    ]);

  return (
    <div className={style['header']}>
      <h1 className={style['header--title']}>Notes app</h1>

      <Button callback={showModal} rounded>
        <FontAwesomeIcon icon={faPlus} />
      </Button>

      <Modal
        handleClose={hideModal}
        show={show}
        changeState={handleNotes}
        state={content}
      />

      <p className={`${style['header--desc']} desc`}>
        To delete a note, <span className="color bold">left click</span> it!
      </p>

      <List content={content} setContent={setContent} />
    </div>
  );
};

export default App;
