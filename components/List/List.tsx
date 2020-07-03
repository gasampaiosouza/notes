import style from './list.module.scss';
import toggleNote from './toggleNote';
import { useRef } from 'react';

type listType = {
  content: {
    title: string;
    desc: string;
    date: string;
    id: number;
  }[];
  setContent: any;
};

function List({ content, setContent }: listType) {
  const listItem = useRef(null);

  const deleteNote = (list_id: string) =>
    setContent(content.filter((item) => item.id.toString() != list_id));

  return (
    <div className={style['list']}>
      <h1 className={style['list--title']}>Your notes</h1>

      <div className={style['list--header']}>
        <span className={style['list--header__title']}>TITLE</span>
        <span className={style['list--header__date']}>DATE</span>
      </div>

      {Object.keys(content).length !== 1 ? (
        content.map((item) => {
          if (!item.title) return;

          return (
            <div
              className={`${item} ${style['list--item']}`}
              onClick={toggleNote}
              key={item.id}
              style={{ maxHeight: '50px' }}
              ref={listItem}
              id={item.id.toString()}
              onContextMenu={(ev) => {
                ev.preventDefault();
                const clickedListID = ev.currentTarget.id;

                deleteNote(clickedListID);
              }}
            >
              <div className={style['list--item__info']}>
                <p className={style['list--item__title']}>{item.title}</p>
                <p className={style['list--item__date']}>{item.date}</p>
              </div>

              <div className={style['list--item__note']}>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })
      ) : (
        <p className={`${style['list--empty__message']} desc`}>
          You do not have any notes
        </p>
      )}
    </div>
  );
}

export default List;
