import { useRef } from 'react';
import style from './modal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

type boxType = {
  handleClose?: any;
  changeState?: any;
};

const Box = ({ handleClose, changeState }: boxType) => {
  const titleInput = useRef(null);
  const descInput = useRef(null);

  const createNote = () => {
    const title: HTMLInputElement | null = titleInput.current;
    const desc: HTMLTextAreaElement | null = descInput.current;

    handleClose();
    changeState({
      title: title!.value,
      desc: desc!.value,
    });

    title!.value = '';
    desc!.value = '';
  };

  return (
    <div className={`${style['modal--box']}`}>
      <h1 className={style['modal--box__title']}>Create a new note</h1>

      <FontAwesomeIcon
        icon={faTimes}
        onClick={handleClose}
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

      <Button text="Create" callback={createNote} />
    </div>
  );
};

export default Box;
