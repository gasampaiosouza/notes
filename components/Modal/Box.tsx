import { useRef } from 'react';
import style from './modal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

type boxType = {
  closeModal?: any;
  changeState?: any;
  state?: any;
};

const Box = ({ closeModal, changeState, state }: boxType) => {
  const titleInput = useRef(null);
  const descInput = useRef(null);

  function createNote() {
    const title: HTMLInputElement | null = titleInput.current;
    const desc: HTMLTextAreaElement | null = descInput.current;

    if (!title!.value || !desc!.value)
      return alert('Please, fill all the fields!');

    const getTodayDate = () => {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      const fixLength = (date: number) =>
        date.toString().length <= 1 ? `0${date}` : date;

      return `${fixLength(day)}/${fixLength(month)}/${fixLength(year)}`;
    };

    const itemInfo = {
      title: title!.value,
      desc: desc!.value,
      date: getTodayDate(),
    };

    closeModal();
    changeState(itemInfo);

    title!.value = '';
    desc!.value = '';
  }

  return (
    <div className={`${style['modal--box']}`}>
      <h1 className={style['modal--box__title']}>Create a new note</h1>

      <FontAwesomeIcon
        icon={faTimes}
        onClick={closeModal}
        className={style['modal--box__close']}
      />

      <div className={style['form']}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Your notes title"
          id="title"
          spellCheck="false"
          className={style['title']}
          ref={titleInput}
        />

        <label htmlFor="description">Description</label>
        <textarea
          spellCheck="false"
          placeholder="Your notes description"
          id="description"
          className={style['description']}
          ref={descInput}
        ></textarea>
      </div>

      <Button callback={createNote} rounded>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </div>
  );
};

export default Box;
